//Functions
// 1 function without argument & without return type
// 2 function with argument & without return type
// 3 function without argument & with return type
// 4 function  with argument & with return type
// 1 function without argument & without return type
function add() {
    console.log("\n    ------------------------\n    function without argument & without return type    \n    ");
}
// add();
// 2 function with argument & without return type
function add1(a, b) {
    console.log("Addition is " + (a + b));
}
// add1(4,5);
// 3 function without argument & with return type
function add3() {
    return (7 + 7);
}
var temp = add3();
// console.log('Value of Temp :: '+temp);
// 4 function  with argument & with return type
function add4(a, b) {
    return (a + b);
}
var temp1 = add4(5, 5);
console.log("Temp value is " + temp1);
