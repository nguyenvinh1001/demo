import * as Knex from "knex";
import db from "../common/connect";
import { Router, RequestHandler } from "express";
import { Request, Response, NextFunction } from "express";

const knex = Knex({ client: "pg" })
const router: RequestHandler = (req, res, next) => {
  db.any(knex("User").select("*").toString())
    .then(data => res.status(200).json({ data }))
    .catch(err => res.status(400).json(err))
}

export function show(req: Request, res: Response, next: NextFunction) {
  router(req, res, next);
} 