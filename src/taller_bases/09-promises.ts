function getMessage(): Promise<string> { return new Promise((resolve) => {
setTimeout(() => {
resolve("Operación completada");}, 2000);
});
}

getMessage()
.then((message) => {
console.log(message);
})
.catch((error) => {
console.log(error);
})
.finally(() => {
console.log("Finalizó la promesa");
});


// RETO
function getMessageError(): Promise<string> {
return new Promise((resolve, reject) => {
setTimeout(() => {

const success = false;

if (success) {
resolve("Operación completada");
} else {
reject("Ocurrió un error en la operación");
}

}, 2000);
});
}

getMessageError()
.then((message) => {
console.log(message);
})
.catch((error) => {
console.log(error);
});