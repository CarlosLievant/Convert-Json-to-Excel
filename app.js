const fs = require('fs');
const { Parser } = require('json2csv');

const archivo = 'data.txt'

let boletos = [];
let data = fs.readFileSync(archivo).toString();

 boletos = data.split(/\r\n|\r|\n/);


concurso = boletos.map(participante => {
    return participante.split(';');
})
 
console.log(concurso);
const concursoFormateado = {...concurso}

const datosToCsv = Object.values(concursoFormateado);

const json2csvParser = new Parser({});

const csv = json2csvParser.parse(datosToCsv);
// console.log(csv);

fs.writeFileSync('out/out.csv', csv);




