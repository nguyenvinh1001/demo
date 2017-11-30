import knex from "../common/connectKnex";
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express";



const router: RequestHandler = (req, res, next) => {
  knex("User").select()
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(400).json({err: "Fail"}))

}
export function showKnex(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}