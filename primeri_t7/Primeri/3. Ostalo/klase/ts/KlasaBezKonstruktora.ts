class RadnikBezKonstruktora {
    ime: string;
    radnoVremeNedeljno: number;
    ukupnoOdradjenoSatiNedeljno: number;
    osnovica: number;
    koeficijentRada: number;

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

console.log("---------------Klasa Bez Konstruktora---------------");
let rb: RadnikBezKonstruktora = new RadnikBezKonstruktora(); //Podrazumevani konstruktor se koristi
/*
//Bez inicijalizacije dobijamo grešku
rb.radnoVremeNedeljno = 40;
rb.osnovica = 600;
rb.koeficijentRada = 1;
rb.ukupnoOdradjenoSatiNedeljno = 0;
*/
rb.povecajOdradjenoSati(20);
console.log(rb.izracunajPlatu());
console.log(rb.preostaloSatiNedeljno());
console.log("----------------------------------------------------");