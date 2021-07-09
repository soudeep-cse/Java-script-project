var marks = Number(prompt("Enter your marks: "));
        if (marks <= 100 && marks >= 90) {
            document.write("Congrates!You got golden A+..");
        }
        else if (marks <= 89 && marks >= 80) {
            document.write("Congrates!You got A+..");
        }
        else if (marks <= 79 && marks >= 70) {
            document.write("You got A");
        }
        else if (marks <= 69 && marks >= 60) {
            document.write("You got B+..");
        }
        else if (marks <= 59 && marks >= 50) {
            document.write("You got B..");
        }
        else if (marks <= 49 && marks >= 40) {
            document.write("You got C+..");
        }
        else if (marks <= 39 && marks >= 33) {
            document.write("You got C..");
        }
        else if (marks <= 32) {
            document.write("You got F....!");
        }
        else {
            document.write("Please enter valid marks");
        }
