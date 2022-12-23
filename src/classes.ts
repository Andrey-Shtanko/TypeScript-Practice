class House { 
    
    
    private tenants: string[] = [];

    constructor(private type : string, private street: string) {
    }

    public showAddress(this: House): void { 
        console.log('Address: ' + this.street);
        
    }
    public showType(this: House): void { 
        console.log(('Type of house:' + this.type));
        
    }
    public addTenant(name: string) {
        this.tenants.push(name);
    };

    public showTenants() { 
        console.log(this.tenants);
    }

}


const house = new House('stone','Geroiv Dnipra');
const house2 = new House('stone','Geroiv Dnipr2');
const house3 = new House('stone','Geroiv Dnipra3');


house.showAddress()

house.addTenant('Max');
house.addTenant('Alex');
house.addTenant('Andrew')
house.showTenants();