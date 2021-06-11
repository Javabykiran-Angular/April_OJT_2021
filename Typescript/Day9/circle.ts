import {Shape} from './shape';

// const pi=3.14;
export class Circle extends Shape
{
    radius:number;
    area:number;

    constructor(r:number){
        super();
        this.radius=r;
        this.area=0;
    }

    
    Myarea(){
        this.area=3.14*this.radius*this.radius;
    }

    Display(){
        console.log(`
        --------Circle Area-----------
            Radius :: ${this.radius}
            Area is ::${this.area}
        `);
    }

}