async function getUsers(): Promise<void> {
try {
const response = await fetch(
"https://jsonplaceholder.typicode.com/users"
);
const users = await response.json();
console.log(users);
} catch (error) {
console.error(error);}}

getUsers();
/*
1. ¿Qué significa que una función sea async?
Una función async es una función asíncrona que permite utilizar la palabra clave await dentro de su cuerpo. 
Además, siempre devuelve una Promesa.

2. ¿Qué hace await?
await espera a que una Promesa se resuelva antes de continuar con la ejecución de la función.

3. ¿Qué diferencia existe entre .then() y async/await?
Ambos sirven para trabajar con Promesas y operaciones asíncronas.
su diferencia es que async/await tiene una sintaxis más clara y parecida al código secuencial, 
lo que facilita la lectura y el mantenimiento.

4. ¿Por qué utilizar try/catch?
Porque permite capturar y manejar errores que puedan ocurrir durante la ejecución de código asíncrono.
*/