//Primer statickog polja, voditi evidenciju ukupnog
//broja instanciranih objekta

class Automobil {
    static brojProizvedenih: number = 0;

    private _boja: string;
    private _tablice: string;
    private _brzina: number;

    constructor(boja: string, tablice: string){
        this._boja = boja;
        this._tablice = tablice;
        this._brzina = 0;
        Automobil.brojProizvedenih += 1;
    }

    public ubrzaj(delta: number): void {
        this._brzina += delta;
    }

    public uspori(delta: number): void {
        this._brzina -= delta;
    }

    get brzina(): number {
        return this._brzina;
    }

}

let a1: Automobil = new Automobil("111", "1111");
let a2: Automobil = new Automobil("222", "2222");
let a3: Automobil = new Automobil("333", "3333");

console.log(Automobil.brojProizvedenih); //3
