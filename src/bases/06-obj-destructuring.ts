const person = {
    name: 'tony',
    age: 45, 
    key: 'ironman',
};

const { name: ironmanName, age, key } = person;

// const name =person.name;
// const age = person.age;
// const key = person.key;

console.log({ ironmanName, age, key });

interface hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = 
({ name, age, key, rank = 'sin rango' }: hero) => {
    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank: rank
    };
};

const { keyName, user, rank } = useContext(person);
const {name}=user;
console.log({ keyName, name, rank });

const estudiante = {
    nombre: 'Juan',
    edad: 20,
    carrera: 'Ingeniería',
    universidad: 'Universidad Nacional',
};

const { nombre, edad, carrera, universidad } = estudiante;

const nuevaEdad= edad + 5;
const correccionNombre = 'andres mahecha';
const cambioDeCarrera = 'Medicina';

estudiante.edad = 21;

console.log( 
    `El estudiante ${correccionNombre} tiene ${nuevaEdad} años y estudia ${cambioDeCarrera} en ${universidad}.`
);

console.log({ nombre, edad, carrera, universidad });
console.log('el estudiante con la nueva edad es: ', `${estudiante.edad}`);