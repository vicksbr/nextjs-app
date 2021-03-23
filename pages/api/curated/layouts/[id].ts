import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from '../../../../lib/supabase';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["PATCH", "DELETE"]));

  const {
    query: { id },
    body
  } = req;

  switch (req.method) {
    case "PATCH":
      const { 
        data: layoutData, 
        error: layoutError 
      } = await supabaseClient.from('layouts').update({ ...body }).eq('id', id)  
      if (layoutError) { res.statusCode == 400; res.json(layoutError) }
      res.statusCode == 200
      res.json(layoutData)
      break;
    case "DELETE":
      const { data, error } = await supabaseClient.from('layouts').delete().match({id: id as string}) 
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
