import knex from "../common/connectKnex";
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express";

const router: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  knex("User").select("*").where("id",id)
    .then(data => {
      knex("User").delete().where("id",">" ,12)
        .then(result => res.status(200).json({ result }))
        .catch(err => res.status(400).json({ err: "Can not delete" }))
    })
}
export function deleteKnex(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}