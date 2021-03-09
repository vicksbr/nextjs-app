import { cors, runMiddleware, randomUUID } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      if (req.query.name) {
        res.json(
          itemsData.categories.filter(
            (category) => category.name === req.query.name
          )
        );
      } else {
        res.json(itemsData.categories);
      }
      break;
    case "POST":
      const newCatInfo = JSON.parse(req.body);
      const newCat = {
        ...newCatInfo,
        last_update: new Date(),
        id: randomUUID(),
      };
      itemsData.categories.push(newCat);
      res.statusCode = 200;
      res.json({
        name: newCat.name,
        id: newCat.id,
        rank: newCat.rank,
      });
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
