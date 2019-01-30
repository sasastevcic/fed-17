class Animal {
    name: string; //Polje - property
    constructor(theName: string) { //Konstruktor
    	this.name = theName; 
    }
    move(distanceInMeters: number = 0) { //Metoda
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { 
    	super(name); 
    }
    move(distanceInMeters:number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters:number = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

