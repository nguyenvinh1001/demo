import * as Knex from "knex";
import { 
  Router, 
  RequestHandler, 
  Request, 
  Response, 
  NextFunction
} from "express";
import db from "../common/connectPg";

const knex = Knex({client: "pg"});
const router: RequestHandler = (req, res, next) => {
  
  
  const id = req.body.id;
  db.any(knex("User").delete("*").where("id",id).toString())
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(400).json({err: "Value is not exist"}))
}

export function del (req: Request, res: Response, next: NextFunction){
  return router(req, res, next);
}