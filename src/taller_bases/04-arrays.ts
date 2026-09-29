
const products = [ "Laptop",
"Mouse", "Keyboard", "Monitor"
];

const products2= [...products]; 
products2.push("Tablet"); //añadir producto


const products3= [...products2]; 
products3.splice(2, 1); //eliminar producto 

//recorro el arreglo con for
console.log("recorrido con for...of")
for (const product of products) {
    console.log(product);
}

console.log("Primero:", products[0],"-", "Último:", products[products.length - 1]); //imprimir primer y ultimo elemento del array
console.log("Segundo array:", products2); 
console.log("Tercer array:", products3);
console.log("Longitud primer array:", products.length, "Longitud segundo array:",products2.length, "Longitud tercer array:",products3.length);  //imprimo la longitud de cada array

// RETO

interface Student {
name: string;
nota: number;
}

const students: Student[] = [
{
name: "Brayan",
nota: 4.5
},
{
name: "Juan",
nota: 3.8
},
{
name: "Estein",
nota: 4.9
},
];

for (const student of students) {
console.log(`${student.name} - ${student.nota}`);
}