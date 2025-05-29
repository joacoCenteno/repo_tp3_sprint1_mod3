import fs from 'fs';

//Clase para representar a Superheroe
class Superheroe{
    constructor( id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Funcion para leer y ordenar los superheroes
export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta,'utf8');
    const superheroesArray = JSON.parse(datos);

    //Se convierten a instancia Superheroe
    const superheroes = superheroesArray.map(
        heore => new Superheroe(heore.id, heore.nombreSuperheroe, heore.nombreReal, heore.nombreSociedad, heore.edad, heore.planetaOrigen, heore.debilidad, heore.poder, heore.habilidadEspecial, heore.aliado, heore.enemigo)
        
    );

    //Ordenar por nombre
    superheroes.sort((a,b) => a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));

    return superheroes;
}

//Funcion para agregar nuevos superheores
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    //Convertir los nuevos superheroes a instancia Superheroe
    const instanciaNuevos = nuevosSuperheroes.map(
        heroe => new Superheroe(heroe.id, heroe.nombreSuperheroe, heroe.nombreReal, heroe.nombreSociedad, heroe.edad, heroe.planetaOrigen, heroe.debilidad, heroe.poder, heroe.habilidadEspecial, heroe.aliado, heroe.enemigo)
    );

    //Se combinan las listas
    const listaActualizada = [...superheroesOriginales,...instanciaNuevos];

    //Se guarda la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');

    console.log('Lista de superheroes actualizada con exito');
}