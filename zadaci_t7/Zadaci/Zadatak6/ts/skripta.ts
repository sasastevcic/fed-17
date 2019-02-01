let studenti: Student[] = [];

class Predmet{
    private _id: number;
    private _nazivPredmeta: string;
    private _imeProfesora: string;
    private _ocena: number;

	constructor(id: number, nazivPredmeta: string, imeProfesora: string, ocena: number) {
		this._id = id;
		this._nazivPredmeta = nazivPredmeta;
		this._imeProfesora = imeProfesora;
		this._ocena = ocena;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nazivPredmeta
     * @return {string}
     */
	public get nazivPredmeta(): string {
		return this._nazivPredmeta;
	}

    /**
     * Getter imeProfesora
     * @return {string}
     */
	public get imeProfesora(): string {
		return this._imeProfesora;
	}

    /**
     * Getter ocena
     * @return {number}
     */
	public get ocena(): number {
		return this._ocena;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nazivPredmeta
     * @param {string} value
     */
	public set nazivPredmeta(value: string) {
		this._nazivPredmeta = value;
	}

    /**
     * Setter imeProfesora
     * @param {string} value
     */
	public set imeProfesora(value: string) {
		this._imeProfesora = value;
	}

    /**
     * Setter ocena
     * @param {number} value
     */
	public set ocena(value: number) {
		this._ocena = value;
	}
    
}

class Student{
    private _ime: string;
	private _prezime: string;
	private _fakultet: string;
    private _broj_indeksa: string;
    private _polozeniPredmeti: Predmet[];

    constructor(ime: string, prezime: string, fakultet: string, broj_indeksa: string){
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._broj_indeksa = broj_indeksa;
        this._polozeniPredmeti = [];
    }

    /**
     * Getter ime
     * @return {string}
     */
	public get ime(): string {
		return this._ime;
	}

    /**
     * Setter ime
     * @param {string} value
     */
	public set ime(value: string) {
		this._ime = value;
	}

    /**
     * Getter prezime
     * @return {string}
     */
	public get prezime(): string {
		return this._prezime;
	}

    /**
     * Setter prezime
     * @param {string} value
     */
	public set prezime(value: string) {
		this._prezime = value;
	}

    /**
     * Getter fakultet
     * @return {string}
     */
	public get fakultet(): string {
		return this._fakultet;
	}

    /**
     * Setter fakultet
     * @param {string} value
     */
	public set fakultet(value: string) {
		this._fakultet = value;
	}

    /**
     * Getter broj_indeksa
     * @return {string}
     */
	public get broj_indeksa(): string {
		return this._broj_indeksa;
	}

    /**
     * Setter broj_indeksa
     * @param {string} value
     */
	public set broj_indeksa(value: string) {
		this._broj_indeksa = value;
	}

    /**
     * Getter polozeniPredmeti
     * @return {Predmet[]}
     */
	public get polozeniPredmeti(): Predmet[] {
		return this._polozeniPredmeti;
	}

    /**
     * Setter polozeniPredmeti
     * @param {Predmet[]} value
     */
	public set polozeniPredmeti(value: Predmet[]) {
		this._polozeniPredmeti = value;
    }
    
    public dodajPredmet(p: Predmet){
        this._polozeniPredmeti.push(p);
    }

    public predstaviSe(): string{
        let i: string =  `Ja sam ${this._ime} ${this._prezime} i studiram na ${this.fakultet}, sa prosecnom ocenom ${this.izracunajProsecnuOcenu().toFixed(2)}`
        return i;
    }

    public izracunajProsecnuOcenu(): number{
        let suma: number = 0;
        for(let i in this._polozeniPredmeti){
            suma += this._polozeniPredmeti[i].ocena;
        }
        let avg: number = suma / this._polozeniPredmeti.length;
        return avg;
    }

    public omiljeniProfesor(): string[]{
        let profesori: string[] = [];
        for(let i = 0; i < this._polozeniPredmeti.length; i++){
            if(this._polozeniPredmeti[i].ocena == 11){
                profesori.push(this._polozeniPredmeti[i].imeProfesora);
            }
        }


        return profesori;
    }

}

function devetkasi(studenti: Student[]): Student[]{
    let studentiSaDevetkama: Student[] = [];
    for(let i = 0; i < studenti.length; i++){
        let count = 0;
        for(let j = 0; j < studenti[i].polozeniPredmeti.length; j++){
            if(studenti[i].polozeniPredmeti[j].ocena == 9){
                count++;
            }
        }
        if(count > 3){
            studentiSaDevetkama.push(studenti[i]);
        }
    }
    return studentiSaDevetkama;
}

window.onload = () => {
    document.getElementById('submit').addEventListener('click', () => {
        let forma: HTMLFormElement = document.getElementsByTagName('form')[0];
        let ime: string = forma.elements['ime'].value;
        let prezime: string = forma.elements['prezime'].value;
        let fakultet: string = forma.elements['fakultet'].value;
        let indeks: string = forma.elements['indeks'].value;
        let predmeti: string = forma.elements['predmeti'].value;

        let s = new Student(ime, prezime, fakultet, indeks);

        let nizStringovaPredmeta: string[] = predmeti.split(';');
        for(let i in nizStringovaPredmeta){
            let stringPredmeta = nizStringovaPredmeta[i];
            let atributiPredmeta = stringPredmeta.split(',');

            let p: Predmet = new Predmet(Number(atributiPredmeta[0]), atributiPredmeta[1], atributiPredmeta[2], Number(atributiPredmeta[3]))
            s.dodajPredmet(p);
        }
        studenti.push(s);

        document.getElementById('tekst').innerHTML = s.predstaviSe();
    });

    document.getElementById('predstavi').addEventListener('click', () => {
        let div = document.getElementById('tekst');
        div.innerHTML = '';
        for(let i in studenti){
            div.innerHTML += studenti[i].predstaviSe() + '<br/>'
        }
    });

    document.getElementById('devetke').addEventListener('click', () => {
        let div = document.getElementById('tekst');
        div.innerHTML = '';
        let devetke = devetkasi(studenti)
        for(let i in devetke){
            div.innerHTML += devetke[i].predstaviSe() + '<br/>'
        }
    });

    document.getElementById('omiljeni').addEventListener('click', () => {
        let div = document.getElementById('tekst');
        div.innerHTML = '';
        for(let i in studenti){
            let omiljeniProfesor: string[] = studenti[i].omiljeniProfesor();
            div.innerHTML += `Ja sam ${studenti[i].ime} i moji omiljeni profesori su ${omiljeniProfesor.join(', ')}`
        }
    });
}


let p1: Predmet = new Predmet(1, 'P1', 'PP1', 9);
let p2: Predmet = new Predmet(2, 'P1', 'PP1', 10);
let p3: Predmet = new Predmet(3, 'P1', 'PP1', 10);

let s1: Student = new Student('Pera', 'Peric', 'FTN', 'RAR-01');

let t1: Predmet = new Predmet(1, 'P1', 'PP1', 9);
let t2: Predmet = new Predmet(2, 'P1', 'PP1', 9);
let t3: Predmet = new Predmet(3, 'P1', 'PP1', 9);

let s2: Student = new Student('Mika', 'Mikic', 'FTN', 'RAR-02');

s1.polozeniPredmeti = [p1, p2, p3];
s2.polozeniPredmeti = [p1, p2, p3, t1, t2, t3];


s1.predstaviSe();
console.log(devetkasi([s1, s2]));

console.log()

// console.log(s1.omiljeniProfesor())