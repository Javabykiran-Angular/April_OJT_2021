
export class Myclass{
   public fname:string;   //Property
   protected id:number       //Property
   private lanme:string;   //Property

    constructor(fname:string,lname:string,id:number){
            this.fname=fname;
            this.lanme=lname;
            this.id=id;
    }

   

    display(){
        console.log(`
        -----------------------
            First Name is ${this.fname}
            Last Name is  ${this.lanme}
            Id is         ${this.id}
        `)
    }

}

// var obj=new Myclass("Sumit","Raokhande",9);
// obj.display();

export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;


