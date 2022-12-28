interface Admin { 
    name: string;
    privileges: string[];
};

interface User { 
    name: string;
    startDate: Date | number;
};

type AdminOrUser = Admin | User;

const someOne: AdminOrUser = {
    name: 'Denny',
    startDate: Date.now(),
}

function showFields(el: AdminOrUser) { 
    if ('startDate' in el) {
        console.log(el.startDate);
    };
    if ('privileges' in el) {
        console.log(el.privileges);
    };
    console.log(el.name);
    
};

showFields(someOne);


abstract class Guy { 
    constructor(public name: string) { 

    }
}

class Good extends Guy { 
    advice() { 
        console.log('advice');
    };
};

class Bad extends Guy { 
    insult() { 
        console.log('insult');
    };
};

const good = new Good('John');
const bad = new Bad('Bill');

function guys(user: Guy) { 
    if (user instanceof Good) {
        user.advice();
    }
    if (user instanceof Bad) { 
        user.insult();
    }
};

// const input = <HTMLInputElement>document.getElementById('num1')!;
// const input = document.getElementById('num1') as HTMLInputElement;
const input = document.getElementById('num1');
if (input) {
    (input as HTMLInputElement).value;
    const newInput = input as HTMLInputElement;
    newInput.value
};

// interface Person {
//     name: string;
//     age: number
//     [x: string]: string | number;
// }

// const user: Person = {
//     name: 'Max',
//     age: 30,
//     genger: 'MAN',
//     country: 'Ukraine',
// }

interface Person { 
    name: string;
    additionalInfo?: {
        someInfo: string,
    }
}

const user: Person = {
    name: 'Max',
}

user.additionalInfo?.someInfo;

const userInput = '';

const store = userInput || 'DEFAULT'; // если будет стоять оператор или то по-любому будет дефолтное значение.
// если вместо || поставить оператор ?? тодефолное значение будет только в лучае если
// в юзеринпуте будет налл или андефайнд!)


let arr: Array<string | number>;


const promise: Promise<string> = new Promise(resolve => { 
    resolve('String');
})

promise.then((data) => { 
    console.log(data);
    
})







