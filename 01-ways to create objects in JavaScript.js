//* There are many ways to create objects in javascript as below
//* Method-1. Object constructor
//* Method-2. Object's create method
//* Method-3. Object literal syntax
//* Method-4. Function constructor ( just like object in javascript)

//* Method-1. Object constructor
let obj1 = new Object();
obj1.name = "John Array";
obj1.age = 11;
console.log(obj1);

//* Method-2. Object's create method
var object = Object.create(null);

//* Method-3. Object literal syntax

var StudentManagement = {
  studentName: "John",
  studentAge: 23,
  studentCity: "jainpur",
  studentCode: 243501,
  studentFatherName: "Alex John",
  studentCourse: "Computer Science",
  studentTech: {
    DSA: ["Array", "String", "Heap", "Graphs", "Binary Tree"],
    Web: ["HTML", "CSS", "Javascript", "React"],
    Communication: ["Strong"],
    CoreSubject: ["DBMS", "CN", "OOPs"],
  },
  showDataStudent() {
    console.log("Hello objct");
  },
};
// console.log(StudentManagement);

let printStudentName = StudentManagement.studentName;
// console.log(printStudentName);

let printTech = StudentManagement.studentTech;
// console.log(printTech);

let ExploreDsaArray = StudentManagement.studentTech.DSA;
let DSALength = ExploreDsaArray.length;
// console.log(DSALength);

ExploreDsaArray.forEach((currentElement, currentIndex, ExploreDsaArray) => {
  const Element = currentElement;
  const Index = currentIndex;
  const arr = ExploreDsaArray;
  const TemplateMethod = `${Element} or ${Index} or ${arr}`;
  console.log(TemplateMethod);
});

//* replace the value in object

let replacedData = StudentManagement.studentCode;
replacedData = 12242;

console.log(StudentManagement.studentCode);

//* Method called
StudentManagement.showDataStudent();
