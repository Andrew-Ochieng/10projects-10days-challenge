// arrays
const students = [
    {
        name: "Jeffrey",
        studentId: "SJKIMNA1811",
        department: "Software",
        year: "3rd Year"
    },
    {
        name: "Chris",
        studentId: "SCODJNS1811",
        department: "Software",
        year: "3rd Year"
    },
    {
        name: "Janey",
        studentId: "SJENSUJ1811",
        department: "Software",
        year: "3rd Year"
    },
    {
        name: "Stephanie",
        studentId: "SSTOPHA1811",
        department: "Software",
        year: "3rd Year"
    }
]



const random = Math.floor(Math.random() * 10)
console.log(random)
// console.log(random[students[1].name])

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.name[random])
}

let add = (x, y, z) => x + y + z;

console.log(add(10, 20, 30)); // 30;
console.log((10, 20, 30))



























