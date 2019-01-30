class RadnikSaKonstruktorom {
    ime: string;
    radnoVremeNedeljno: number;
    ukupnoOdradjenoSatiNedeljno: number;
    osnovica: number;
    koeficijentRada: number;
	
	constructor(ime:string, radnoVremeNedeljno: number, osnovica: number) {
		this.ime = ime;
		this.radnoVremeNedeljno = radnoVremeNedeljno;
        this.osnovica = osnovica;
        this.koeficijentRada = 1;
        this.ukupnoOdradjenoSatiNedeljno = 0;
	}

    povecajOdradjenoSati(sati: number): void { 
		this.ukupnoOdradjenoSatiNedeljno += sati;
	}    
    izracunajPlatu(): number {
        return this.osnovica * this.koeficijentRada;
    }
    preostaloSatiNedeljno(): number { 
        return this.radnoVremeNedeljno - this.ukupnoOdradjenoSatiNedeljno;
     }

}

console.log("---------------Klasa Sa Konstruktorom---------------");
let rs: RadnikSaKonstruktorom = new RadnikSaKonstruktorom("Pera Peric", 40, 600);
rs.povecajOdradjenoSati(20);
console.log(rs.izracunajPlatu());
console.log(rs.preostaloSatiNedeljno());
console.log("----------------------------------------------------");