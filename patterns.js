
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
