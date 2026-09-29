interface Stdent {
    name: string;
    grade1: number;
    grade2: number;
}


function greet(name: string): string {
    return `student ${name}`;
}

function add(a: number, b:number): number {
    return a+b;
}

function isSpproved(grade: number): boolean {
    return grade >= 3.0;
} 


const student: Stdent={
    name: "brayan",
    grade1: 3.5,
    grade2: 2.8
};

const promedios =add(student.grade1, student.grade2)/2;

const datos ={
    greet:greet(student.name),
    promedios,
    approved: isSpproved(promedios)
};

console.log(datos)

// Reto
function calculateAverage(grades: number[]): number {
let total = 0;
for (const grade of grades) {
total += grade;
}
return total / grades.length;
}

const grades = [4.5, 3.8];
const average = calculateAverage(grades);
console.log(`El promedio es: ${average}`);