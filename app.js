const fs = require('fs');
const {Parser } = require('json2csv');
const { cachedDataVersionTag } = require('v8');

const archivo = 'data.txt'
let boletos = [];



let data = fs.readFileSync(archivo).toString();
boleto= data.split(';');

// boletos = boleto.map(e => {
//   return e.replace(/(\r\n|\n|\r)/gm, "");
// }) 

console.log(boleto)








