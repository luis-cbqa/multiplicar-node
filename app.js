// node app listar --base 10
// node app listar -b 10
// node app crear --base 10 --limite 5
// node app crear -b 10 -l 5

const argv = require("./config/yargs").argv;
const colors = require("colors/safe");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}