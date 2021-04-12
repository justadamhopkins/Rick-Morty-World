import { NextApiResponse } from "next";

export const setResponseHeaders = (res: NextApiResponse) => {
  if (!res) return;
  res.setHeader("Content-Type", "application/json");
};
