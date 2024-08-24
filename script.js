// //6
// let data = 10 - -10;
// console.log(data);
// out:-20


// //7
// const set =new set([1,1,2,3,4]);//set doube repeate number ko remove kar deta hai.1,1,2,2 out:-12
// console.log(set);
// // out:-1,2,3,4


// // //8
// let data = {
//     name:'md neyaz'
// };
// console.log(delete data.name);
// // // out:-md neyaz delete (true.)


// //9
// let data = {
//     name:"md neyaz"
// };
// console.log(delete data);
// // out:- (false.)


// //10
// const data = ["md","neyaz","gulam","imteyaz"];
// const  [y]= data;
// console.log(y);
// //out:- md


//11
// const data = ["md","neyaz","gulam","imteyaz"];
// const  [,y]= data; //how to get second element
// console.log(y);
//out:- neyaz


//12
// const data =
// {
//     name:"neyaz",
//     age:22,
//     skill:"HTML"
// };
// const {age}=data;
// console.log(data.name); //how to get property with operator.
//  console.log(age);//how to get property without operator.




// //12
//  let data = { name: "anil", age: 29, skill: "HTML" };
//  let info = {city: "Noida", mail: "anil@test.com" };
// data ={...data,...info}
// //   merge 2 object
//  console.warn(data)



// //13
// let a = 5;
// let b = a++;
// let c = a + 1;
// console.log(a, b, c);
// // out: 6,5,7

//14
// let a = 8;
// let b = a++;
// let c = b + 1;
// console.log(a, b, c);


// //15
//   let data = { name: "anil", age: 29, skill: "HTML" };
//   let info = {city: "Noida"};
//  data ={data,...info}
//  //   merge 2 object
//   console.warn(data)




// //16
//   let data = { name: "anil", age: 29, skill: "CSS" };
//   let info = {city: "Noida", skill: "HTML" };
//  data ={...data,...info}
//  //   merge 2 object
//   console.warn(data)


// //17
// const name = 'mdneyaz';
// console.log(name()); 



// // //18
// const result = false || {} || null;
// console.log(result);
// // out:- {}



// //19
// const result = null||false||'';
// console.log(result);
// out:- 



// //20
// const result = [] || 0 || true;
// const result = false || 0 || true;
// console.log(result);
// out:- {true}



//21
// console.log(Promise.resolve(5))
// out:- 5



// //22
// console.log('❤️'=== '❤️');
// // out:- true


// //23
// console.log('💔'=== '❤️');
// // out:- false



// //24
// let name = 'sidhu'; 
// function getName() {
//     console.log(name);
//     let name = 'anil';
// }
// getName(); 
// // out:- error


// //25
// let name = 'mdneyaz'; 
// function getName() {
//     console.log(name);
// }
// getName(); 
// // out:- mdneyaz


//26
// console.log(`${(x=>x)('I love')} to program`);
// out:-I love to program


//27
//output shoud be 6.
// function sumValues(x, y, z) {
//    return x+ y + z; 
// }
//  console.log(sumValues(...[1, 2, 3])) 
// A: sumValues([...1, 2, 3])
// B: sumValues([... [1, 2, 3]]) right option
//C: sumValues([1, 3]
//D: sumValues([1, 2, 3])]
// out:-    // B: sumValues([... [1, 2, 3]]) right option


//26
// const name = 'code step by step';
// console.log(typeof name === 'object');
// console.log(typeof name === 'string')



//27
// const name = "md neyaz";
// const  age = 21; 
// console.log(is NaN(name)) //true
// console.log(isNaN(age))  //false



//29
// let data = [1,2,3,4];
// //remove the first element
// data.shift()
// console.log(data);



//30

//29
// let data = [1,2,3,4];
// //remove the last element
// data.pop()
// console.log(data);



//31
//check any value is odd or even
// let a=21
// console.log(a%2)



//32
// let data={
//     name:"mdneyaz"
// }
// delete data.name;
// console.log(data)



//33
// let data = "true";
// //convert data to boolean false value
// console.log(!data)
// out:- false


