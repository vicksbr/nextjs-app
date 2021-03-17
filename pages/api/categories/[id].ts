import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
    body,
  } = req;

  switch (req.method) {
    case "PATCH":
    const catToEdit = itemsData.categories.findIndex((cat) => cat.id === id);
      itemsData.categories[catToEdit] = {
        ...itemsData.categories[catToEdit],
        ...body,
        last_update: new Date().getTime()
      };
      res.statusCode = 200;
      res.json({})
      break;
    case "DELETE":
      itemsData.categories = itemsData.categories.filter((cat) => cat.id !== id);
      res.statusCode = 200;
      res.json({});
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
