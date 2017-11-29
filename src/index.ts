import * as express from "express";
import * as pgPromise from "pg-promise";
import * as bodyParser from "body-parser";
import  { show }  from "./main/show";
import  { del }  from "./main/delete";
import { add } from "./main/insert";
import { update } from "./main/update";


const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/show", show);
app.post("/delete", del);
app.post("/insert", add);
app.post("/update/:id", update);



app.listen(port, () => console.log(`Go ${port}`));


