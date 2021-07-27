const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear(); // Clear funciona en linux 
process.stdout.write('\033c'); // Este funciona en windows

// console.log(process.argv); // Imprime los argumentos que vienen desde la consola
console.log(argv);

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'))
    .catch(err => console.log(err));