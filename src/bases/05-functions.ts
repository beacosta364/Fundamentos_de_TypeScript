function greet(name: string): string {
    return `Hello ${name}`;
}

const greet2 = (name: string): string => `Hello ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log({ message, message2 });

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ASD-45',
        username: 'my-user',
    }
}

const greetUser2 =()=>({
    uid: 'ASD-45',
    username: 'my-user',
});

const user = getUser();
const user2 = greetUser2();
console.log({ user, user2 });

const myNumber: number[] = [1, 2, 3, 4, 5];


// myNumber.forEach(function (value){
//     const result = value + 1;
//     console.log(result);
// });

myNumber.forEach((value) => {
    const result = value + 1;
    console.log({result});
});
// myNumber.forEach(console.log);