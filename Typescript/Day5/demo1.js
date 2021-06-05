//Optional parameter function
function add(a, b) {
    console.log("Value of A is " + a); //6
    console.log("Value of B is " + b); //undefined
    console.log("Value of A+B is " + (a + b)); // NAN
}
// add()
//Default parameter Function
// var temp=(a:number,b:number=2)=>{
//     console.log("Value of A is "+a); //10
//     console.log("Value of B is "+b); //2
//     console.log("Value of A+B is "+(a+b)); // 12
// }
// temp(10)
var temp1 = function (a, b) {
    if (a === void 0) { a = 3; }
    console.log("Value of A is " + a); //5
    console.log("Value of B is " + b); //undefined
    console.log("Value of A+B is " + (a + b)); // nan
};
temp1(5);
var temp2 = function (a, b) {
    if (b === void 0) { b = 4; }
    console.log("Value of A is " + a); //10
    console.log("Value of B is " + b); //2
    console.log("Value of A+B is " + (a + b)); // 12
};
// temp2(5,10);
//Rest Parameter function
