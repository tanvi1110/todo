// console.log("hello world ")

// const obj1 = "objekey1";
// const obj2 = "objekey2";

// const value1 = "keyvalue1";
// const value2 = "keyvalue2";

// const key = {
//     [obj1] : value1,
//     [obj2] : value2
// }
// console.log(key);

// const key1 = {};
// key1[obj1] = value1;
// key1[obj2] = value2;

// console.log(key1);
//spread operator *********************************************************************************************

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const newarray = [...arr1 , ...arr2];
// console.log(newarray);

// const newarray1 = [..."abc" , ..."897"];
// console.log(newarray1);

// spread operator in objects*********************************************************************** 

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// };
// const obj2 = {
//     key3 : "value3",
//     key4 : "value4",
// };
// const newobj = {...obj1 , ...obj2 }; 
// console.log(newobj);


// object destructurinng **********************************************************************************

// const obj1 = {
//  bandname  : "bts ",
//  famoussong : "boy with luv",
//  year : 1975
// }
// const {bandname:var1 , famoussong , ...done } = obj1;
// console.log(var1  , famoussong );
// console.log(done)

//objects inside array ************************************************************************************************

// const obj1 = [
//     {userid: 1 ,username1: 'harshit' ,gender: 'female' },
//     {userid: 2 , username1:'ayushi' , gender:'male'},
//     {userid: 3 , username1:'ramesh' , gender:'female'},
// ]
// const newobj = {...obj1};
// console.log(obj1);

// for( let obj of obj1 ){
//     console.log(obj.username1)
// }
// const [{username1: usernew , userid} , {gender: user3gender} ] = obj1 
// console.log(usernew)
// console.log(user3gender)
// console.log(userid)

// functions **************************************************************************************************
// function singhappybirthday(){
//     console.log("happy birthday to you .....");
// }

// singhappybirthday() // call a function
// function sum(num1 , num2){
//     return num1 + num2;
// }

// const returned = sum( 4, 5);
// console.log(returned); 

// const sumofthree = function(number1 , number2 , number3){
//     return number1 + number2 + number3;
// }
// const ans = sumofthree(2 ,3, 4 );
// console.log(ans);

//function expression ********************************************************************************************

// const hello = function() {
//   console.log("hello guys ")
// }
//   hello();

//function declaration ********************************************************************************************
// NOTE : &&&&&&  In function declaration we can call function first but we cannot in function expression and arrow function 

// hello()
// function hello(){
//     console.log("how the hell are you my boy ")
// }

//arrow functions ******************************************************************************************
// const arrow1 = () => {
//     console.log("hello");
// }
// arrow1() 

// let , var , const ************************************************************************************
// NOTE : &&&&&&&&&&  printing Before declaration of : var = undefined , let and const = uncaught reference error  

// console.log(hello);  
// let hello = "done for ... "

//function inside other function *******************************************************************

// const app = () => {
//    const func1 = () => {
//     console.log("hello call from my func1 ")
//    }
//    const func2 = () => {
//        console.log("hello call from my func2 ")
//     }

//     console.log(" call from my app ")
//     func1()

// } 
// app();

//lexical scope ******************************************************************


// function app(){
//     const myvar = "value1"
//     function myfunc(){
//         const myvar = "value1 inside"
//         console.log("hello call from myfunc" , myvar)
//     }  // function declaration 
//     const myfunc1 = function(){}   //function expression
//     const myfunc2 = () => {    //arrow function

//     }
//     console.log(myvar);
//     myfunc();
// }
//  app();  

//   let and const are block scope(mostly use these ) ************************************************************** 
//   var is function scope(can be access )***************************************************************************
// {
//     var first = "name"
// }
// var first = " garmia  "
// console.log(first)

// rest parameters (...a) ***********************************************************************************************
// function myfunct(a,b,...c ){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myfunct(5 ,6 , 7,9,0)

// function myfunct1(...numbers){
//     let total = 0;
//    for(let num of numbers){
//         total += num ;
//    }
//    console.log(total)
// }
// myfunct1(5,6,7,8,9)

//parameter destructuring ***********************************************************************************************
// object 
// react 

// const person = {
//     firstname : "harshit ",
//     gender : "male "
// }
// // function printdetail(obj){
// //     console.log(obj.firstname)
// //     console.log(obj.gender) 
// // } 
// function printdetail(firstname , gender){
//     console.log(firstname)
//     console.log(gender) 
// } 
// printdetail(person)

//callback function( we can take input as a function and do callback) ******************************************************
// function  myfunc(callback){
//     console.log(`I am inside func 2 and name is ${callback}`)
//     callback();
// }
// function myfunc2(name){
//  console.log(`hello guys ${name}`)
// }

