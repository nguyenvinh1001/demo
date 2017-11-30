import * as Knex from "knex";
import db from "../common/connectPg";
import { 
  Router, 
  RequestHandler, 
  Request, 
  Response, 
  NextFunction 
} from "express";

const knex = Knex({ client: "pg" });
const router: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  db.one(knex("User").select("*").where("id", id).toString())
    .then(data => {
      db.any(knex("User").update({ name, age }).where("id",id).returning("*").toString())
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({err: "can not update"}))
    })
    .catch(err => res.status(400).json({err: "can not find"}))
}

export function update( req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}