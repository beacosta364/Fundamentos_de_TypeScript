interface Student {
name: string;
age: number;
career: string;
semester: number;
}

const student: Student = {
name: "Laura",
age: 20,
career: "Ingeniería de Sistemas",
semester: 4
};

const { name, career, semester } = student;

console.log({ name, career, semester });

//RETO

interface Product {
id: number;
name: string;
price: number;
category: string;
}
const product: Product = {
id: 1,
name: "Laptop",
price: 3500000,
category: "Tecnología"
};
const { name: productName, price } = product;
console.log({ productName, price });