class Krug {

    private _r:number;

    constructor(r: number){
        this._r = r;
    }

    get r():number{
        return this._r;
    }

    set r(value: number){
        this._r = value;
    }

    public getO():number{
        return 2 * this._r * Math.PI;
    }

    public getP():number{
        return Math.pow(this._r, 2) * Math.PI;
    }
}

class Pravougaonik {
    private _a: number;
    private _b: number;

    constructor(a: number, b:number){
        this._a = a;
        this._b = b;
    }

    get a():number{
        return this._a;
    }

    set a(value: number){
        this._a = value;
    }

    get b():number{
        return this._b;
    }

    set b(value: number){
        this._b = value;
    }

    public getO():number{
        return 2 * this._a + 2 * this._b;
    }

    public getP():number{
        return this._a * this._b
    }
}

class Valjak {
    private _k: Krug;
    private _p: Pravougaonik;

    constructor(r: number, h: number){
        this._k = new Krug(r);
        this._p = new Pravougaonik(2*r, h);
    }

    get r(): number{
        return this._k.r;
    }

    get h(): number{
        return this._p.b;
    }

    getP(): number{
        return 2*this.r*this.r*Math.PI+2*this.r*Math.PI*this.h;
    }

    getV(): number{
        return this.r*this.r*Math.PI*this.h;
    }


}
// let k: Pravougaonik = new Pravougaonik(3, 2);

// console.log(k);
// console.log(k.a);
// console.log(k.getO());
// console.log(k.getP());