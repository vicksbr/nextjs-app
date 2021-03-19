import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "../../../lib/supabase"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
    body: { name, rank }
  } = req;

  switch (req.method) {
    case "PATCH":
      const { 
        data: categoryData, 
        error: categoryError 
      } = await supabaseClient.from('categories').update({ name, rank, last_update: new Date().getTime()}).eq('id', id)  
      
      if (categoryError) { res.statusCode == 400; res.json(categoryError) }
      res.statusCode == 200
      res.json(categoryData)
      break;
    case "DELETE":
      const { data, error } = await supabaseClient.from('categories').delete().match({id: id as string}) 
      if (error) { res.statusCode = 400; res.json(error) }
      res.statusCode = 200;
      res.json(data);
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
