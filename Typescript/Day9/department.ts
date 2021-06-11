
export class Department{
    private role:string;

    constructor(r:string){
        this.role=r;
    }

    //getter method
    getRole():string{
        return (this.role);
    }

    setRole(r:string){
        this.role=r;
    }


}