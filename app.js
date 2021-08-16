const fs = require('fs');

const {Parser } = require('json2csv') ;



const someData = [
  {
    Name: 'Chequing',
    Name: 'Chequing',
    Balance: 397,
  },
  {
    Name: 'Chequing',
    Name: 'Chequing',
    Balance: 50000,
  },
  {
    Name: 'Chequing2',
    Name: 'Chequing3',
    Balance: 3000,
  }
]

const fields = Object.keys(someData[0]);


const csv = new Parser({fields})
fs.writeFile('data.csv', csv.parse(someData), function (err){
  if (err) {
    console.log(err);
    throw err;
  }
})
