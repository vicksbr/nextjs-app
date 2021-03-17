import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { itemsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const { body, query: { id } } = req;

  switch (req.method) {
    case "PATCH":
      const layoutToEdit = itemsData.layouts.findIndex((layout) => layout.id === id);
      itemsData.layouts[layoutToEdit] = {
        ...itemsData.layouts[layoutToEdit],
        ...body,
        last_update: new Date().getTime()
      };
      res.statusCode = 200;
      res.json({});
      break;
    case "DELETE":
      itemsData.layouts = itemsData.layouts.filter((layout) => layout.id !== id);
      res.statusCode = 200;
      res.json({});
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
