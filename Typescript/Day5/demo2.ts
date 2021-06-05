//array in Typescript
// In core java
// int a[]=new Array(4);
// int a[]=new int[4];
// int a[]={2,3,4,5};
// int a[3];
 var a:number[]=[2,3,4,5];
 var a1=[1,2,3,4];
 var a2=[];
 var a3:string[]=[];
 var a4:string[];

 var a5=[2,'sumit',true,2.5,'Angular'];


//  for (let i = 0; i < a.length; i++) {
//      console.log(`
//      -------------------------
//         Array data with index a[${i}]=${a[i]}
//      `)     
//  }

// console.log("Array value is "+a);
// console.log("Array value is "+a.join(' # '));
// console.log("Array value is "+a.join('  '));


//for each

a.forEach((myvalue,myindex)=>{
    console.log("Value is "+myvalue+" And Index is "+myindex);
});





