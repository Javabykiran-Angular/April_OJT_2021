// Annonymous function
var temp = function () {
    console.log("Annonymous function is called...");
};
// temp();
var temp2 = function (a, b) {
    console.log("Addition is " + (a + b));
};
// temp2(2,1);
// fat Arrow function/ Arrow Function
var temp3 = function () {
    console.log("Fat Arrow Function is called...");
};
//   temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("\n    Addition is " + temp4(10, 2) + "\n");
