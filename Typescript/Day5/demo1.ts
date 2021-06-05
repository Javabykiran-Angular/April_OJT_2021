//Optional parameter function

function add(a?:number,b?:number){
    console.log("Value of A is "+a); //6
    console.log("Value of B is "+b); //undefined
    console.log("Value of A+B is "+(a+b)); // NAN
}

// add()

//Default parameter Function

// var temp=(a:number,b:number=2)=>{
//     console.log("Value of A is "+a); //10
//     console.log("Value of B is "+b); //2
//     console.log("Value of A+B is "+(a+b)); // 12

// }

// temp(10)


var temp1=(a:number=3,b:number)=>{
    console.log("Value of A is "+a); //5
    console.log("Value of B is "+b); //undefined
    console.log("Value of A+B is "+(a+b)); // nan
}


 temp1(5,6)


var temp2=(a:number,b:number=4)=>{
    console.log("Value of A is "+a); //10
    console.log("Value of B is "+b); //2
    console.log("Value of A+B is "+(a+b)); // 12

}

// temp2(5,10);

//Rest Parameter function
