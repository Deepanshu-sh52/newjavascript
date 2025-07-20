// if(true)
// {
//     let a=10;
//     const b=34;
//     var c=90;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

function fun1()
{
    const username="Deepanshu";
    function fun2()
    {
        console.log(username);
        const website="mang.com";
    }
    // console.log(website); //cannot acess outside
    fun2();
}
fun1();