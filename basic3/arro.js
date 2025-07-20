// const obj1={
//     username: "deepanshu",
//     rollno:"0231csds199",

//     welcome_message:function()
//     {
//         console.log(`welcome ${obj1.username} your rollno is : ${this.rollno}`)
//         console.log(this)
//     }
// }
// console.log(this)
// obj1.welcome_message();
// obj1.username="Raghav";
// console.log(this)
// obj1.welcome_message();
// console.log(obj1.welcome_message);
const addition = function() {
    console.log("Ram Ram bahiyo");
    console.log(this);
}
const arrow1 = () => {
   console.log("Ram Ram bahiyo");
    console.log(this);
}

addition();
console.log(arrow1());


