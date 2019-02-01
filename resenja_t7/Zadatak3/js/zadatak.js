/*Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga.
U klasi Krug implementirti
    - konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
    - get metodu R
    - metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
    - metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)
    */
var Krug = /** @class */ (function () {
    function Krug(r) {
        if (r === void 0) { r = 3; }
        this._r = r;
    }
    Object.defineProperty(Krug.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this._r = value;
        },
        enumerable: true,
        configurable: true
    });
    Krug.prototype.getO = function () {
        return 2 * this._r * Math.PI;
    };
    Krug.prototype.getP = function () {
        return this._r * this._r * Math.PI;
    };
    return Krug;
}());
/*
Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika.
U klasi Pravougaonik implementirati:
    - konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
    - get metod A
    - get metod B
    - metod getO (Obima pravugaonika se racuna po formuli O = 2*a + 2*b)
    - metod getP (Povrsina pravougaonika se racuna po formuli P = a*b)
*/
var Pravougaonik = /** @class */ (function () {
    function Pravougaonik(a, b) {
        if (a === void 0) { a = 2; }
        if (b === void 0) { b = 3; }
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Pravougaonik.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (v) {
            this._a = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pravougaonik.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (v) {
            this._b = v;
        },
        enumerable: true,
        configurable: true
    });
    Pravougaonik.prototype.getO = function () {
        return 2 * this._a + 2 * this._b;
    };
    Pravougaonik.prototype.getP = function () {
        return this._a * this._b;
    };
    return Pravougaonik;
}());
/*Napisati klasu Valjak koja opisuje geometrijsku figuru valjak.
Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija)
U klasa Valjak implementirati:
    - konstruktor sa parametrima
    - get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
    - get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
    - metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
    - metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)/*
    */
var Valjak = /** @class */ (function () {
    function Valjak(r, h) {
        this._krug = new Krug(r);
        this._pravouganoik = new Pravougaonik(2 * r, h);
    }
    Object.defineProperty(Valjak.prototype, "r", {
        get: function () {
            return this._krug.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "h", {
        get: function () {
            return this._pravouganoik.b;
        },
        enumerable: true,
        configurable: true
    });
    Valjak.prototype.getP = function () {
        return 2 * this.r * this.r * Math.PI + 2 * this.r * Math.PI * this.h;
    };
    Valjak.prototype.getV = function () {
        return this.r * this.r * this.h * Math.PI;
    };
    return Valjak;
}());
//Testiranje
var k1 = new Krug(4);
console.log("k1.r: " + k1.r + ", k1.getO: " + k1.getO() + ", k1.getP " + k1.getP() + " ");
var p1 = new Pravougaonik(5);
console.log("p1.a: " + p1.a + ", p1.b: " + p1.b + ", p1.getO: " + p1.getO() + ", p1.getP " + p1.getP() + " ");
var v = new Valjak(3, 5);
console.log("v.r " + v.r + ", v.h " + v.h + ", v.getP " + v.getP() + ", v.getV " + v.getV());
//# sourceMappingURL=zadatak.js.map