


//You can use 2 ways to add data dynamically in array
// 1 using Push & Pop Method

// 2 Splice method

// 1 using Push & Pop Method

// It works on LIFO Principle LIFO

var a:number[]=[];

// a.push(14);
// console.log(a);
// a.push(55);
// console.log(a);
// a.push(77,87,90);
// console.log(a);
// var temp=a.pop();
// console.log(a);
// console.log("Poped Data is "+temp);

var a1:number[]=[11,2,21,55];

// console.log(a1);
// a1.splice(1,0,50);
// console.log(a1);
// a1.splice(2,0,20,8,78);
// console.log(a1);
// a1.splice(7,1);
// console.log(a1);
// a1.splice(3,2);
// console.log(a1);
// a1.splice(2,1,30);
// console.log(a1);

//slice => You can copied a section of data return a new array 

var a2=[44,55,12,34,63,10,88,90];
// console.log("Original Array "+a2);

// var temp1=a2.slice(1,6);
// console.log("Copied Data "+temp1);
// var temp2=a2.slice(1)
// console.log("Copied Data "+temp2);

//Map

var a3=[2,4,5,6];

var result=a3.map((value,i)=>{
    return (value*value)
});

console.log(a3);
console.log(result);




