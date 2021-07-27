const fs = require('fs');
require('colors');
const crearArchivo = async(base = 5, hasta = 10, listar = false) => {
    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.blue} ${i} ${'='.blue} ${base * i}\n`;
        }

        if (listar) {
            console.log('====================='.green);
            console.log(`    Tabla del ${base} `);
            console.log('====================='.green);
            console.log(consola);
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // });

        // Para este caso si ocurre un error, este se debe capturar en un try catch
        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

// Si la propiedad y el nombre de la función son iguales se puede dejar uno solo
module.exports = {
    crearArchivo: crearArchivo
};