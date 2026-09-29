interface Animal {
name: string;
species: string;
age: number;
habitat?: Habitat;
}

interface Habitat {
location: string;
climate: string;
}

const lion: Animal = {
name: 'Simba',
species: 'León',
age: 5,
habitat: {
location: 'Sabana africana',
climate: 'Cálido'
}
};

console.log(lion);

// const tiger = lion; // Referencia
const tiger = structuredClone(lion); // Copia profunda

tiger.name = 'Shere Khan';
tiger.species = 'Tigre';
tiger.age = 8;
tiger.habitat!.location = 'Selva asiática';

console.log({ lion, tiger });