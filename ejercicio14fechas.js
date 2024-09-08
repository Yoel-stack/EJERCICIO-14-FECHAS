/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 */

let fechaActual = new Date(); 
let birthDate = new Date('2002-07-3 15:20:43');
let anoActual = parseInt(fechaActual.getFullYear());
let anoCumple = parseInt(birthDate.getFullYear());
let mesCumple = parseInt(birthDate.getMonth());
let diaCumple = parseInt(birthDate.getDay());
let horaCumple = parseInt(birthDate.getHours());
let minutoCumple = parseInt(birthDate.getMinutes());
let segundoCumple = parseInt(birthDate.getSeconds());

console.log(fechaActual, birthDate);

let transcurso = anoActual-anoCumple;

console.log(`You have ${transcurso} years old!`);
console.log(`Day: ${diaCumple}, Mes: ${mesCumple}, Año: ${anoActual}`);
console.log(`Hours: ${horaCumple}, Minutes: ${minutoCumple}, Second: ${segundoCumple}`);
