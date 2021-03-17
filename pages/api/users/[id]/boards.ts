import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { userBoards } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET"]));

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      res.json(userBoards);
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
