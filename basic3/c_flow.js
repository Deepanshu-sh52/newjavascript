// let a=10000;

// if(a<1500)
// {
//    console.log("less then 1500");
// }
// else{
//     console.log("greater then 1500");
// }
// const logged_In=false
// if(logged_In) 
//     console.log("welcome user");
// else
//     console.log("useris  is not yet logged in");

// const a=0;
// switch (a) {
//     case 1:
//         console.log("january")
//         break;

//     case 2:
//         console.log("febuary")
//         break;

//     case 3:
//         console.log("March")
//         break;

//     case 4:
//         console.log("April")
//         break;

//     case 5:
//         console.log("May")
//         break;

//     default:
//         console.log("wrong choice");
//         break;
// }

// null colesence operator

// const a= 12??3;
// const b= null??9;
// const c=undefined??0;

// console.log(a);
// console.log(b);
// console.log(c);
// 
// const price =120;
// price<120?console.log("buy"):console.log("not buy");
// const myarray=["ram ji","hanuman ji","sita ji"]
// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element)
// }

// const arr=[1,2,2,3,3,30];
// for(const num of arr)
// {
//     console.log(num);
// }
// const map = new Map();
// map.set(1, "Deepanshu");
// map.set(2,"hritik");
// map.set(3,"anubhav");

// for(const [key,val] of map)
// {
//     console.log(`${key} = ${val}`);
// }

// const obj1={
//     1:"ram ram",
//     2:"Hari bol",
//     3:"jai ho"
// }

// for(const key in obj1)
// {
//     console.log(`${key} "has values" ${obj1[key]}`);
// }

// const names = ["deepanshu", "himanshu", "sakshi"];
// names.forEach(element => console.log(element));

// function printing(val)
// {
//     console.log(val);
// }
// const nam=["deepanshu","raghav","ghansyam"];
// nam.forEach(printing);

// names.forEach(function(val) {console.log(val)});


// const objects=[
//     {
//         name:"raghav",
//         class:"ds a"
//     },
//     {
//         name:"madhav",
//         class:"mba a"
//     },
//     {
//         name:"sakshi",
//         class:"btc"
//     }
// ]

// objects.forEach((item)=>{console.log(item.name,item.class) })


let numbers=[1,2,3,4,5,6,7,8,9,10];
// const output =numbers.filter((item)=>item>4);
// console.log(output);
// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true },
//   { id: 2, name: "Bob", age: 30, isActive: false },
//   { id: 3, name: "Charlie", age: 22, isActive: true },
//   { id: 4, name: "David", age: 28, isActive: false },
//   { id: 5, name: "Eve", age: 35, isActive: true }
// ];
// let output=users.filter((val)=>(val.age>25 && val.isActive==true));
// console.log(output);
// let output=numbers.forEach()


let a=[1,2,3,4,5,6,7,8,90];
// const output=a.map((val)=>val*2).map((val)=>val+1).filter((val)=>val>10);
// console.log(output)

const output=a.reduce(function (acc,curr)  {
    console.log(`current value ${curr} accumalatorvalue ${acc}`)
    return acc+curr;
},9)
console.log(output)