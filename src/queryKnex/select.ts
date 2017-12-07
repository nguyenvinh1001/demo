import knex from "../common/connectKnex";
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express"


const router: RequestHandler = (req, res, next) => {

  knex("User").select().limit(10)
    .map((row: <T>(arg: T) => T) =>{
      return row.name;
    })
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(400).json({ err: "Fail" }))

}

export function showKnex(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}