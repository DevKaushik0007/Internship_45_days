const sum = (a, b) => {
    setTimeout(() => {
        console.log(a + b);
    }, 5000);
};
let a = 10;
let b = 20;
console.log("a");
console.log("b");
console.log("c");
setTimeout(() => sum(a, b), 2000);
// console.log(sum(a, b));
console.log("d");
console.log("e");