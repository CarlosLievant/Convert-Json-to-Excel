const { log } = require('console');
const fs = require('fs');
const { Parser } = require('json2csv');

const archivo = 'data.txt'

let boletos = [];
let data = fs.readFileSync(archivo).toString();

 boletos = data.split(/\r\n|\r|\n/);


concurso = boletos.map(participante => {
    return participante.split(';');
})

boletos  =  concurso.map(participante => {
      const boleto=participante.shift();
      const cif=participante.shift();
      return [boleto, cif];
}) 



console.log(boletos);
// console.log(concurso);

const concursoFormateado = {...concurso}

const datosToCsv = Object.values(concursoFormateado);

const json2csvParser = new Parser({});
const json2csvParser2 = new Parser({});

const csv = json2csvParser.parse(datosToCsv);
const csv2 = json2csvParser2.parse(boletos);
// console.log(csv);

fs.writeFileSync('out/dbBoletos.csv', csv2);
fs.writeFileSync('out/dbCompleta.csv', csv);