// myfunc(myfunc2);

//function returning function( high order functio n )*******************************************************************************************
// function myfunc(){
//     function myfunc2(){
//         console.log("hellow from inside function 2 ")

//     }
//     return myfunc2;
// }
// const ans = myfunc();
//   ans();  // this becomes function  


// imp array elements (forEach)(doesnt form new array --- differenece bw map and forEach)******************************************************************************************************************

// const numbers = [4 ,5 ,6,7];

// function multiplyby2(number, index){
//     console.log(`index is ${index} and number is ${number}`);

// }

// numbers.forEach(multiplyby2);
// //%%%%%%%%%% or 
// numbers.forEach( function(number,index) {
//     console.log(number + 3, index );
// })
// // $$$$$$$$$$$$$$  using arrow function
// numbers.forEach( (number,index) => {
//      console.log(number + 3, index );
// }) 

// map method(forms new array) *****************************************************************************************************
//NOTTE: It is crucial to `return` if using map function 

//  const numbers = [6,7,8,9]
//  const demo = function(number){
//     return number * number ;
//  }
//  console.log(numbers.map(demo/*or square */))

// const squarenumber = numbers.map(function(number){
//     console.log(`${number * number}`)
// })

// const users = [
//     {firstname : "tanvi" , age : 20 },
//     {firstname : "rohan" , age : 67 },
//     {firstname : "abhyanshu" , age : 90 },
// ]

// const usernames = users.map((user) => {
//     return user.firstname
// }) 

// console.log(usernames)

// filter method(returns true of false -- boolean value) ****************************************************************

// const numbers = [1,2,3,4,5,6]

// const isEven = ((number) => {
//     return number % 2 === 0 ;
// })
// const evennumber = numbers.filter((number) =>{
//     return number % 2 === 0; 
// });
// console.log(evennumber);

//reduce method **********************************************************************************************************

// const numbers =[1,2,4,5,6]


// // aim : sum of alll numbes in array 

// const sum =  numbers.reduce((accumulator, currentValue) =>{
//   return accumulator + currentValue;
// })
// console.log(sum);

//accumulator,   currentValue,    return 
// 1                2               3
// 3                4               7 
// 7                5               12               

// sort method (will take as callback)*****************************************************************************************************************
// const products = [
//   {productid: 1, productname : "p1" , price: 400},
//   {productid: 2, productname : "p2" , price: 500},
//   {productid: 3, productname : "p3" , price: 100},
//   {productid: 4, productname : "p4" , price: 200}
// ]

// const lowtohigh = products.slice(0).sort((a,b)=>{
//   return a.price - b.price
// })
// console.log(lowtohigh)

// const hightolow = products.slice(0).sort((a,b)=>{
//   return b.price - a.price
// })
// console.log(hightolow)

// find method(return is imp ) *****************************************************************************************************************************************

// const users = [
//     {userid: 1, username : "p1" },
//     {userid: 2, username : "p2" },
//     {userid: 3, username : "p3" },
//     {userid: 4, username : "p4" }
//   ]

// const finduserid = users.find((user) =>
//   { return user.userid===3 }
// )
// console.log(finduserid)

// every method **********************************************************************************************

// callback function --> true / false (boolean)
// every method ----> true(for every element) / false (boolean)
// const products = [
//       {productid: 1, productname : "p1" , price: 400},
//       {productid: 2, productname : "p2" , price: 500},
//       {productid: 3, productname : "p3" , price: 100},
//       {productid: 4, productname : "p4" , price: 200}
//     ]
// const ans = products.every((item)=>item.price < 3000);
// console.log(ans);

// some method ******************************************************************************************************************

// const products = [
//     {productid: 1, productname : "p1" , price: 400},
//     {productid: 2, productname : "p2" , price: 6000},
//     {productid: 3, productname : "p3" , price: 100},
//     {productid: 4, productname : "p4" , price: 200}
//   ]

//   const ans = products.some((item)=>item.price > 3000);
//   console.log(ans);

// fill method ***************************************************************************************************************************


// const myarray = [1,2,3,4,6,5,8,9,8]
// const array = myarray.fill(0,2,5)
// console.log(array)

// iterables *****************************************************************************************************************************
// string and array are iterables 
// objects are not 
// array like objects --> jinke pass length property hoti h 

// (Sets --> it is iterable)
// [stores data 
//  no index based access
//  order is not gaurantee
//  unique items only --> no duplicates allowed 

// ]

