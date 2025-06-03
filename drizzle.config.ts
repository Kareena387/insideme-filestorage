import * as dotenv from "dotenv"
import { defineConfig } from 'drizzle-kit';


dotenv.config({path: ".env.local"}) //developing application local, we can ignore .local otherwise

if (!process.env.DATABSE_URL){
    throw new Error ("Database url is not set in .env.local");
}

export default defineConfig({
    schema: './lib/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
  },

  //migrations configuration
  migrations: {
    table: "_drizzle_migration",
    schema: "public"
  },

  verbose: true,
  strict: true,
});
