import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: show } = yarg;

let outputMessage = "";
const haederMessage = `=====================
    Table of ${base}
====================`;



outputMessage = haederMessage + "\n" + outputMessage;
if (show) {
  console.log(outputMessage);
}


// const table: number = 5;
// const tableData: string[] = [];
// for (let i = 1; i <= 9; i++) {
//   tableData.push(`5 * ${i} = ${table * i}`);
// }
// console.log(`=====================
//     Table of 5
// =====================`);
// console.log(tableData.join("\n"));

// fs.writeFileSync("outputs/tabla-5.txt", tableData.join("\n"));
