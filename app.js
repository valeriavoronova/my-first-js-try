let a = 2;
let b = 4;
let c = 10;
console.log("a =", a, ",b =", b);
b = c;
let cona = a + b;
console.log(cona);
console.log(typeof a);

let e = 10;

let d = `Oн сказал ${e} раз Привет`


console.log(d);
console.log(typeof d);

let carOne = {
    color: 'green'
}

let carTwo = {
    color: 'red'
}

console.log(carOne, carTwo);

// carOne["color"] = carTwo["color"];
carOne = carTwo;

console.log(carOne)