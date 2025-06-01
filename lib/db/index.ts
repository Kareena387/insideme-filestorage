
//Connect Drizzle ORM to the database

import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";


import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, { schema}) //-via the drizzle(DB)

export{sql} //if we need sometimes sql as an separate object-optional -raw sql query