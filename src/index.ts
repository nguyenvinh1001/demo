import * as express from "express";
import * as pgPromise from "pg-promise";
import * as bodyParser from "body-parser";

import  { show }  from "./query/show";
import  { del }  from "./query/delete";
import { add } from "./query/insert";
import { update } from "./query/update";
import { signup } from "./user/signup";

//Knex
import {showKnex} from "./queryKnex/select";
import {addKnex} from "./queryKnex/insert";
import { deleteKnex } from "./queryKnex/delete";

// sequelize
import { showSe } from "./sequelize/selectSe";
import { insertSe } from "./sequelize/insertSe";

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/show", show);
app.post("/delete", del);
app.post("/insert", add);
app.post("/update/:id", update);
app.post("/home/signup", signup);

// connect and query with Knex
app.get("/knex/show", showKnex);
app.post("/knex/insert", addKnex);
app.post("/knex/delete/:id", deleteKnex);


// quert with sequelize
app.get("/sequelize/show", showSe);
app.post("/sequelize/insert", insertSe)

app.listen(port, () => console.log(`Go ${port}`));


