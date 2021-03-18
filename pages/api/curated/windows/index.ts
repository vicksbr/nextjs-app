import {
  cors,
  runMiddleware,
  randomUUID,
  extractWindowBasicData,
} from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { fullWindowsData } from "mockedData";
import { FullWindowData } from "types";

const filterWindows = (
  windows: FullWindowData[],
  queryString: NextApiRequest["query"]
) => {
  let filteredWindows = [...windows];
  Object.entries(queryString).forEach(([key, value]) => {
    if (value && typeof value === "string") {
      switch (key) {
        case "name":
          filteredWindows = filteredWindows.filter(
            (window) => window.name === value
          );
          return;
        case "categories":
          const categories = value
            .split(",")
            .map((category) => category.replace(/^"(.*)"$/, "$1"));
          filteredWindows = filteredWindows.filter((window) =>
            categories.includes(window.category.name)
          );
          return;
        case "type":
          const types = value.split(",");
          filteredWindows = filteredWindows.filter((window) =>
            types.includes(window.type)
          );
          return;
        case "layout_id":
          filteredWindows = filteredWindows.filter(
            (window) =>
              window.layouts.findIndex((layout) => layout.id === value) >= 0
          );
          return;
        default:
          return;
      }
    }
  });
  return filteredWindows;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));

  switch (req.method) {
    case "GET":
      const filteredWindows = filterWindows(fullWindowsData, req.query);
      const layout_id =
        typeof req.query.layout_id === "string" ? req.query.layout_id : "";
      const windowsBasicData = filteredWindows.map((window) =>
        extractWindowBasicData(window, layout_id)
      );
      res.statusCode = 200;
      res.json(windowsBasicData);
      break;
    case "POST":
      const newWindowInfo = JSON.parse(req.body);
      const newWindow = {
        ...newWindowInfo,
        last_update: new Date().getTime(),
        id: randomUUID(),
      };
      fullWindowsData.push(newWindow);
      res.statusCode = 200;
      res.json(newWindow);
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
