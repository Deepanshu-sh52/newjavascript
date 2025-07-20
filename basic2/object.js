// object
// const mysym=Symbol("123");
// const obj1 ={
//     name:"Deepanshu sharma",
//     [mysym]:"123",
//     class:"Btech",
//     rollno:"2301331540056",
//     loggedin:false
// }
// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1["name"]);
// console.log(typeof obj1.mysym)

// obj1.rank=1;
// console.log(obj1);

// obj1.greetings=function(){
//     console.log("jai ram ji ki");
// }
// console.log(obj1.greetings());

// obj1.greetings2=function()
// {
//     console.log(`jai ram ji ki ${obj1.name}`)
// }
// console.log(obj1.greetings2());

// const tinder=new Object();//singelton object
// tinder.name="deepanshu";
// console.log(tinder);

const tinder={};
tinder.name="deepanshu";
tinder.class="btech";
tinder.house="bulandshahr";
const regularuser = {
    email: "depanshu@Fang",
    fullname:{
        username:{
            firstname: "deepanshu",
            lastname: "sharma"
        }
    }
}
//  console.log(regularuser.fullname.username.firstname);

 const obj1={
        1:"a",
        2:"b"
 }
 const obj2={
    3:"c",
    4:"d"
 }
// // const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);
// const obj3={...obj1,...obj2}
// console.log(obj1);
// console.log(obj3);
const user=[
    {
        id:1,
        email:"deep@mang"
    },
    {

    },
    {

    }
]
// console.log(user[0].email);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty("namee"));
const course={
   coursename:"js in hinda",
   price:"999",
   courseinstructor:"hitesh"
}
const {courseinstructor: instructor} = course;
console.log(instructor);

const number= (company)=>{

}

// {
//     "1":"deepanshu",
//     "class":"general".
// }