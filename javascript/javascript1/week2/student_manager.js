const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "Queen") {
        class07Students.push(studentName);
        return `We always have a space for our Queen`;
    } else if (!studentName) {
        return `Please write student name.`;
    } else if (duplicateCheck(studentName)) {
        return `We already have ${studentName} in the class 07.`;
    } else if (getNumberOfStudents() > 5) {
        return `Class 07 is full. We can not add more student name to it`;
    } else {
        class07Students.push(studentName);
        return studentName + ' has been added to the class 07.';
    }
};

function getNumberOfStudents() {
    return class07Students.length;
};

function duplicateCheck(studentName) {
    for (let i = 0; i < getNumberOfStudents(); i++) {
        if (class07Students[i] === studentName) {
            return true;
        }
    }
    return false;
};

console.log(addStudentToClass("Shan Haider"));
console.log(addStudentToClass("Sadi"));
console.log(addStudentToClass("Mantasha"));
console.log(addStudentToClass("Ashtar"));
console.log(addStudentToClass("Zoie"));
console.log(addStudentToClass("Mikku"));
console.log(addStudentToClass("Momo"));
console.log(addStudentToClass("Daniel"));
console.log(addStudentToClass("Abbas"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Imran"));
console.log(addStudentToClass("Ali"));
console.log(addStudentToClass("Raza"));
console.log(getNumberOfStudents());
console.log(class07Students); 
document.write(addStudentToClass("Shan Haider"));
document.write(addStudentToClass("Zoie"));
document.write(addStudentToClass("Mikku"));
document.write(addStudentToClass("Momo"));
document.write(addStudentToClass("Daniel"));
document.write(addStudentToClass("Abbas"));
document.write(addStudentToClass(""));
document.write(addStudentToClass("Imran"))
document.write(addStudentToClass("Ali"));
document.write(addStudentToClass("Raza"));
document.write(getNumberOfStudents());
document.write(class07Students);