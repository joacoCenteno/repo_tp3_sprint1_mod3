import  {leerSuperheroes, agregarSuperheroes} from './utils.mjs';

const archivoOriginal = './export_and_import/superheroes.txt';
const archivoNuevos = './export_and_import/agregarSuperheroes.txt';

//Se agregan los nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista d esuperheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);

console.log('Superheroes Ordenados: ');
console.log(superheroes);