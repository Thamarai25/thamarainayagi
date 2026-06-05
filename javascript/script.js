// var a = 10; //Reinitialize 
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// var num = 10;
// var str = "vikraam";
// var undefine;
// var Null = null;
// var boolean = true;
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// var bigInt = 123n;
// var symbol = Symbol('li')
// console.log(typeof bigInt);
// console.log(typeof symbol);
// var arr = [10,20,30,40];
// console.log(typeof arr,arr);
// var obj = {
//     name:"thamzz",
//     dept:["Bsc CT"]
// }
// console.log(typeof obj,obj)
// // Arithmetic operator(+,-,*,)
//  var a = 10;
//  var b = 20;
//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a % b);
//  console.log(a / b);
// // logical operator(&&,||,!)
// // true  true    true   true 
// // true  flase   false  true
// // false true    false  true
// // false false   false  false 
// var a = true;
// var b = false;
// console.log(a&&b)
// console.log(a||b)
// console.log(!b)
// // Relational operator
// a = 10;
// b = 20;
// console.log(a<b)
// console.log(a>b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a===b)
// console.log(a!==b)
// assignment operator
// a = 10;
// b = 20;
// a = a+b;
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// unary operator(++,--)

// var a = 10;
// console.log(a++);
// console.log(++a);

// var a=10;
// console.log(a--);
// console.log(--a);

// conditional statemant
// var a = 10;
// var b = 20;
// // if conditions
// if(true){
//     // template literals
//     console.log(`${a} + ${b} = ${a+b}` )
// }

//var a ; //hotsting
    // console.log(a);
    // var a = 10;

    // var a = 10; //global scope
    // let b = 20;  // Block scope
    // const c = 20; // block scope
    // if(true){
    //     var a = 40; 
    //     console.log(a);
    //     let b=20;
    //     const c = 30;
    //     console.log(b);
    // }
    // console.log(a);
    // console.log(b);


    // var a = 10;
    // if (a%2===0){
    //     console.log(`$(a) is Even `);
    // }
    // else{
    //     console.log(`$(a) is Odd `);
    // }


    // var mark =90;
    // if(mark >=90){
    //     console.log("o grade");
    // }
    // else if (mark >=80){
    //     console.log("A grade");
    // }
    // else if (mark >=35){
    //     console.log("Pass");
    // }
    // else  {
    //     console.log("Fail");
    // }


    // var a = 1;
    // // conditional > true statement : false statement
    // var result = a%2===0 ?"Even" : " Odd ";
    //  console.log(result);

// mark = console.log(result); 90;
// var result = (mark >=90) ? "O grade":
//              (mark >=70) ? "A grade":
//              (mark >=35) ? "Pass" :
//              "Fail";
// 


// var day = 2;
// switch(day){
//      case 1:{
//         console.log("Sunday");
//         break;
//      }
//      case 2:{
//         console.log("Monday");
//         break;
//      }
//      case 3:{
//         console.log("Tuesday");
//         break;
//      }
//      case 4:{
//         console.log("Wednesday");
//         break;
//      }
//      case 5:{
//         console.log("Thursday");
//         break;
//      }
//      case 6:{
//         console.log("Friday");
//         break;
//      }
//      case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");
//     }
// }

//looping statement

//1 time 11 times 10 times

// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val   = 1024;
// var count = 0;
// while(val > 0){
//      count++;
//      val= Math.floor(val/10);
// }
// console.log(count);


// do{
//     console.log("Do....while")
// }while(false);


// for(let i=1;i<=10;i++){
//     if(i%2===0){
//     continue;
//     }
//      console.log(i);
    
// }


// add();

// function add(){
//     console.log(10+20);
// }



// function add(a=2,b=23){
//      console.log(a+b);
//  }

// add();// Hoisting


// var demo = ()=>{
//     console.log(20 + 80)
// }
// demo(10,20,30);
// demo();
// demo(10);



// //spread operator
// var arr =[10,20,30];
// var arr2 =[...arr,40,50];
// console.log(arr);
// console.log(arr1);

//Destruction Operator

// var [m1,m2,m3,m4,m5]=[90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);


// var{Name,Mobile,Dept,Email,isActive} ={
//     Name : "Thamarai",
//     Mobile :"9842108634",
//     Dept :"CT",
//     Email :"thamarai@gmail.com",
//     isActive : true
// }
// console.log(Name,Mobile,Dept,Email,isActive);


// var arr = [10,20,30,40,50];

// for (let index in arr){
//     console.log(index)
// }
// //for..of
// for(let value of arr){
//     console.log(value)
// }
// var obj ={
//      Name : "Thamarai",
//     Mobile :"9842108634",
//     Dept :"CT"
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }
    
var arr = [1,2,3,4,5];

var result = arr.map((val)=>(val*2));
console.log(result)
var even = arr.filter((val)=>val%2===0);
console.log(even);
var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum);


var userName={
     Name : "Thamarai",
     Dept :"CT",
     skills:{
        programming:["java script,c,c++"],
        database:["SQL"]
     }
}
var user = {
        ...userName,
        Password:12465
     }

console.log(user);