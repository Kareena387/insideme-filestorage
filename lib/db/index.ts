
//Connect Drizzle ORM to the database

import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";


import * as schema from "./schema";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local"}); // optional, only if needed here

if (!process.env.DARABASE_URL) {
    throw new Error("Missing DATABSE_URL in environment");
}

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema}); //-via the drizzle(DB)

export{sql}; //if we need sometimes sql as an separate object-optional -raw sql query