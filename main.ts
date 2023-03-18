// Importamos las clases para poder usarlas
import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mails} from './mail';
import {Persona} from './persona';

// Creamos tres objetos de la clase Persona
let persona1 = new Persona(
    'Juan',
    'Pérez López',
    30,
    '12345678A',
    new Date(1992, 3, 14),
    'Marrón',
    'Masculino',
    [
        new Direccion('Calle Mayor', 10, 2, 'A', 28001, 'Madrid', 'Madrid')
    ],
    [
        new Mails('Personal', 'juan@gmail.com')
    ],
    [
        new Telefono('Móvil', 666555444)
    ],
    'Notas de prueba'
);

let persona2 = new Persona(
    'María',
    'García Fernández',
    25,
    '87654321B',
    new Date(1996, 7, 23),
    'Amarillo',
    'Femenino',
    [
        new Direccion('Calle Sol', 5, 1, 'B', 18001, 'Barcelona', 'Barcelona')
    ],
    [
        new Mails('Trabajo', 'maria.garcia@gmail.com')
    ],
    [
        new Telefono('Fijo', 931234567)
    ],
    'Otras notas'
);

let persona3 = new Persona(
    'Pedro',
    'Rodríguez Pérez',
    40,
    '98765432C',
    new Date(1982, 11, 5),
    'Rojo',
    'Masculino',
    [
        new Direccion('Calle Luna', 15, NaN,'', 46001, 'Valencia', 'Valencia')
    ],
    [
        new Mails('Personal', 'pedro.rodrigez@hotmail.com')
    ],
    [
        new Telefono('Móvil', 677889900),
        new Telefono('Trabajo', 912345678)
    ],
    'Notas de ejemplo'
);

// Imprimimos la informacion de los objetos Persona creados
console.log('------------PERSONAS CREADAS------------');
persona1.devolverDatos();
console.log('\n');
persona2.devolverDatos();
console.log('\n');
persona3.devolverDatos();

// Meto en un array las personas creadas
let personasArray:Persona[] = [persona1, persona2, persona3];

// Creo una nueva direccion, mail y telefono para aniadirlos
let direccionModificada = new Direccion('Calle Nueva', 5, 1, 'B', 28002, 'Madrid', 'Madrid');
let mailModificado = new Mails('Personal', 'nuevo.mail@gmail.com');
let tlfModificado = new Telefono('Casa', 911234567);
// Del array de personas me tiene que buscar la persona con ese DNI y aniadirle la direccion, el mail y el telefono
Persona.modificarPersona(personasArray, '12345678A', direccionModificada, mailModificado, tlfModificado);
console.log('\n------------PERSONAS DESPUES DEL METODO MODIFICAR------------');
// persona1 es la que se modifica
persona1.devolverDatos();
console.log('\n');
persona2.devolverDatos();
console.log('\n');
persona3.devolverDatos();