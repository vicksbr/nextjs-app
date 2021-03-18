import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { fullWindowsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "PUT", "DELETE"]));

  const {
    query: { id },
  } = req;

  switch (req.method) {
    case "GET":
      const window = fullWindowsData.find((window) => window.id === id);
      res.statusCode = window ? 200 : 400;
      res.json(window || "");
      break;
    case "PUT":
      const windowToEdit = fullWindowsData.findIndex(
        (window) => window.id === id
      );
      fullWindowsData[windowToEdit] = {
        ...fullWindowsData[windowToEdit],
        ...req.body,
        last_update: new Date().getTime(),
      };
      res.statusCode = 200;
      res.json({});
      break;
    case "DELETE":
      const windowToRemove = fullWindowsData.findIndex(
        (window) => window.id === id
      );
      fullWindowsData.splice(windowToRemove, 1);
      res.statusCode = 200;
      res.json({});
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
