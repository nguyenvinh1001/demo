import * as Sequelize from "sequelize";
import sequelize from "../common/connectSequelize";
import {
  Router,
  Request,
  Response,
  RequestHandler,
  NextFunction
} from "express"




const router: RequestHandler = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  const password = req.body.password;

  const user = sequelize.define("User", {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    address: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    }
  }
    , {
      freezeTableName: true,
      timestamps: false
    }
  );

  type userModel = {
    id: number
    name: string
    age: number
    date: Date
    address: string
    password: string
  }
  


  user.findOne({where: {name}})
    .then( data => {  
      if (!data) {
        user.create({name, age, address, password, date: new Date})
         .then(result => res.json({result}))
         .catch(err => res.json({err: "can not create"}))         
      }else{
        return res.json({data})
      }
    })
    .catch(err => res.json({err: "Can not connect server"}))
}

export function insertSe(req: Request, res: Response, next: NextFunction) {
  router(req, res, next)
}

