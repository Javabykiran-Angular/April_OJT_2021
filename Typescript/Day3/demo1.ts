
//Type Assertion => it is same like typecasting

var a:any=10;

// we can use in 2 different ways
// 1 Using Angle bracket
// 2 Using as syntax

// 1 Angle bracket
var temp=(<string> a);


//  console.log(temp);

//2 Using as syntax
var temp2=(a as string);
// temp2.

// Operators
// Arithemathic (+,-,*,/,%)
// Logical (&&,||)
// Relational(!=,<=,>=,==)
// Bitwise (&,|,^,>>,<<,!,~)
// Assignment (=,+=,-=)
// //unary =>  Inc/Dec => post/pre (++a,a++,--a,a--)
// ternary => condition?expression1:expressoin2


//Control statement
// if-else , if-else-if ,nested if else
//switch case , break,continue
//Loop
// for,while,do-while,foreach

var count=21;
// if(count<4){
//     console.log("Condition is True..");
// }else{
//     console.log("Condition is False..");  
// }

// var choice=21;
// switch(choice){
//     case 1: console.log("U are in Case 1...");
//             break;
//     case 2: console.log("U are in Case 2...");
//              break;
//     default : console.log("U are in Default Case ...");
//             break;
// }


//While 
var count2=5;
// while(count2!=0){
//     console.log("Count is "+count2)
//     count2--;   
// }

// do{
//     console.log(count2);
//     --count2;
// }while(count2!=0);

for(var i=0;i<5;i++){
    // console.log("Value of i is "+i);
}

// console.log("Value of i is After the Loop "+i);

//var has a scope is through out file=> It has global scope

// let has scope within nearest block {}

for (let j = 0; j < 5; j++) {
    // console.log("Value of j is "+j);
      
}
//  console.log("Value of j is "+j);

// const => it is equ. as final keyword

const d:number=3.14;
// const has again global scope
// d=1.2;

// ternary => condition?expression1:expressoin2

var temp2=21<4?'Hi':'Bye';
// console.log("Value of temp2 "+temp2);

var g:void;
console.log("Value of G is "+g);





