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
      const newLayoutInfo = JSON.parse(req.body);
      const layoutToEdit = itemsData.layouts.findIndex((layout) => layout.id === id);
      itemsData.layouts[layoutToEdit] = {
        ...itemsData.layouts[layoutToEdit],
        ...newLayoutInfo,
      };
      res.statusCode = 200;
      res.send("");
      break;
    case "DELETE":
      itemsData.layouts = itemsData.layouts.filter((layout) => layout.id !== id);
      res.statusCode = 200;
      res.send("");
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
