import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Cors from "micro-cors";
import { getFirstAndLastEpisodes } from "_utils/getFirstAndLastEpisodes";
import { setResponseHeaders } from "_utils/server/setResponseHeaders";

interface EpisodeResponse
  extends Omit<LickApi.IEpisode, "airDate" | "noOfCharacters"> {
  characters: string[];
  air_date: string;
}

interface OriginLocationResponse
  extends Omit<LickApi.ILocation, "noOfResidents"> {
  residents: string[];
}

const cors = Cors({
  allowMethods: ["POST", "HEAD", "GET"],
});

const fetchOriginOrLocation = async ({
  name,
  url,
}: {
  name: string;
  url: string;
}): Promise<LickApi.ILocation> => {
  if (!url) return;

  const data = await fetch(url);

  const {
    type,
    dimension,
    residents,
    id,
  }: OriginLocationResponse = await data.json();

  return {
    id,
    name,
    type,
    dimension,
    noOfResidents: residents.length,
  };
};

const fetchEpisodes = async (
  episodes: string[]
): Promise<LickApi.IEpisode[]> => {
  if (!episodes || !episodes.length) return;

  const episodePromises = episodes.map((episodeUrl) =>
    fetch(episodeUrl).then((res) => res.json())
  );

  const episodeData: EpisodeResponse[] = await Promise.all(episodePromises);

  return episodeData.map(({ id, name, air_date, episode, characters }) => ({
    id,
    name,
    airDate: air_date,
    noOfCharacters: characters.length,
    episode,
  }));
};

export const characterHandler = nc().get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    setResponseHeaders(res);

    try {
      const data = await fetch(
        `${process.env.RM_BASE_ENDPOINT}/character/${req.query.id}`
      );

      const {
        name,
        location,
        origin,
        status,
        id,
        species,
        gender,
        image,
        episode,
      } = await data.json();

      const [originData, locationData] = await Promise.all([
        fetchOriginOrLocation(origin),
        fetchOriginOrLocation(location),
      ]);

      const episodes = await fetchEpisodes(getFirstAndLastEpisodes(episode));

      return res.status(200).json({
        id,
        name,
        status,
        species,
        gender,
        avatar: image,
        origin: originData ?? null,
        location: locationData ?? null,
        episodes: episodes ?? null,
      });
    } catch (error) {
      return res.status(500).json({
        error: `Rick and Morty are both dead come back in the year 3032`,
      });
    }
  }
);

export default cors(characterHandler);
