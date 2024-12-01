//function studentGrade { // lets defIne a variable to be StudentGrade and value to be 100
    // lets grade the student mark between 0 and 100
    //let grade = 100;
    // make sure the grade mark is a valid number and within 0 to 100
    // lets determine the grade based on the marks scrode by the student.
    function    studentGrade() {
        const marks = prompt("Enter the student's marks (0 - 100):");
        const score = parseInt(marks);
    
        if (score < 0 || score > 100 || isNaN(score)) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        } else if (score > 79) {
            console.log("Grade: A");
        } else if (score >= 60) {
            console.log("Grade: B");
        } else if (score >= 49) {
            console.log("Grade: C");
        } else if (score >= 40) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }
    }
    
    studentGrade();

//execute the function 
getstudentgrade ()