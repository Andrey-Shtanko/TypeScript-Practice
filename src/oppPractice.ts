class Key { 
    static signature: number;
    constructor() { 
        Key.signature = Math.random()
    }
    public getSignature() { 
        return Key
    }
};

// class Person { 
//    private key: Key
//     constructor(key: Key) { 
//         this.key = key;
//     }
//     public getKey()  { 
//        return this.key;
//     }
// }



abstract class House  { 
    door: 'open' | 'close';
    key: Key;
    tenants: Person[] = [];
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


// const key1 = new Key();
// const owner = new Person(key1);
// const myHouse = new MyHouse(key1, 'close');

// myHouse.openDoor(owner.getKey());
// myHouse.comeIn(owner);
// console.log(myHouse.tenants);
// console.log(myHouse.key);

/**
 * ///////////////////////////////////КОД ВЫШЕ РАБЛОТАЕТ, НО  /////////////////////////
 *  ////////////////////////////////НАДО БЫЛО СДЕЛАТЬ ТАК://///////////////////////////////////
 * 
 * 

 * class Key {
  private signature: number;

  constructor () {
    this.signature = Math.random();
  }

  getSignature (): number {
    return this.signature;
  }
}

class Person {
  constructor (private key:Key) {}
  getKey (): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor (protected key:Key) {}

  comeIn (person: Person):void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor (key:Key): boolean;
}

class MyHouse extends House {
  openDoor (key:Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
 */