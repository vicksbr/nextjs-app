import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "../../../lib/supabase"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
    body: { name }
  } = req;

  switch (req.method) {
    case "PATCH":
      const { data: tagData, error: tagError } = await supabaseClient.from('tags').update({ name }).eq('id', id)  
      if (tagError) { 
        res.statusCode == 400
        res.json(tagError)
      }
      res.statusCode == 200
      res.json(tagData)
      break;
    case "DELETE":
      const { data, error } = await supabaseClient.from('tags').delete().match({id: id as string}) 
      if (error) { 
        res.statusCode = 400;
        res.json(error)
      }
      res.statusCode = 200;
      res.json(data);
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
