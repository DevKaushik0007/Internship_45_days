/*
function add(a, b) {
return a + b;
}
function subtract(a, b) {
    return a - b;
}
console.log(add(3, 5));
console.log(subtract(5, 3));
*/

// function encapsulation and overload:-
/*
function calculator(a, b, fxn) {
    return fxn(a, b);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
console.log(calculator(3, 5, add));
console.log(calculator(3, 5, subtract));
*/

/*
function calculator(a, b, fxn) {
    return fxn(a, b);
}
let a = 4;
let b = 5;
console.log(
    calculator(a, b, (a, b) => {
        return a + b;
    })
)
    */

// closure :-
/*
function main() {
    let a = 40;
    let b = 50;
    function innerfunction() {
        console.log(a);
        console.log(b);
    }
    innerfunction();
}
main();
*/