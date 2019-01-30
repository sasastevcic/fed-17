var Krug = /** @class */ (function () {
    function Krug(r) {
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
        return Math.pow(this._r, 2) * Math.PI;
    };
    return Krug;
}());
var Pravougaonik = /** @class */ (function () {
    function Pravougaonik(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Pravougaonik.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pravougaonik.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
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
var Valjak = /** @class */ (function () {
    function Valjak(r, h) {
        this._k = new Krug(r);
        this._p = new Pravougaonik(2 * r, h);
    }
    Object.defineProperty(Valjak.prototype, "r", {
        get: function () {
            return this._k.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "h", {
        get: function () {
            return this._p.b;
        },
        enumerable: true,
        configurable: true
    });
    Valjak.prototype.getP = function () {
        return 2 * this.r * this.r * Math.PI + 2 * this.r * Math.PI * this.h;
    };
    Valjak.prototype.getV = function () {
        return this.r * this.r * Math.PI * this.h;
    };
    return Valjak;
}());
// let k: Pravougaonik = new Pravougaonik(3, 2);
// console.log(k);
// console.log(k.a);
// console.log(k.getO());
// console.log(k.getP());
//# sourceMappingURL=script.js.map