const opts = {
  base: {
    demmand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "Print on console the multiply table", opts)
  .command("crear", "Genereta a file with the multiply table", opts)
  .help().argv;


module.exports = {
    argv
}