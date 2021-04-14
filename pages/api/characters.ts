import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Cors from "micro-cors";
import { setResponseHeaders } from "_utils/server/setResponseHeaders";

interface CharactersResponse extends Omit<LickApi.ICharacterCore, "avatar"> {
  image: string;
}

const cors = Cors({
  allowMethods: ["POST", "HEAD", "GET"],
});

export const charactersHandler = nc().get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    setResponseHeaders(res);

    try {
      const data = await fetch(
        `${process.env.RM_BASE_ENDPOINT}/character/?name=rick&status=alive`
      );

      const { results }: { results: CharactersResponse[] } = await data.json();

      const formatCharacters = results.map(
        ({
          id,
          name,
          status,
          species,
          image,
          gender,
        }): LickApi.ICharacterCore => {
          return {
            id,
            name,
            status,
            species,
            gender,
            avatar: image,
          };
        }
      );

      return res.status(200).json(formatCharacters);
    } catch (error) {
      return res.status(500).json({
        error: `This character is no longer around come back in the year 3032`,
      });
    }
  }
);

export default cors(charactersHandler);
