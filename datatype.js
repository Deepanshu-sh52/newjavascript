// let name="Deepanshu";
// let rollno=90;
// let result=undefined;
// let money=null;
// console.log(typeof "money");
// console.log(typeof null);
// console.log(typeof undefined);

// //types of data
// // primitive - string ,bigint,null, undefined,symbol,number,boolean
// // non primitive -objects and arraays

// const arr1=["deepanshu","sharma"];
// console.log(arr1);

// let obj1={
//     1:"name",
//     2:"class",
//     "u":"rollno."
// }
// let obj2=obj1;
// obj2.u="upi";
// console.log(obj1.u);
// console.log(obj2.u);
// const fun1=function(){
//     console.log("hello");
    
// }

// console.log(typeof "fun1");

// const a=Symbol("123");

// // strings1

// const repocount=3;
// const nam = "Deepanshu";

// console.log(`my name is ${nam} my git up repo count is ${repocount} `);

// let gamename=new String("  Deepanshu sharma  ")
// console.log(gamename.trim());
// console.log(gamename.indexOf('D'));
// console.log(gamename.charAt(0));
// console.log(gamename.substring(0,4));
// // console.log(gamename.replace())

// //NUmber

// const num= new Number(193);
// console.log(num.toString().length)

// const b=123.3232;
// console.log(b.toFixed(2));

// const hundreds=1000000;
// console.log(hundreds.toLocaleString("en-IN"));
// // MAth
// console.log(Math.abs(-4));
// console.log(Math.round(3.45));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(2.4));
// const min=10;
// const max=20;
// console.log(Math.floor(Math.random()*(max-min+1))+min);

// Date
const d=new Date();
console.log(d.toString());
console.log(d.toISOString());
console.log(d.toLocaleString());
const a=new Date(2025,0,1);
console.log(a.toString());
console.log(a.getMonth());