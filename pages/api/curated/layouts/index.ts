import { cors, runMiddleware, randomUUID } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));

  const { body, method, query } = req

  switch (method) {
    case "GET":
      res.statusCode = 200;
      if (query.name) {
        res.json(itemsData.layouts.filter((layout: any) => layout.name.toLowerCase().includes(req.query.name)));
      } else {
        res.json(itemsData.layouts);
      }
      break;
    case "POST":
      const newLayout = {
        ...body,
        last_update: new Date().getTime(),
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
