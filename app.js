const argv = require("./config/yargs").argv;
const colors = require("colors");

const { createFile, listTable } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "listar":
    listTable(argv.base, argv.limite);
    break;

  case "crear":
    createFile(argv.base, argv.limite)
      .then((file) => console.log(`file has been created: ${file.blue}`))
      .catch((e) => console.log(e));
    break;

  default:
    console.log("Command does not recognized");
}

// console.log(process.argv);
// console.log('Limite', argv.limite);

// let param = argv[2];
// let base = param.split("=")[1];

// console.log(base);
