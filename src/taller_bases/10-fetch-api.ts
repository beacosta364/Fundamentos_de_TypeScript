fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
console.log(users);
})
.catch(error => {
console.error(error);
});

/*
1. ¿Qué devuelve fetch()?
fetch() devuelve una Promise que representa el resultado futuro de una petición HTTP. Cuando la petición finaliza, 
la promesa se resuelve con un objeto Response.

2. ¿Qué representa response?
response es el objeto que contiene la respuesta enviada por el servidor. Incluye información como el estado de la petición,
encabezados y los datos recibidos.

3. ¿Por qué se utiliza response.json()?
Porque los datos recibidos llegan en formato JSON. El método response.json() convierte esos datos en un objeto 
o arreglo de JavaScript que puede ser utilizado en el programa.

4. ¿Por qué hay dos .then()?
Porque cada .then() procesa un paso diferente

5. ¿Qué sucede si la petición falla?
El error es capturado por .catch(), permitiendo manejar el problema sin que la aplicación se detenga inesperadamente.
*/