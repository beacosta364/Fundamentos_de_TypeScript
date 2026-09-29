function greetAnimal(name: string): string {
return `Hola ${name}`;
}

const greetAnimal2 = (name: string): string => `Hola ${name}`;

const message = greetAnimal('Simba');
const message2 = greetAnimal2('Baloo');

console.log({ message, message2 });

interface Animal {
id: string;
species: string;
}

function getAnimal(): Animal {
return {
id: 'ANI-001',
species: 'León',
};
}

const getAnimal2 = () => ({
id: 'ANI-002',
species: 'Oso',
});

const animal = getAnimal();
const animal2 = getAnimal2();

console.log({ animal, animal2 });

const animalAges: number[] = [2, 4, 6, 8, 10];

// animalAges.forEach(function (value) {
// const result = value + 1;
// console.log(result);
// });

animalAges.forEach((value) => {
const result = value + 1;
console.log({ result });
});

// animalAges.forEach(console.log);