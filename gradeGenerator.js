// Student grade generator
// Function that prompts the user to input student marks
// The output should correspond to the correct grade
// A > 79, B - 60 TO 79, C - 59 to 49, D - 40 to 49, E - less than 40

function calculateGrade(mark) {
    // Validation of the input
    if (mark < 0 || mark > 100 || isNaN(mark)) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
    } else {
        if (mark > 79) {
            return ("A")
        } else if (mark > 59) {
            return ("B")
        } else if (mark > 49) {
            return ("C")
        } else if (mark > 39) {
            return ("D")
        } else {
            return ("E")
        }
    }
}
console.log(calculateGrade());



