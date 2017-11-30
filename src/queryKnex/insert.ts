import knex from "../common/connectKnex"
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express";
// khi nao co loi , khi nao khong co data
const router: RequestHandler = (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  const age = req.body.age;
  const id = req.body.id;
  knex("User").select("*").where("name", name)
    .then(data => {
      if (data.length === 0) {
        // console.log(data)
        return knex("User").insert({ name, password, age }).returning("*")
      }

      // existed
    })
    .then(result => res.status(200).json({ result }))
    .catch(err => {
      res.status(400).json({ err })
    })

}
export function addKnex(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}