const animalPromise = new Promise<number>((resolve, reject) => {

setTimeout(() => {
resolve(50);
// reject('No llegó la comida para los animales');
}, 2000);

});

animalPromise
.then((foodKg) => {
console.log(`Llegaron ${foodKg} kg de comida para los animales`);
})
.catch((reason) => {
console.log(reason);
})
.finally(() => {
console.log('Finalizó la promesa');
});
