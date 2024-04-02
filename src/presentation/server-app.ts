import { CreateTable } from "../domian/use-cases/create-table.use-case";
import { SaveFile } from "../domian/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run({base, limit, showTable, fileDestination, fileName}: RunOptions) {
    console.log("ServerApp running");

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({ fileContent: table, destination: fileDestination, fileName });
    wasCreated ? console.log("File was created") : console.log("File was not created");
  }
}
