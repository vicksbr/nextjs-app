import { cors, runMiddleware } from "utils/api";
import type { NextApiRequest, NextApiResponse } from "next";

import { supabaseClient } from '../../../lib/supabase';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(["GET", "POST"]));
  const { body: { name } } = req;
  
  switch (req.method) {
    case "GET":
      if (req.query.name) {        
        const { data, error } = await supabaseClient.from('tags').select('name').filter('name', 'eq', req.query.name)
        if (error) { 
          res.statusCode = 400
          res.json(error)
        }
        res.json(data)
      } else {
        const {data , error} = await supabaseClient.from('tags').select()
        if (error) { 
          res.statusCode = 400
          res.json(error)
        }
        res.json(data);
      }
      break;
    case "POST":
      const newTag = { name: name, last_update: new Date().getTime() };
      const { data, error } = await supabaseClient.from('tags').insert(newTag)
      if (error) { 
        res.statusCode = 400;  
        res.json(error);
      }
      res.statusCode = 200;
      res.json([...data as Array<any>].shift())
      break;
    default:
      res.statusCode = 400;
      break;
  }
};

export default handler;
