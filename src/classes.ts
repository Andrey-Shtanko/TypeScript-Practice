// class House { 
    
    
//     private tenants: string[] = [];

//     constructor(private type : string, private street: string) {
//     }

//     public showAddress(this: House): void { 
//         console.log('Address: ' + this.street);
        
//     }
//     public showType(this: House): void { 
//         console.log(('Type of house:' + this.type));
        
//     }
//     public addTenant(name: string) {
//         this.tenants.push(name);
//     };

//     public showTenants() { 
//         console.log(this.tenants);
//     }

// }


// class StoneHouse extends House{
//     private chargeOfHouse: string;
//     constructor (street: string, general: string){
//         super ('stone', street);

//         this.chargeOfHouse = general;
//     }
//     public showTenants(): void {
//         console.log('General: ' + this.chargeOfHouse);
//         super.showTenants();
        
//     }
// };

// const stoneHouse = new StoneHouse('Gagarina', 'Bill');

// stoneHouse.showTenants();
// stoneHouse.showAddress();
// stoneHouse.showType();


// const house = new House('stone','Geroiv Dnipra');
// const house2 = new House('stone','Geroiv Dnipr2');
// const house3 = new House('stone','Geroiv Dnipra3');




// house.showAddress()

// house.addTenant('Max');
// house.addTenant('Alex');
// house.addTenant('Andrew')
// house.showTenants();
// house2.showType();
// house2.addTenant('Garry');
// house2.showTenants();


// class UseStatic { 
//     private static count = 0;

//     constructor() { 
//         UseStatic.count += 1;
//     };
//     public static isStaticMethod(): void { 
//         console.log('I`m static');
//     };
//     public showCount(): void { 
//         console.log(UseStatic.count);
        
//     };
// };

// const obj1 = new UseStatic();
// obj1.showCount();
// const obj2 = new UseStatic();
// obj2.showCount();
// const obj3 = new UseStatic();
// obj3.showCount();

// obj1.showCount();
// obj2.showCount();

// UseStatic.isStaticMethod();


// abstract class Plane { 
//     protected pilotInCabine = false;

//     public sitInPlane() { 
//         this.pilotInCabine = true;
//     };

//     public abstract startEngine(): string;
// };

// class Maize extends Plane { 
//     public startEngine(): string {
//         if (this.pilotInCabine) {
//             return 'Tra-ta-ta'
//         }
//         return 'no pilot in this plane'
        
//     }
// };

// class Boeing extends Plane { 
//     public startEngine(): string {
//         if (this.pilotInCabine) {
//             return 'woooooo';
//         }
//         return 'no pilot in this plane'
        
        
//     }
// };

// const maize = new Maize();
// const boeing = new Boeing();

// maize.sitInPlane();

// console.log(boeing.startEngine());
// console.log(maize.startEngine());



// interface IPerson { 
//    readonly name: string,
//     age?: number,

//     greet(phrase: string): void;

// };


// interface IPilot { 
//     flyMessage(): void;

// };


// class Pilot implements IPerson, IPilot { 

//     constructor (public readonly name: string, public age: number) { 
//         this.checkAge()
//     };
//     private checkAge() { 
//         if (this.age < 28) { 
//             throw new Error('Pilot too young');
//         }
//     }
//     public greet(phrase: string) { 
//         console.log(phrase + ' ' + this.name);
        
//     }

//     public flyMessage(): void {
//         console.log('Our plane run up in needed height-level!');
        
//     }
// }

// const pilot = new Pilot('Max', 32);
// pilot.greet('I welcome you in a bort');
// pilot.flyMessage();



// let user: IPerson;

// user = {
//     name: 'Max',
//     age: 23,

//     greet(phrase: string): void {
//         console.log(phrase + ' ' + this.name);
        
//     }
// };

// user.greet('Hello, my name is ');


// // type AddFunc = (n1: number, n2: number) => number;

// interface AddFunc { 
//    (n1: number , n2: number ): number 
// }



// const foo: AddFunc = (n1: number, n2: number) => { 
//     return n1 + n2;
// }

