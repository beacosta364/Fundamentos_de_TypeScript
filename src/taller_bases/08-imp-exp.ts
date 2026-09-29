import { add, multiply } from '../math';
import { greet } from '../messages';

const data = {
greet: greet('Brayan'),
sum: add(10, 5),
multiplication: multiply(10, 5)
};

console.log(data);

/*¿Qué función cumplen export e import? ¿Qué ventajas tiene dividir el código en diferentes archivos?
export se utiliza para compartir funciones, variables, interfaces o clases entre archivos. 
import permite utilizar esos elementos exportados en otros módulos del proyecto. 
Separar el código en diferentes archivos mejora la organización, 
facilita el mantenimiento, evita la duplicación de código y permite reutilizar funcionalidades en distintas partes de la aplicación.*/