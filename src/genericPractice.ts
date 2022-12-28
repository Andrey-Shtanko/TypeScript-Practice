function getPromise (): Promise <Array<string|number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
};

function getObj(a: Pick<AllType, 'name' | 'color'>, b: Pick<AllType, 'position' | 'weight'>) {
    const newObj: AllType = Object.assign(a,b)
    return newObj
};

// function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }
// НАдо было типа так))

function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
};

////////////////////////////////////////********************////////////////////////////////////////

interface Iprops { 
    title: string,
}


class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Iprops> {
  pageInfo () {
    console.log(this.props.title);
  }
}
