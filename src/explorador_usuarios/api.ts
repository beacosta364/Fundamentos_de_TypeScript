import type { User } from './types';
export async function getUsers(): Promise<User[]> {
try {
const response = await fetch(
'https://jsonplaceholder.typicode.com/users'
);
const users: User[] = await response.json();
return users;
} catch (error) {
console.error(
'Error obteniendo usuarios:',
error
);
return [];
}
}

export async function getUserById(
id: number
): Promise<User | null> {
try {
const response = await fetch(
`https://jsonplaceholder.typicode.com/users/${id}`
);
const user = await response.json();
if (!user.id) {
return null;
}
return user;
} catch (error) {
console.error(
'Error obteniendo usuario:',
error
);
return null;
}
}