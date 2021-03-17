import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import { FullWindowData } from "types";

export const cors = (methods: string | string[]) =>
  Cors({
    methods: methods,
  });

type FnType = ReturnType<typeof Cors>;

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: FnType
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export const randomUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const extractWindowBasicData = (
  windowData: FullWindowData,
  layout_id?: string
) => {
  const { name, last_update, type, id } = windowData;
  if (layout_id) {
    const windowRank = windowData.layouts.find(
      (layout) => layout.id === layout_id
    )?.rank;
    return {
      name,
      last_update,
      type,
      id,
      rank: [
        {
          layout_id,
          value: windowRank,
        },
      ],
    };
  }
  return { name, last_update, type, id };
};