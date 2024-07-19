// Hoisting in js
// Hoisting is a js mechanism where variables and functions declarations are moved to the top of their scope
// for example
// function b(){
//     console.log(a);
// }
// var a=1;
// b();
// console.log(a);
// console.log(a);
let b = 4;
function a(){
    var b=4
    console.log(b);

}
a();
// var b = 5;
// console.log(b);
