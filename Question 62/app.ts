// *Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// *Explain & TIP:* This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    class : string;
}

// Filling in the blueprint with an example student
let student: Student = {
    name:"Muhammad saleem",
    age: 21,
    class: "Bs (graduation)"
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.