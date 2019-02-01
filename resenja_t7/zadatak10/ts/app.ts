/*
//Zadatak 6
Napraviti klasu Robot, robot ima atribut ime, i metode pozdrav i reset.
Pre pravljenja Robota, potrebno im je izabrati ime. Ime robota treba da bude
u formatu dva velika slova pa tri cifre: AF897, EO001 ... Imena robota treba
nasumicno odrediti, pri cemu nije dozvoljeno da postoje dva robota sa istim imenom.
Metoda pozdrav ispisuje "Zdravo ja sam robot: imeRobota". Metoda reset brise resetuje
njegovo ime.
*/
let roboti: Robot[] = []; 

class Robot {
	ime: string;
	pozdrav(): void {
		document.write(`Zdravo ja sam robot: ${this.ime}<br/>`);
	}
	reset(): void {
		this.ime = "";
	}
}

function izaberiIme(): string {
	let slova: string = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
	let redukovaniNiz;
	let ime = "";

	do { //Do while izvrsava telo petlje bar jednom

		let prviIndeks: number = Math.floor(Math.random() * slova.length); 
		//Izdvajamo nasumice indekse slova iz stringa slova
		//Math.random() nam vraca broj na intervalu od 0 do 1
		//broj na intervalu od 0 do 1 puta 28 = broj na intervalu od 0 do 28
		//Math.floor elimise decimale
		let drugiIndeks: number = Math.floor(Math.random() * slova.length);

		let s1: string = slova.charAt(prviIndeks);
		let s2: string = slova.charAt(drugiIndeks);

		let cifre: number = Math.floor(Math.random() * 1000); //Nasumican trocifreni broj je broj na intervalu od 0 do 1 puta 1000
		if(cifre < 100) //Ukoliko je Math.random vratio broj poput: 0.01 mnozenje sa hiljadu vraca dvocifreni broj (dvocifreni broj + 100 nam daje trocifreni broj)
			cifre += 100;

		ime = s1+s2+cifre;

		redukovaniNiz = roboti.filter((elem) => elem.ime == ime); 
		//Proveravamo da li postoji robot sa nasumice izabranim imenom u nizu robota,
		//ukoliko ne postoji rezultat ce biti prazan niz [] ciji length je 0
		
	} while (redukovaniNiz.length != 0);

	return ime;
	

}

for(let i = 0; i < 10000; i++){
	let robot = new Robot();
	robot.ime = izaberiIme();
	roboti.push(robot);
	robot.pozdrav();
}

