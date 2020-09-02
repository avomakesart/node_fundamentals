const fs = require("fs");
const colors = require("colors");

let listTable = (base, limite = 10) => {

  console.log('===================================='.blue);
  console.log(`Table ${base} has been created`.blue);
  console.log('===================================='.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(colors.cyan(`${base} * ${i} = ${base * i}\n`));
      }

}


let createFile = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value ${base} is not a number`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tables/table-${base}-to-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`table-${base}-to-${limite}.txt`);
    });
  });
};

module.exports = {
  createFile,
  listTable
};
