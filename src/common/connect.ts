import * as express from "express";
import * as pgPromise from "pg-promise";
import * as Promise from "bluebird";

const initOptions = {
  promiseLib : Promise
};

const pgp = pgPromise(initOptions);
const cn = "postgres://postgres:@localhost:5432/postgres"
const db = pgp(cn)

export default db