// const numbers = new Set([1,2,3])
// console.log(numbers);
// numbers.add(7)
// numbers.add(8)
// numbers.add([1,2,3])  //after putting sqare bracket it will add duplicate
// numbers.add([1,2,3])

// Map Object ***************************************************************************************************************
// key value pair 
// const person = new Map();
// person.set('firstname', 'harshit' );
// person.set('age ' , 7);
// person.set(1, 'one')
// console.log(person);
// // console.log(person.get(1));?
// console.log(person.keys());
// for(let key of person.keys() ){
//    console.log(key) 
// }
// for(let [key1,value] of person){
//   console.log(key1, value)   // array destructuring
// }

//  clone using Object.assign**********************************************************************************************
// memory 

// const obj = {
//   key1: "value1",
//   key2: "value2",
// }
// // const obj2 = {...obj};
// const obj2 = Object.assign({}, obj)
// obj.key3 = "value3 "
// console.log(obj)
// console.log(obj2)


// optional chaining ********************************************************************************************
// const user = {
//   firstname : "harsjit ",
//   address : {housenumber : '1234'}
// }

// console.log(user?.firstname)
// console.log(user?.address?.housenumber)

// function inside object******************************************************************************************* 
// this keyword

// const person = {
//   firstname: "tanvi ",
//   age : "98",
//   about: function(){
//     console.log(`person name is ${this.firstname} and age is ${this.age}`)
//   }
// }
// person.about();

// call, apply , bind*************************************************************************************************
// call ********************
// const user1 = {
//   firstname : "harshit ",
//   age : 9,
//   about : function(hobby , done){
//     console.log(`this is firstname ${this.firstname} hobby is ${hobby} and done is ${done}`)
//   }
// }
// const user2 = {
//   firstname : "tanvi ",
//   age : 9,

// }
// user1.about.call(user2, "guitar", "done for"); 

// // apply *******************************
// user1.about.apply(user2, ["golf" , "nothing"])
// //bind *******************************
// const func = user1.about.bind(user2, "guitar" , "nothing")
// func();

//  __proto__(reference, create chain ) , [[prototype]]  --> both are same  ********************************************************************************************************

//  prototype (object) --> this is different

//  const obj1 = {
//     key1 : "value 1 ",
//     key2 : "value 2 "
//  }
// const obj2 = Object.create(obj1); // using object.create we set proto property in obj 2 of obj 1 

// obj2.key3 = "value 3 ";
// console.log(obj2.key2);
// // this is happening 
// console.log(obj2.__proto__)



// function provide freespace object --> {}
// called prototype // only functions provide prototype property not any other else 
// function hello(){
//     console.log("hello world ")
// }
// console.log(hello.prototype)
// if(hello.prototype){
//     console.log("prototype present")
// }else {
//     console.log("not present ")
// }

// // how to use prootype as a freeespace 

// function hello1(){}
// hello1.prototype.abc = {..."abc"};
// hello1.prototype.sing = function(){
//     return "lallalal";
// }
// console.log(hello1.prototype.sing)

// new keyword******************************************************************
// 1.) empty object this = {}
// 2.) return this {}
// 3.) it will automatically create or set proto value ot its prototype  --> object without manually doing it --> Object.create(createUser.prototype)

// function createUser(firstname, age ){
//     this.firstname = firstname;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstname, this.age)
// }
// const user1 = new createUser("harshit", 8);
// user1.about();

