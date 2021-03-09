import { cors, runMiddleware, randomUUID } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      if (req.query.name) {
        res.json(itemsData.layouts.filter((layout) => layout.name === req.query.name));
      } else {
        res.json(itemsData.layouts);
      }
      break;
    case "POST":
      const newLayoutInfo = JSON.parse(req.body);
      const newLayout = {
        ...newLayoutInfo,
        last_update: new Date(),
        id: randomUUID(),
      };
      itemsData.layouts.push(newLayout);
      res.statusCode = 200;
      res.json(newLayout);
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
