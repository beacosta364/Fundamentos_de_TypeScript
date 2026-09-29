const myPromise = new Promise<number>((resolve, reject) => {
    
setTimeout(() => {
    resolve(100);
    //reject('No hay dinero');
}, 2000);
});

myPromise.then((myMoney) => {
    console.log(`Tengo el dinero ${myMoney}`);
})
.catch((reason) => {
    console.log(reason);
})
.finally(() => {
    console.log('Finalizó la promesa');
});