//33
// let data = "true";
// //convert data to boolean true value
// console.log( !!data)
// out:- true



//34
//diffrent between map and forEach function



// //35
// let data =["md neyaz","kadir","md",];
// delete data [1];
// console.log(data)



//36
// let data =["md neyaz","kadir","md",];
// delete data [1];
// console.log(data.length)


//37
//merge two array
// let a =[1, 2, 3];
// let b =[4, 5, 6]; 
// let c =[...a,...b];
// console.warn(c)



//38
//merge two array
// let a =[1, 2, 3,4];
// let b =[4, 5, 6]; 
// let c =[...a,...b];
// console.warn(c)



//39
// let c = 3 ** 3;
// console.warn(c)
// out:- 27



// //39
// let c = 3 * 3;
// console.warn(c)
// // out:- 9



//40
// let a = 2;
// setTimeout(()=>{
//     console.log(a)
// },0)
// a=100;
// // out:- 100



// //41
// let a = 2;
// let A = 30;
// console.log(A);
// // // out:- 30



// //42
//  let A10 ="like";
// //  let 10A = "okay"
//  console.log(A10)



//43
// let a = "like";
// let b = `like`;
// console.log(a===b);
// out:- true 



//44
// let a = 1;
// let c = 2;
// console.log(--c===a);
//  // out:- true  --c means decrease by 1 ===1 = true.



// //45
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); 
// // a ===b gives true value then compare true and --c is a number then gives false easy way.



//46
// console.log(3*3)//9
// console.log(3**3) //27
// console.log(3***3) //error



// //47
//  console.log(a)
//  var a;
//  // out:- undefine



// //48
// console.log(a)
// // out:- not define



// //49
// console.log([[[[]]]])
// // out:- not define


// //50
//  //How to find OS name 
//   ans
//  navigator.platform
//   ans 'Win32'



// //51
// function fruit(){
//     console.log(name);
//     console.log(price);

//     var name = "apple";
//     let price = 50;
// }
// fruit();



// //52
// for (var i=0; i<3; i++ ){   //global scope kahi bhi use kar sakte hai.
//     setTimeout(()=>console.log(i),1);
// }



// //53
// for (let i=0; i<3; i++ ){
//     setTimeout(()=>console.log(i),1);
// }




// //54
// console.log(+true); //1
// console.log( typeof +true);//number


//55
// console.log(!"mdneyaz");  //false
// console.log( typeof ("mdneyaz"));//string



// //56
// let data = "size";
// const bird = {
//     size: "small",
// };
// console.warn(bird[data]); //small
// console.warn(bird["size"]);//small
// console.warn(bird.size);//small
// console.warn(bird.data);//undefine



// //57
// let c = {name:"mdneyaz"};
// let d;

// d = c;
// c.name = "gulam kadir";
// console.log(d.name);


// 58
// var x;
// var x=10;
// console.log(x);
// //output:-10



// //59
// var x;
// let x=10;
// console.log(x);


// //60
// let a=3; 
// let b = new Number(3); //type object ban jayega. 
// console.log(a == b); //true
// console.log(a === b);//false


// //61
// let name ;
// nmea = {}; //type!
// console.log(name);
// // //output:-undefine



// //62
// function fruit(){
//     console.log("woof!");
// }
// fruit.name = "apple";
// fruit()



// //63
// function sum (a,b){
//     return a+b;

// }
// console.log(sum (1,"2"));
// // out:-12


// //64
//  let number = 0;
//  console.log(number++); //0
//  console.log(++number);//2
//  console.log(number);//2



// //65
// function getAge(...args){
//     console.log(typeof args);
// }

// getAge(21);
// // // out:-object



// //66
//  function getAge() {
// //  'use strict';
// age= 21;
//  console.log(age);
//  }
//  getAge();




// //  //67
// const sum = eval('10*10+5'); //eval string ko number me convert karke operation perform kar deta hai.
// console.warn(sum)



// //68
// const obj = {1:"a", 1:"b", 3:"c", };
// console.log (obj.hasOwnProperty("1"))//true
// console.log (obj.hasOwnProperty(1))//true



