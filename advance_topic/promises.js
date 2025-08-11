// const promiseone =new Promise(function (resolve, reject) {
//     //do an async task
//     setTimeout(function(){
//         console.log("timeout is called")
//         resolve();
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promise concluded");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is done")
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("promise is cooncluded")
// })


// const p3=new Promise(function(resolve,reject){
//     //ascnc task
//     setTimeout(function(){
//         console.log('jai bab ki');
//         resolve({
//             username:"deepanshu",
//             class:"btech"
//         })
//     },1000)
// })

// p3.then(function(user_detail){
//     console.log(user_detail);
// })


const p4=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("async task");
        const workdone=true;
        if(workdone)
        {
            resolve({
                username:"deepanshu",
                rollno:2301331540056
            })
        }
        else
        {
           reject("jai baba ki kam na hua bhai");
        }
    },1000)
})

p4.then(function(user_detail){
    console.log(user_detail);
    return (user_detail.username)
}).then(function(user_detail){
    console.log(user_detail)
})
.catch(function(detail){
    console.log(detail);
})
.finally(function(){
    console.log("nibtara");
})

const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task");
        const workdone=false;
        if(workdone)
         {
            resolve({
                username:"deepanshu",
                rollno:2301331540056
            })
        }
     else
     {
          reject("jai baba ki kam na hua bhai");
      }
   },1000)
})

async function consumedfive(){
    try {
      const response =await p5;
    } catch (error) {
        console.log(error)
    }
}
consumedfive();

async function check() {
    const response=await fetch('https://randomuser.me/api/');
    const data= await response.json();
    console.log(data);
}
check();


fetch('https://randomuser.me/api/')
.then(function(response){
   return response.json();
})
.then(function (data){
   console.log(data);
})
.catch(function()
{
   console.log('error');
})