import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
    body: { name }
  } = req;

  switch (req.method) {
    case "PATCH":
      const tagToEdit = itemsData.tags.findIndex((tag) => tag.id === id);
      const updatedTag = { name, last_update: new Date().getTime()};
      itemsData.tags[tagToEdit] = {
        ...itemsData.tags[tagToEdit],        
        ...updatedTag, 
      };
      res.statusCode = 200;
      res.json({});
      break;
    case "DELETE":
      itemsData.tags = itemsData.tags.filter((tag) => tag.id !== id);
      res.statusCode = 200;
      res.json({});
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
