import sequelize from "../common/connectSequelize";
import * as Sequelize from "sequelize";
import {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction
} from "express"

// set ngay hien hanh khi createdAt
// kiem tra co loi, hay khong co data
const router: RequestHandler = (req, res, next) => {

  const User = sequelize.define("User",{},{
    freezeTableName: true,
    timestamps: false, 
  });
  User.findAll()
    .then(data => 
      res.json(data)
    )
    .catch(err =>
      res.json(err)  
    )
}

export function showSe(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}
	
