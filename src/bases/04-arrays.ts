const myArray: number[] = [1, 2, 3, 4, 5];

//const myArray2 = myArray; // Esto es una referencia, no una copia
const myArray2= [...myArray]; //esos ... son necesarios para hacer una desestructuración de los elementos del array y crear una copia del mismo, en lugar de una referencia al mismo array.

myArray2.push(6);

console.log({ myArray, myArray2 });