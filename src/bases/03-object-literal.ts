interface Peresona {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Peresona = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '12345',
        city: 'New York'
    }
};

console.log(ironman);

//const spiderman = ironman; // Esto es una referencia, no una copia
const spiderman = structuredClone(ironman); // Esto es una copia profunda
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';  
spiderman.age = 21;
spiderman.address!.city = 'New York City';
console.log({ ironman, spiderman });