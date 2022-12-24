class Key { 
    static signature: number;
    constructor() { 
        Key.signature = Math.random()
    }
    public getSignature() { 
        return Key
    }
};

class Person { 
    key: Key
    constructor(key: Key) { 
        this.key = key;
    }
    public getKey()  { 
       return this.key.getSignature();
    }
}



abstract class House  { 
    door: 'open' | 'close';
    key: Key;
    tenants: object[] = [];
    constructor(key: Key, door:'close') { 
        this.key = key
        this.door = door;
    }
    comeIn(tenant: Person) {
        if (this.door === 'open') {
            this.tenants.push(tenant)
        }
    }
    abstract openDoor (key: Key): void
}

class MyHouse extends House {     
    openDoor(key: Key): void {
        if (key === this.key) {
            this.door = 'open';
        }
    }
};


const key1 = new Key();
const owner = new Person(key1);
const myHouse = new MyHouse(key1, 'close');
owner.getKey();

myHouse.openDoor(owner.key);
myHouse.comeIn(owner);
console.log(myHouse.tenants);
console.log(myHouse.key);

