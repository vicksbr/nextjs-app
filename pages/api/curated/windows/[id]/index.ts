import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { fullWindowsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "PATCH", "DELETE"]));

  const {
    query: { id },
  } = req;

  switch (req.method) {
    case "GET":
      const window = fullWindowsData.find((window) => window.id === id);
      res.statusCode = window ? 200 : 400;
      res.json(window || "");
      break;
    case "PATCH":
      const newWindowInfo = JSON.parse(req.body);
      const windowToEdit = fullWindowsData.findIndex(
        (window) => window.id === id
      );
      fullWindowsData[windowToEdit] = {
        ...fullWindowsData[windowToEdit],
        ...newWindowInfo,
      };
      res.statusCode = 200;
      res.send("");
      break;
    case "DELETE":
      const windowToRemove = fullWindowsData.findIndex(
        (window) => window.id === id
      );
      fullWindowsData.splice(windowToRemove, 1);
      res.statusCode = 200;
      res.send("");
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
