/*Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga.
U klasi Krug implementirti
	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
	- get metodu R
	- metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
    - metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)
    */

class Krug {
    private _r: number;

    constructor(r: number = 3){
        this._r = r;
    }

    public get r(): number {
        return this._r;
    }

    public set r(value: number) {
        this._r = value;
    }

    public getO(): number {
        return 2 * this._r * Math.PI;
    }

    public getP(): number {
        return this._r * this._r * Math.PI;
    }

}

/*
Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika.
U klasi Pravougaonik implementirati:
	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
	- get metod A
	- get metod B
	- metod getO (Obima pravugaonika se racuna po formuli O = 2*a + 2*b)
	- metod getP (Povrsina pravougaonika se racuna po formuli P = a*b)
*/

class Pravougaonik {
    private _a: number;
    private _b: number;

    constructor(a: number = 2, b: number = 3){
        this._a = a;
        this._b = b;
    }

    public get a(): number {
        return this._a;
    }

    public set a(v: number) {
        this._a = v;
    }

    public get b(): number {
        return this._b;
    }

    public set b(v: number) {
        this._b = v;
    }

    public getO(): number {
        return 2*this._a + 2*this._b;
    }

    public getP(): number {
        return this._a * this._b;
    }
}

/*Napisati klasu Valjak koja opisuje geometrijsku figuru valjak.
Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija)
U klasa Valjak implementirati:
	- konstruktor sa parametrima
	- get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
	- get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
	- metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
    - metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)/*
    */

class Valjak {
    private _krug: Krug;
    private _pravouganoik: Pravougaonik;

    constructor(r: number, h: number){
        this._krug = new Krug(r);
        this._pravouganoik = new Pravougaonik(2*r, h);
    }

    get r(): number {
        return this._krug.r;
    }

    get h(): number {
        return this._pravouganoik.b;
    }

    getP(): number {
        return 2*this.r*this.r*Math.PI+2*this.r*Math.PI*this.h;
    }

    getV(): number {
        return this.r * this.r * this.h * Math.PI;
    }


}

//Testiranje
let k1: Krug = new Krug(4);
console.log(`k1.r: ${k1.r}, k1.getO: ${k1.getO()}, k1.getP ${k1.getP()} `);

let p1: Pravougaonik = new Pravougaonik(5);
console.log(`p1.a: ${p1.a}, p1.b: ${p1.b}, p1.getO: ${p1.getO()}, p1.getP ${p1.getP()} `);

let v: Valjak = new Valjak(3, 5);
console.log(`v.r ${v.r}, v.h ${v.h}, v.getP ${v.getP()}, v.getV ${v.getV()}`);

