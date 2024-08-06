
    let obj = [{
    id: 101,
    age:15,
    email:"devkaushik@gmail.com",
    name: "Dev Kaushik",
    mobile: "97821XXXX",
    skills: ["c", "c++", "java", "python"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 5,
        maths: 4,
        chemistry: 0
    },
    is_active: true
},
{
    id: 102,
    age:18,
    email:"aryan@gmail.com",
    name: "Aryan Sharma",
    mobile: "97822XXXX",
    skills: ["javascript", "html", "css"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 78,
        maths: 92,
        chemistry: 55
    },
    is_active: false
},
 {
    id: 103,
    age:25,
    email:"priya@gmail.com",
    name: "Priya Singh",
    mobile: "97823XXXX",
    skills: ["java", "python", "sql"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 88,
        maths: 79,
        chemistry: 90
    },
    is_active: true
},
{
    id: 104,
    age:35,
    email:"ankit@gmail.com",
    name: "Ankit Verma",
    mobile: "97824XXXX",
    skills: ["c", "c++"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 65,
        maths: 58,
        chemistry: 70
    },
    is_active: false
},
{
    id: 105,
    age:11,
    email:"neha@gmail.com",
    name: "Neha Kumari",
    mobile: "97825XXXX",
    skills: ["html", "css", "javascript"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 90,
        maths: 85,
        chemistry: 60
    },
    is_active: true
},
{
    id: 106,
    age:19,
    email:"rohit@gmail.com",
    name: "Rohit Gupta",
    mobile: "97826XXXX",
    skills: ["java", "python"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 76,
        maths: 82,
        chemistry: 80
    },
    is_active: true
},
{
    id: 107,
    age:20,
    email:"sneha@gmail.com",
    name: "Sneha Yadav",
    mobile: "97827XXXX",
    skills: ["sql", "c++", "python"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 81,
        maths: 74,
        chemistry: 65
    },
    is_active: false
},
{
    id: 108,
    age:22,
    email:"vivek@gmail.com",
    name: "Vivek Mishra",
    mobile: "97828XXXX",
    skills: ["c", "html", "css"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 70,
        maths: 69,
        chemistry: 72
    },
    is_active: true
},
{
    id: 109,
    age:34,
    email:"aditi@gmail.com",
    name: "Aditi Raj",
    mobile: "97829XXXX",
    skills: ["c", "c++", "java"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 95,
        maths: 90,
        chemistry: 89
    },
    is_active: false
},
{
    id: 110,
    age:22,
    email:"karan@gmail.com",
    name: "Karan Jaiswal",
    mobile: "97830XXXX",
    skills: ["python", "sql", "javascript"],
    fullDetail: function () {
        console.log(this.id, this.name, this.mobile);
    },
    marks: {
        physics: 66,
        maths: 77,
        chemistry: 55
    },
    is_active: true
}]

// for(let i of obj){
//     // console.log(i.id,i.name,i.email,i.is_active);
//     // console.log(age.map>18);
// }
let topStudents = obj.filter((item) => {
    let totalMarks = item.marks.physics + item.marks.maths + item.marks.chemistry;
    let percentage = (totalMarks / 3);
    console.log(percentage);
    return percentage > 75;
});

console.log(topStudents);
// let adults = obj.filter((item) => item.age > 18);

// console.log(adults);

// Display full details of each object
// obj1.fullDetail();
// obj2.fullDetail();
// obj3.fullDetail();
// obj4.fullDetail();
// obj5.fullDetail();
// obj6.fullDetail();
// obj7.fullDetail();
// obj8.fullDetail();
// obj9.fullDetail();
// obj10.fullDetail();


    // console.log(obj.fullDetail());
