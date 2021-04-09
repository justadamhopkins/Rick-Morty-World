import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Cors from "micro-cors";

const cors = Cors({
  allowMethods: ["POST", "HEAD", "GET"],
});

export const charactersHandler = nc().get(
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Content-Type", "application/json");

    try {
      const data = await fetch(
        `${process.env.RM_BASE_ENDPOINT}/character/?name=rick&status=alive`
      );

      const characters: {
        results;
      } = await data.json();
      const formatCharacters = characters.results.reduce(
        (acc, { id, name, status, species, image, gender }) => {
          return [
            ...acc,
            {
              id,
              name,
              status,
              species,
              gender,
              avatar: image,
            },
          ];
        },
        []
      );

      return res.status(200).json(formatCharacters);
    } catch (error) {
      console.log("hehehe");
      return res.status(400).json({
        error: `Rick and Morty are both dead come back in the year 3032`,
      });
    }
  }
);

export default cors(charactersHandler);
