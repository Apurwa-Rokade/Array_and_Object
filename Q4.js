// Initial array of students
const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
  // Add more students...
];

// a. Add a Student
function addStudent(student) {
  students.push(student);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
  const studentToUpdate = students.find(student => student.id === id);
  if (studentToUpdate) {
    Object.assign(studentToUpdate, updatedInfo);
  }
}

// c. Delete a Student
function deleteStudent(id) {
  const indexToDelete = students.findIndex(student => student.id === id);
  if (indexToDelete !== -1) {
    students.splice(indexToDelete, 1);
  }
}

// d. List All Students
function listAllStudents() {
  console.log("List of All Students:");
  students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Example usage:
addStudent({ id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" });
updateStudent(1, { age: 21, grade: "B" });
deleteStudent(2);
listAllStudents();
console.log("Students with Grade 'A':", findStudentsByGrade("A"));
console.log("Average Age of Students:", calculateAverageAge());
