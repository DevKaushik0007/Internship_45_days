// Function in js
// 5 types:-
// 1.named function
// function add(a,b){
//     console.log(a+b);
// }
// add(3,5);
// 2.expresional function
// var a = function (){
//     a=2;
//     b=10;
//     console.log(a+b);
// }
// a();
// console.log();


//3.Arrow function
// const abc =() =>{
//     var ab=10;
//     console.log(ab);
// };
// abc();

// 4.Expressional arrow function
// () => {
//     var ab=10;
//     console.log(ab);
// };
// abc();

// 5. function constructor
// function users(name,email,role){
//     this.name = name;
//     this.email = email;
//     this.role = role;
// }
// var obj1 = new users("Dev", "Dev@gmail.com","admin");
// var obj2 = new users("kumar", "kumar@gmail.com","admin");
// console.log(obj1);
// console.log(obj2);

//rest operator
function add(a, b, c, ...nums) {
    //     console.log(nums);
    //     console.log(a, b, c);

    // }
    // for (let i in nums) {
    //     console.log(nums[i])
    // }

    // value of for:-

    for (let i of nums) {
        console.log(i)
    }
}
add("a", "b", "c", 1, 2, 3, 4);