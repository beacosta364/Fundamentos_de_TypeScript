const characterNames = ['Goku', 'vegeta', 'trunks', 'Gohan'];

const [, , trunks] = characterNames;
console.log(trunks);

const returnArrayFn = () => {
    return ['ABC', 123] as const;
} 

const [letters, numbers] = returnArrayFn();
console.log({ letters, numbers });

const useState = (value: string) => {
    return [value, (newValue: string) => 
        { console.log(newValue) }] as const;
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre('Vegeta');