import { cors, runMiddleware, randomUUID } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      if (req.query.name) {
        res.json(itemsData.tags.filter((tag) => tag.name === req.query.name));
      } else {
        res.json(itemsData.tags);
      }
      break;
    case "POST":
      const newTagInfo = JSON.parse(req.body);
      const newTag = {
        ...newTagInfo,
        last_update: new Date(),
        id: randomUUID(),
      };
      itemsData.tags.push(newTag);
      res.statusCode = 200;
      res.json({
        name: newTag.name,
        id: newTag.id,
      });
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
