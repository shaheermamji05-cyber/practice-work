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







//........................// Assignment 3 Started //...............................//

// Question 1 //

for (let number = 1; number <= 10; number++) {
    console.log(number)
}

//Question 2 //

for (let evennumber = 2; evennumber <= 20; evennumber+=2) {
    console.log(evennumber)
}

// Question 3 //

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    fruits.map(fruits => {
    console.log(fruits)});

// Question 4 //

let number=[2,3,15,12,23]
let square=number.map(number => number * number);
console.log("Square of",number,"is",square);

// Question 5 //

let countries = ["Pakistan", "Japan", "China", "India", "Bangladesh"];
 let uppercase=countries.map(countries => countries.toUpperCase());
 console.log(countries,uppercase);

// Question 6 //

 for (let mutli=5; mutli<=50; mutli+=5) {
    console.log(mutli)
 }

//.......................// Assignment 3 Completed //.................................//


//......................// Assignment 4 Started //....................................//

// Question 1 //

let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("You are eligible to vote.");
} 
else {
    console.log("You are not eligible to vote.");
}

// Question 2 //

let marks = prompt("Enter your marks:");

if (marks>=100){
    console.log('Grade A+')
}
else if (marks>=80){
     console.log('Grade A')
}

else if (marks>=60){
   console.log('Grade B')
}

else if (marks>=40){
    console.log('Grade C')

} else if (marks <=40){
     console.log('Fail')
}


// Question 3 //

let num1 = 50;
let num2 = 30;
let num3 = 20;

console.log(Math.max(num1, num2, num3));

// Question 4 //

let temperature=prompt("Enter the temperature:");

if (temperature>30){
     console.log("it's hot");
}

else if (temperature>=15 && temperature<=30){
    console.log("it's warm");
}

else if (temperature<15){
     console.log("it's cold");
}

// Question 5 //

let Age = prompt("Enter your age:");

let status=Age >=18 ? "Adult" : "Minor";
console.log(status);


//.........................// Assignment 4 Completed //...................................//


//........................// Assignment 5 Started //......................................//

// Question 1 //

let a = 10
let b = 10

if (a==b){
    console.log("a is equal to b");
}

else{
    console.log("a is not equal to b");
}

// Question 2 //

let str1 = "hello"
let str2 = "hello"


    console.log(str1!=str2);


// Question 3 //

let num= prompt("Enter a number:");

if(num>50){
     console.log("The number is greater than 50");
}
else if(num == 50){
     console.log("The number is equal to 50");
}
else{
    console.log("The number is less than 50");
}

// Question 4 //

letAge= prompt("Enter a age:");

if(age<18){
     console.log("Not adult ");
}
else if(age == 18){
     console.log("Not adult");
}
else{
     console.log("Adult");
}

// Question 5 //

let Temperature= prompt("Enter temperature:");
if(Temperature<10){
     console.log("It's too cold outside.");
}
else if(Temperature>=10 && Temperature<=30){
     console.log("The weather is moderate.");
}
else{
     console.log(" hot .");
}

// Question 6 //

let x= 25
let y= 30

let minimum=Math.min(x,y);
console.log("The minimum value is:",minimum);

// Question 7 //

let score= prompt("Enter your score:");

if(score>=0 && score<=100){
     console.log("score is under 100");
}
else{
     console.log("score is not under 100");
}

// Question 8 //

let divide1= 11
let divide2= 7

if (divide1 % 2 === divide2 % 2){
    console.log("Both numbers have the same remainder .");
}
else{
    console.log("The numbers have different remainder .");
}

//  Part-2 Question 9 //

let userage= 20
let User= true

userage>= 20 && User=== true ? console.log("You can enter the club.") : console.log("You cannot enter the club.");

// Question 10 //

let number1= 0


number1 >= 0 || number2 <= 100 ? console.log("Number is under 100 Or equal to 100") : console.log("Number is out of range.");


//................................................// Assignment 5  Completed//...................................................//


//......................................................// Assignment 6 //.............................................................................................//

// Question 1 //

const message = () => {return "Hello, World!";};

console.log(message());

// Question 2 //

let input = prompt("Enter a number to calculate its square:");
input = Number(input);

const sqr =()=>{return input*input}
console.log(sqr());

// Question 3 //

let sum1 = prompt("Enter first number:");
let sum2 = prompt("Enter second number:");
let numsum1=Number(sum1);
let numsum2=Number(sum2);

const sum =()=>{return numsum1+numsum2}
console.log("The sum is:",sum());

// Question 4 //

 let nmbr = prompt("Enter a number to check if it's even or odd:");
nmbr = Number(nmbr);


const checkEvenOdd = () => {
    if (nmbr %2 === 0){
        console.log(nmbr + " is even.");
    }
     else {
        console.log(nmbr + " is odd.");
    }
}

checkEvenOdd();

// Question 5 //


let Name1 = prompt("Enter your first name:");
let Name2 = prompt("Enter your last name:");

const fullName = () => {
    return Name1 + " " + Name2;
}
console.log("Full Name:", fullName());

// Question 6 //

let Marks= prompt("Enter your marks:");
marks= Number(marks);

const Percentage = () => {
    return ((marks/1000)*100).toFixed(2);
}
console.log("Percentage:", percentage() + "%");

// Question 7 //

letage= prompt("Enter your age:");
age= Number(age);

const Verify = () => {
    if (age>=18){
        console.log("adult");
    }

    else{
        console.log("minor");
    }
}
Verify();

// Question 8 //

let strlenghth= prompt("Enter a string to find its length:");
const length=()=>{
    return strlenghth.length;
}
console.log("The length of the string is:",length());

// Question 9 //

let CheckNumber= prompt("Enter a number to check if it's positive, negative, or zero:");


const Number =()=>{
    if (CheckNumber>0){
        console.log("The number is positive.");
    }
    else if (CheckNumber<0){
        console.log("The number is negative.");
    }
    else {
        console.log("The number is zero.");
    }
}
Number();

// Question 10 //

const getFirstElement = (arr) => arr[0];
console.log(getFirstElement([10, 20, 30])); 

//................................................// Assignment 6 Completed //..................................................//


//..............................................// Assignment 7 Started //....................................................//


























