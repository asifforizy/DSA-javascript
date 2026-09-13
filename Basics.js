let a = 7
let b = 5

console.log(a + b)

console.log("sum of a , b : " + a+b) // this will give us 75
console.log("sum of a , b : " , a+b) // this will give us 12

// type coercion

console.log("1"-1) // this will give us 0  the string turns i nto number and then the operation is performed
console.log("1"+1) // this will give us 11  the number turns into string and then the operation is performed


// type casting or conversion

// let age = Number(prompt("Enter your age : "))
// console.log("Your age is : " , age)


// swap 3 variables

let a1 =  20
let a2 =  30

let c = a1
a1 = a2
a2 = c

console.log("a1 : " , a1)
console.log("a2 : " , a2);

[a1, a2] = [a2, a1]

console.log("a1 : " , a1)
console.log("a2 : " , a2)

//  unary operators

let i = 11

i = i++  + ++i
console.log(i) // 24

let num = 10

console.log(num++) // 10
console.log(num) // 11

// math function 

console.log(Math.round(4.6)) // 5 round 
console.log(Math.floor(4.6)) // 4  floor
console.log(Math.ceil(4.6)) // 5  ceilling
console.log(Math.trunc(4.6)) // 4 remove decimal part
console.log(Math.pow(4, 2)) // 16  power 
console.log(Math.sqrt(16)) // 4  square root 
console.log(Math.abs(-4)) // 4  absolute value
console.log(Math.min(4, 2, 6, 1)) // 1  minimum value
console.log(Math.max(4, 2, 6, 1)) // 6  maximum value
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random()*10) // random number between 0 and 10
console.log(Math.floor(Math.random()*10)) // random number between 0 and 9
console.log(Math.floor(Math.random()*10)+1) // random number between 1 and 10
console.log(Math.trunc(Math.random()*9000)+1000) // random number between 1000 and 9999


let number = 4555.67878

console.log(number.toFixed(2)) // 4555.68  round to 2 decimal places



// practice 

a = 40
b = 30 

console.log("sum of a , b : " , a+b) // this will give us 75