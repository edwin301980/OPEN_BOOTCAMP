import * as moduloController  from "./modulo/controller.js";
import chalk from 'chalk';

const sum = moduloController.suma(1 , 2);
const mult = moduloController.multiplica(4 , 5);

console.log(sum);
console.log(chalk.green(mult));

