interface student {
    name: string;
    age: number;
    career: string;
    semester: number;
    address?: address;
}

interface address {
    city: string;
}

const student: student = { 
    name: "Laura", 
    age: 20,
    career: "Ingeniería de Sistemas", 
    semester: 4
};

student.address = {
city: "Cali"
};
student.semester = 5;
console.log(student);

/*RETO */
interface Product {
id: number;
name: string;
price: number;
category: string;
available: boolean;
}

const product: Product = {
id: 1,
name: "Portátil Lenovo",
price: 3500000,
category: "Tecnología",
available: true
};

const description = `
El producto ${product.name} tiene un precio de $${product.price}, pertenece a la categoría ${product.category} y actualmente se encuentra
${product.available ? "disponible" : "no disponible"}.
`;

console.log(description);