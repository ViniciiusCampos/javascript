class Person {
   
    age = 0;

    constructor(name) {
        this.name = name;
    }

}

function createPerson(name, age) {
    let p = newPerson(name);
    p.age = age;
    return p;
}


let p1 = createPerson('paulo', 90);

