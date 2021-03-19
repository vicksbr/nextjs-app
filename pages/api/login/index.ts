import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["POST"]));
  switch (req.method) {
    case "POST":
      const { user, password } = req.body;
      if (user === "admin" && password === "admin") {
        res.statusCode = 200;
        res.json({});
      } else {
        res.statusCode = 401;
        res.json({
          error: "invalid credentials",
        });
      }
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
