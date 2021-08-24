const fs = require('fs');
const {Parser } = require('json2csv');
const { cachedDataVersionTag } = require('v8');

const archivo = 'data.txt'
let boletos = [];
let objeto = {};
let data = fs.readFileSync(archivo).toString();

 boletos = data.split(";");

// console.log(typeof boletos);
// console.log({boletos});

let array  = boletos.map(boleto => {
  for(i=0;i<6 ; i++)
  
})




// let boletos = data.map(e => {
//   return e.replace(/(\r\n|\n|\r)/gm, "");
// })

// boleto= data.split(';');

// boletos = boleto.map(e => {
//   return e.replace(/(\r\n|\n|\r)/gm, "");
// }) 

// console.log(boletos)
