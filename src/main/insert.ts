import db from "../common/connect";
import * as Knex from "knex";
import { Router, RequestHandler, NextFunction , Request, Response} from "express";

const knex = Knex({client: "pg"})
const router: RequestHandler = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  db.any(knex("User").insert({name, age}).returning("*").toString())
    .then(data => res.status(200).json({data}))
    .catch(err  => res.status(400).json({err}))
}

export function add(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}