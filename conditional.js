// let age = Number(prompt("Enter your age : "));

// if (age > 18) {
//     console.log("You are eligible to vote");
// }
// else if (isNaN(age)) {
//     console.log("Enter a valid age");
// }
// else {
//     console.log("You are not eligible to vote");
// }




let unit = Number(prompt("Enter the number of units consumed : "));
let amount = 0;

if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
}

if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8;
    unit = 200;
}

if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6;
    unit = 100;
}

amount += unit * 4;

console.log("Total amount to be paid : ", amount);


//  ternary operator

112 > 13 ? console.log("Greater") : console.log("Smaller");

//  switch case

amount = 100;

switch (amount) {
    case 100:
        console.log("Amount is 100");
        break;
    case 200:
        console.log("Amount is 200");
        break;
    default:
        console.log("Amount is neither 100 nor 200");
}