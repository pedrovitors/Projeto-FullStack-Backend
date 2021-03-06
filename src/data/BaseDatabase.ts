import dotenv from "dotenv"
import {Knex, knex} from "knex"

dotenv.config()

export class BaseDatabase {
    protected connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: Number(process.env.DB_PORT || 3306),
            multipleStatements: true
        }
    })
}