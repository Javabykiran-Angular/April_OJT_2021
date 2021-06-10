"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(fname, lname, id) {
        this.fname = fname;
        this.lanme = lname;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        console.log("\n        -----------------------\n            First Name is " + this.fname + "\n            Last Name is  " + this.lanme + "\n            Id is         " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// var obj=new Myclass("Sumit","Raokhande",9);
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
