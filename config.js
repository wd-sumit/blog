import { resolve } from "path";
import { load } from "dotenv-extended";
import { env } from "@helpers/utils";

load({
  silent: true,
  path: resolve(__dirname, ".env"),
  defaults: resolve(__dirname, ".env"),
  schema: resolve(__dirname, ".env.example"),
  errorOnMissing: env("NODE_ENV") === "development",
  errorOnExtra: false,
  errorOnRegex: false,
  overrideProcessEnv: false,
});