//69
// const obj = {a:"one", b:"two", a:"repeate"};
// console.log(obj);
// // output:-{a:"one", a:"repeate"}



// //70
// for(let i = 1; i<5; i++){
//     if(i === 3) continue;
//     console.log(i);
// }




// //71
// const foo =()=>console.log('First'); //1
// const bar =()=>setTimeout(()=> console.log('second'));//3
// const baz =()=>console.log('Third');//2

// bar(); 
// foo();
// baz();





// //72
//  <div>
//     <div onclick="console.log('first div')">
//         <div onclick="console.log('second div')">
//             <button onclick="console.log('button')">click</button>
//         </div>
//     </div>
// </div> 
// output:- button , second div , first div




// //73
// const person = {name: 'mdneyaz'};

// function kaisanbadu (age){
//     return `${this.name}is ${age}`;
// }

// console.log( kaisanbadu.call(person,21)); //mdneyazis 21
// console.log( kaisanbadu.bind(person,21));//function return do first.




// //74
// function sayHi (){
//     return(()=>0)();
// }

// console.log(typeof sayHi());
// output:-number.




// //75
// function sayHi (){
//     return()=> 0;
// }
// console.log(typeof sayHi());
// // output:-function




// //76
// console.log(typeof typeof 1);
// // output:-string




// //77
// const number = [1,2,3];
// number[6] = 11;
// console.log(number);
// //out:-(7) [1, 2, 3, empty × 3, 11]



//78
// const number = [1,2,3];
// number[9] = number;
// console.log(number);
// //out:-(7) [1, 2, 3, empty × 3, Array(10)] infine time taak.




//79
//  Everything in JavaScript is either a..
// A: primitive or object     // right
// B: function or object
//C: trick question! only objects
//D: number or object




// //80
// console.log(!!null);//false
// console.log(!!"");//false
// console.log(!!1);//true



// //81
// console.log(setInterval(()=> console.log('hi'),1000))
// console.log(setInterval(()=> console.log('gulam'),1000))
// console.log(setInterval(()=> console.log('irfan'),1000))




// //82
// console.log([..."mdneyaz"]);




// // 84
// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });
// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));




// //85
// let person = {name:'mdneyaz'};
// const members = [person];
// person = null;
// console.log(members);





// //86
// const person = {
//     name: 'mdneyaz',
//     age:21,
// };
// for(const item in person){
//     console.log(item);
// }
// //out:- name age



// //87
// let data = 3+4+ '5';
// console.log(typeof data);
// out:-String



// //88
// console.log(typeof 3 + 4 +'5');
// // out:-number45



// //89
// console.log(typeof ( 3 + 4+ +'5'));
// // out:-number



// //90
// console.log([] == [])
// //false



// //91
// let data= [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num*2; 
// });
// console.warn(data);



// //92
// function getInfo(member){
// member.name = 'Anil';
// }
// const person = { name: 'Sarah' };

// getInfo(person);

// console.log(person);




// //93
// function Car() {
//     this.make= 'tata';
//     return {make: 'Kia'};
//     }
//     const myCar = new Car();
//     console.log(myCar.make);



// //94
// (()=>{
//     let x = (y = 10);

// })();
// console.log(typeof x);



// //95
// (()=>{
//     let x = y = 10;
//         // let x;
// })();
// console.log(typeof y);



// //96
// (()=>{
//     let x= 10;
// })();

// (()=>{
//     let x= 10;
// })();
// console.log(typeof x);
//  //output:-undefine 




// // //97
// (()=>{
//     let x=y= 10;
// })();

// (()=>{
//     let x=y= 20;
// })();
// console.log(y);
//  //output:- 20 




//  //98
//  let x = 100;
//  (()=>{
//     let x=20;
// })();
// console.log(x);
// //  //output:- 100 



// //99
// console.log(!true - true);
// //output:- -1 


//100
// console.log(true + + "10");
//  //output:- 11



// //101
// console.log(1+True);

// function test(...args) {
//     console.log(typeof args);
//    }
//    test(12);