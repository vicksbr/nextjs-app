import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { fluxonautUsers } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET"]));

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      if (typeof req.query.name === "string") {
        res.json(fluxonautUsers.filter((user) => user.name === req.query.name));
      } else {
        res.json(fluxonautUsers);
      }
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
