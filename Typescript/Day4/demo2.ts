
// Annonymous function

var temp=function (){
    console.log("Annonymous function is called...");
}

// temp();

var temp2=function (a:number,b:number){
    console.log("Addition is "+(a+b));
}

// temp2(2,1);

// fat Arrow function/ Arrow Function

  var temp3=()=>{
      console.log("Fat Arrow Function is called...");
  }

//   temp3();

var temp4=(a:number,b:number):number=>{

    return (a+b)
}

console.log(`
    Addition is ${temp4(10,2)}
`);

//Optional Parameter Function
//Default paramerter Function



