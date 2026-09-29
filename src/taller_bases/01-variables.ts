const university = 'Universidad XYZ'; 
let semester = 3;
let students = 25;
//university = 'Universidad ABC'; // Testo arroja un error dado que university es una constante
const containsLetterU = university.includes('U');
console.log({ semester, students, containsLetterU });

/*
1.	¿Qué diferencia existe entre const y let?
una variable const no permite modificaciones a sus valores una vez declarada, una variable let permite 
modificar su valor en el flujo del código sin generar conflicto con el valor anterior, siempre mostrara el ultimo valor asignado

2.	¿Qué sucede al intentar modificar university?
genera un error porque una variable declarada con const no puede ser reasignada con nuevos valores.

3.	¿Cuándo utilizarías const?
asignaría const cuando el valor de una variable no debe cambiar durante la ejecución del programa y para prevenir 
errores accidentales por reasignación de valores a una variable.

4.	¿Cuándo utilizarías let?
cuando sea necesario reasignar valores a una variable durante la ejecución del programa
*/