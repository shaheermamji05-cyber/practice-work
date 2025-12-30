//........................// Assignment Start //.......................................//

let StudentName = prompt("Enter your StudentName:");
console.log("StudentName:", StudentName);

let English = prompt("Enter your English Marks:");
console.log("English Marks:", English  );

let Physics = prompt("Enter your Physics Marks:");
console.log("Physics Marks:", Physics  );

let Chemistry = prompt("Enter your Chemistry Marks:");
console.log("Chemistry Marks:", Chemistry );

let TestDate = prompt("Enter Date of Test (DD-MM-YYYY):");
console.log("Date of Test:", TestDate );


English = 85;
Physics = 60;
Chemistry = 70;

let TotalMarks = 85 + 60 + 70 ;
console.log("Total Marks:",TotalMarks);

let percentage =(215/300) * 100 ;
console.log("percentage:",percentage + "%");



let highestMarks = Math.max(85 , 60 , 70);
console.log("highestMarks:", highestMarks);


let lowestMarks = Math.min(85 , 60 , 70);
console.log("lowestMarks:", lowestMarks);

let rollNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
console.log("Random Roll Number:", rollNumber);


let randomNum = Math.random() * 100; 

console.log("Original Number:", randomNum);
console.log("Math.round():", Math.round(randomNum));
console.log("Math.floor():", Math.floor(randomNum));
console.log("Math.ceil():", Math.ceil(randomNum));




let userInput = "12-30-2025";

let testDate = new Date(userInput);

let day = testDate.getDay();   
console.log("Day (Number):", day);

let month = testDate.getMonth() + 1; 
console.log("Month:", month);

let year = testDate.getFullYear();
console.log("Year:", year);

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let weekDayName = weekDays[day];
console.log("Weekday Name:", weekDayName);



// let studentName = (prompt("Enter your name:".toUpperCase()));
// console.log('Name', studentName);

let studentName = prompt("Enter your name:");
console.log("Length:", studentName.length);
console.log("Uppercase:", studentName.toUpperCase());
console.log("Lowercase:", studentName.toLowerCase());
console.log("Replace spaces:", studentName.replace(/ /g, "-"));
console.log("Search 'a':", studentName.search("a"));




//.........................// Assignment 2 Complete //.............................//





