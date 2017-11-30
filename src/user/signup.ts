import db from "../common/connectPg";
import * as Knex from "knex";
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express";

const knex = Knex({ client: "pg" })

const router: RequestHandler = (req, res, next) => {

  const name = req.body.name;
  const password = req.body.password;


//kiem tra loi 

  db.one(knex("User").select("*").where("name", name).toString())
    .then(data => {
      console.log(data)
      res.status(200).json({ data: "Username was existed" })})
    .catch(result => {
      console.log(result);
      return db.any(knex("User").insert({ name, password }).returning("*").toString())
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json({ err: "Can not create" }))
    })
}

export function signup(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}