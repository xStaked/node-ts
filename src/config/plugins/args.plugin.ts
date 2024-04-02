import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base of the multiplication table",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limit of the multiplication table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show the multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Your name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "destination of the task",
  })
  .check((argv, options) => {
    if (argv.b < 1) {
      throw "The base must be greater than 0";
    }
    return true;
  })
  .parseSync();
