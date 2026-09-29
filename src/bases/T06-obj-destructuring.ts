const animal = {
nombre: 'Simba',
edad: 5,
especie: 'León',
};

const { nombre: nombreAnimal, edad, especie } = animal;

console.log({ nombreAnimal, edad, especie });

interface Animal {
nombre: string;
edad: number;
especie: string;
habitat?: string;
}

const useAnimalContext = (
{ nombre, edad, especie, habitat = 'Hábitat desconocido' }: Animal
) => {
return {
especieAnimal: especie,
datos: {
nombre,
edad,
},
habitat,
};
};

const { especieAnimal, datos, habitat } = useAnimalContext(animal);
const { nombre } = datos;

console.log({ especieAnimal, nombre, habitat });

const mascota = {
nombre: 'Firulais',
edad: 3,
especie: 'Perro',
lugar: 'Refugio Animal',
};

const {
nombre: nombreMascota,
edad: edadMascota,
especie: especieMascota,
lugar,
} = mascota;

const nuevaEdad = edadMascota + 2;
const nuevoNombre = 'Max';
const nuevaEspecie = 'Labrador';

mascota.edad = 4;

console.log(
`El animal ${nuevoNombre} tiene ${nuevaEdad} años y pertenece a la especie ${nuevaEspecie}. Actualmente se encuentra en ${lugar}.`
);

console.log({
nombreMascota,
edadMascota,
especieMascota,
lugar,
});

console.log(
'La nueva edad del animal es:',
`${mascota.edad}`
);