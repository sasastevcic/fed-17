class Radnik {
    private _ime: string;
    private _radnoVremeNedeljno: number;
    private _ukupnoOdradjenoSatiNedeljno: number;
    private _osnovica: number;
    private _koeficijentRada: number;
	
	constructor(ime:string, radnoVremeNedeljno: number, osnovica: number) {
		this._ime = ime;
		this._radnoVremeNedeljno = radnoVremeNedeljno;
        this._osnovica = osnovica;
        this._koeficijentRada = 1;
        this._ukupnoOdradjenoSatiNedeljno = 0;
	}

    povecajOdradjenoSati(sati: number): void { 
		this._ukupnoOdradjenoSatiNedeljno += sati;
	}    
    izracunajPlatu(): number {
        return this._osnovica * this._koeficijentRada;
    }
    preostaloSatiNedeljno(): number { 
        return this._radnoVremeNedeljno - this._ukupnoOdradjenoSatiNedeljno;
     }

}

let r: Radnik = new Radnik("Pera Peric", 40, 600);
console.log(r.izracunajPlatu());

//console.log(r._ime); // error