// ***********************************************************************************************
// function CreateUser(firstname, lastname, email, age, address){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.email = email;
//     this.age = age;
//     this.address = address;    
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstname} is ${this.age} years old`
// }
// CreateUser.prototype.is18 = function(){
//     return  this.age >=18
// }
// CreateUser.prototype.sing = function(){
//     return "lellelel ekelel ";
// }

// const user1 = new CreateUser("tanvi" , "shah" , "tanvi221110@gmail.com", 90, "shhawal")
// const user2 = new CreateUser("targen" , "arora" , "abhyanshu@gmail.com", 8, "shhawal")
// const user3 = new CreateUser("harsh " , "patel" , "harsh.ui09@gmail.com", 12, "shhawal")

// for(let key in user1){

//     if(user1.hasOwnProperty(key)){
//         console.log(key);

//     }
// }

// ************************************************************************************
// above declaration using class keyword

// class CreateUser{
//     constructor(firstname, lastname, email, age, address){
//         console.log("constructor called")
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.email = email;
//     this.age = age;
//     this.address = address; 
//     }

//     about(){
//         return `${this.firstname} is ${this.age} years old`
//     }
//     is18(){
//         return  this.age >=18
//     }
//     sing(){
//         return "lellelel ekelel ";
//     }
// }


// const user1 = new CreateUser("tanvi" , "shah" , "tanvi221110@gmail.com", 90, "shhawal")
// const user2 = new CreateUser("targen" , "arora" , "abhyanshu@gmail.com", 8, "shhawal")
// const user3 = new CreateUser("harsh " , "patel" , "harsh.ui09@gmail.com", 12, "shhawal")

// console.log(user1.is18())
// console.log(Object.getPrototypeOf(user2))

// ********************************************************************************
// task 

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const animal1 = new Animal("tom", 2)
// console.log(animal1);
// console.log(animal1.eat());

// class dog extends Animal{
//    constructor(name , age, speed){
//       super(name, age)
//       this.speed = speed;
//    }
//    eat(){
//     return `MOdified eat : ${this.name} is eating`
//    }
//    run(){
//     return `${this.name} is running at ${this.speed}`
//    }
// }

// const tommy = new dog("tommy", 3 , 67)
// console.log(tommy.eat() );

// // getters(methods can be used as property wihout using (brackets)) and setters ***********************************************************************************
// class Person{
//     constructor(firstname , lastname , age){
//         this.firstname = firstname;
//         this.las mṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇṇname = lastname;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstname} ${this.lastname}`
//     }
//     set fullName(fullName){
//         const [firstname, lastname] = fullName.split(" ")
//         this.firstname = firstname;
//         this.lastname = lastname;

//     }

// }

// const person1 = new Person("harhsit ", "sharma", 5 )
// person1.fullName = "moiht vashist  "
// console.log(person1.fullName)


// static methods and properties**********************************************************************************************************************
// (no need to create object to call class members --> is what static does)


























//  03:00:00 HRS 
// *************** HOW JAVASCRIPT WORKS ******************
// ecma script : not mention to compile code

// ->compiltion phase
// {1. early error checking 
// 2. appropriate scope for variable }

// * tokenizing/lexing 
// * parsing -> abstract syntax tree
// * code generation 

// ->code execution
// * global execution context   
// ->execute 


// **js is syncronous ((single-threaded) one by one code is executed)

// [window : {}
// this : window
// ]


//  firstname = " tanvi"
// console.log(firstname)

// TDZ - {TEMPORAL DEAD ZONE} let variable is not initialised we call it TDZ 

// const myfunc = fun = () => {
//     let counter = 0;
//     return function () {
//         if (counter < 1) {
//             console.log("this is function call");
//             counter++;
//         } else {
//             console.log("u already called me ");
//         }
//     }

// }

// const myfunct2 = myfunc();
// myfunct2();
// myfunct2();

// +++++++++++++++++++++++++++++++   DOM (Document Object Model) +++++++++++++++++++

// documnet object is main reason for our web page to show in what we are seeing 

// ************************  select element using get element id(we can select only by using thier id ) 

// console.log(document.getElementById("id-name"))   // id="id-name"

// ************************  select element using query selector(we can select anything not only id's)
// console.log(document.querySelector(".header"))    //selecting class
// console.log(document.querySelector("#id-name"))    //selecting id's
// console.log(document.querySelectorAll(".nav-items"))   //selecting all nav items [lists]


// **************************  change text ************************** 
// **************************  textContent and innerText **************************
//{textContent} - shows everything in console whether its text display is hidden 
//{innerText} - does not show display hidden texts in console 
// const mainheading = document.getElementById("main-heading")
// mainheading.textContent = "this is wooooooo ";
// console.log(mainheading.textContent)
 

// ************************** change the styles of element **************************
// const mainheading = document.querySelector("div.headline h1")
// mainheading.style.color = "blue"
// mainheading.style.backgroundColor = "red"


// ************************** get and set attribute **************************
// {blue colors are attribute} - like class attribute has headline property 
 
// const hello = document.querySelector("a")
// console.log(hello.getAttribute("href"))
// hello.setAttribute("href") = "pexel.com"
// console.log(hello.getAttribute("href"))


// ************************** get multiple element using get element by class name (arraylike object )
// ************************** get multiple elements items using querySelectorAll (arraylike object )
// const hello = document.getElementsByClassName("class-name")
// const hi = document.querySelectorAll("a") 


// ************************** loop (we cant use forEach in HTML Collection) 
// ******** 1. simple for loop 
//  for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//  }
// ******** 2. for of loop
// ******** 3. forEach



// events 

// const btn = document.querySelector(".btn-click")

// function onclick(){
//   console.log("you clicked me ! ")
// }

// btn.addEventListener("click", "onclick")











