import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { fullWindowsData } from "mockedData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PUT"]));

  const {
    query: { id },
  } = req;

  switch (req.method) {
    case "PUT":
      const newBaseWindow = JSON.parse(req.body);
      const windowToEdit = fullWindowsData.findIndex(
        (window) => window.id === id
      );
      if (windowToEdit) {
        fullWindowsData[windowToEdit].created_from = newBaseWindow;
        res.statusCode = 200;
        res.send("");
      } else {
        res.statusCode = 400;
        res.send("");
      }
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
