let student= {
    name:"Rohan",
    age: 20,
    marks:99
}
student.city="Delhi";

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.marks);
console.log(student["marks"]);

let keys=Object.keys(student);
console.log(keys);
let values=Object.values(student);
console.log(values);

let entries=Object.entries(student);
console.log(entries);

Object.freeze(student);   // to make the object immutable
Object.seal(student);   // to prevent adding or deleting properties, but allows modifying existing properties
