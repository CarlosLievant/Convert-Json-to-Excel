const fs = require('fs');
const {Parser } = require('json2csv');
const { cachedDataVersionTag } = require('v8');

const archivo = 'data.txt'
let boletos = [];
let objeto = {};
let data = fs.readFileSync(archivo).toString();

 boletos = data.split(";");


const tabla = boletos.map( (dato, i) => {
    return dato
});
  
 
// console.log({boletos});
console.log({tabla});



