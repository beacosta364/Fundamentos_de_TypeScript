const myArray: number[] = [10, 20, 30, 40, 50];

//const myArray2 = myArray; // Esto es una referencia, no una copia
const myArray2= [...myArray]; // El operador spread (...) crea una copia superficial del array
myArray2.push(60);

console.log({ myArray, myArray2 });

/*
AGREGAR
push()       → final -> myArray2.push(60);
unshift()    → inicio -> myArray2.unshift(5);

QUITAR
pop()        → final -> myArray2.pop();
shift()      → inicio -> myArray2.shift();
splice()     → posición específica -> myArray2.splice(2, 1);

BUSCAR
includes()   → ¿existe? -> myArray.includes(30);
indexOf()    → ¿en qué posición está? -> myArray.indexOf(30);
find()       → encuentra elemento -> myArray.find(x => x > 25);
findIndex()  → encuentra posición -> myArray.findIndex(x => x > 25);

RECORRER
forEach()    → recorrer -> myArray.forEach(x => console.log(x));
map()        → transformar -> myArray.map(x => x * 2);
filter()     → filtrar -> myArray.filter(x => x > 25);
reduce()     → acumular/reducir -> myArray.reduce((acc, x) => acc + x, 0);

COPIAR / CORTAR
[...]        → copiar    -> const myArray2 = [...myArray];
slice()      → sacar una parte sin modificar  -> const myArray3 = myArray.slice(1, 4); // [20, 30, 40]

ORDENAR
sort()       → ordenar -> myArray.sort((a, b) => a - b); // Ascendente
reverse()    → invertir -> myArray.reverse(); // Invierte el orden del array

CONVERTIR
join()       → array → string  -> myArray.join(', '); // "10, 20, 30, 40, 50"
split()      → string → array  -> "10, 20, 30, 40, 50".split(', '); // [10, 20, 30, 40, 50]

*/