const animalNames = ['León', 'Tigre', 'Elefante', 'Jirafa'];

const [, , elefante] = animalNames;

console.log(elefante);

const returnArrayFn = () => {
return ['Mamífero', 250] as const;
};

const [tipo, peso] = returnArrayFn();

console.log({ tipo, peso });

const useAnimalState = (value: string) => {
return [
value,
(newValue: string) => {
console.log(newValue);
}
] as const;
};

const [nombreAnimal, setNombreAnimal] = useAnimalState('León');

console.log(nombreAnimal);

setNombreAnimal('Tigre');