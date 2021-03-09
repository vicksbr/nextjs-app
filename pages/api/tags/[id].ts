import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
  } = req;

  switch (req.method) {
    case "PATCH":
      const newTagInfo = JSON.parse(req.body);
      const tagToEdit = itemsData.tags.findIndex((tag) => tag.id === id);
      itemsData.tags[tagToEdit] = {
        ...itemsData.tags[tagToEdit],
        ...newTagInfo,
      };
      res.statusCode = 200;
      res.send("");
      break;
    case "DELETE":
      itemsData.tags = itemsData.tags.filter((tag) => tag.id !== id);
      res.statusCode = 200;
      res.send("");
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
