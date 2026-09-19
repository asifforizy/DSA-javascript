
let n = 5

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        process.stdout.write("* ")
    }
    console.log()

}

console.log("=====================================")

let a = 5

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()

}


console.log("=====================================")

let b = 5

for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ")
    }
    console.log()
    
}


console.log("=====================================")

let c = 5;

for (let i = c; i >= 1; i--) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    
    console.log(row);
}


console.log("=====================================")




let d = 5;

for (let i = d; i >= 1; i--) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    
    console.log(row);
}

console.log("=====================================")



let e = 5;

for (let i = 1; i <= e; i++) {
    let row = "";
    
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    
    console.log(row);
}


console.log("=====================================")

let n1 = 5;

for (let i = 1; i <= n1; i++) {
    let row = "";

    for (let j = 1; j <= n1 - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += j;
    }

    console.log(row);
}