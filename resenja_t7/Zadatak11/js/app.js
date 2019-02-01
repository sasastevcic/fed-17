var Namestaj = /** @class */ (function () {
    function Namestaj(sifra, naziv, jedinicnaCena, kolicinaUMagacinu) {
        this._sifra = sifra;
        this._naziv = naziv;
        this._jedinicnaCena = jedinicnaCena;
        this._kolicinaUMagacinu = kolicinaUMagacinu;
    }
    Object.defineProperty(Namestaj.prototype, "sifra", {
        //Geteri i seteri
        get: function () {
            return this._sifra;
        },
        set: function (value) {
            this._sifra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "jedinicnaCena", {
        get: function () {
            return this._jedinicnaCena;
        },
        set: function (value) {
            this._jedinicnaCena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "kolicinaUMagacinu", {
        get: function () {
            return this._kolicinaUMagacinu;
        },
        set: function (value) {
            this._kolicinaUMagacinu = value;
        },
        enumerable: true,
        configurable: true
    });
    return Namestaj;
}());
var Salon = /** @class */ (function () {
    function Salon(naziv, adresa, telefon) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._telefon = telefon;
        this._namestaj = [];
    }
    Salon.prototype.ispisiNamestajNaStanju = function () {
        this._namestaj.forEach(function (el, i) {
            if (el.kolicinaUMagacinu > 0) {
                console.log((i + 1) + ". " + el.sifra + " " + el.naziv + " " + el.kolicinaUMagacinu + " " + el.jedinicnaCena);
            }
        });
        console.log(" "); //Kako bi imali prazan izmedju dva ispisa
    };
    Salon.prototype.dodajNaLager = function (sifra, kolicina) {
        this._namestaj.forEach(function (el) {
            if (el.sifra == sifra) {
                el.kolicinaUMagacinu += kolicina;
            }
        });
    };
    Salon.prototype.dodajNamestaj = function (namestaj) {
        for (var i = 0; i < this._namestaj.length; i++) {
            if (this._namestaj[i].sifra == namestaj.sifra) {
                console.log("Vec postoji namestaj sa tom siform!");
                console.log("Dodavanje nije uspesno!");
                return;
            }
        }
        this._namestaj.push(namestaj);
    };
    Salon.prototype.prodajKomad = function (sifra, kolicina) {
        for (var i = 0; i < this._namestaj.length; i++) {
            if (this._namestaj[i].sifra == sifra) {
                if (this.namestaj[i].kolicinaUMagacinu < kolicina) {
                    console.log("Prodaja nije uspesna! Nema dovoljno komada namestaja u magacinu!");
                    return;
                }
                else {
                    this._namestaj[i].kolicinaUMagacinu -= kolicina;
                    console.log("Uspesno ste kupili " + kolicina + " namestaja " + this._namestaj[i].naziv + " za " + (kolicina * this._namestaj[i].jedinicnaCena) + "RSD!");
                    return;
                }
            }
        }
        console.log("Ne postoji namestaj sa tom sifrom!");
    };
    Object.defineProperty(Salon.prototype, "naziv", {
        //Geteri i seteri
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "telefon", {
        get: function () {
            return this._telefon;
        },
        set: function (value) {
            this._telefon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "namestaj", {
        get: function () {
            return this._namestaj;
        },
        set: function (value) {
            this._namestaj = value;
        },
        enumerable: true,
        configurable: true
    });
    return Salon;
}());
var n1 = new Namestaj(111, "Ester Komoda", 50386.50, 15);
var n2 = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
var n3 = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
var n4 = new Namestaj(144, "Kloe Klub Sto", 20241, 2);
var s = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaj = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();
s.dodajNaLager(3, 144);
s.ispisiNamestajNaStanju();
var n5 = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);
n5.sifra = 5;
s.dodajNamestaj(n5);
s.prodajKomad(111, 20);
s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
//# sourceMappingURL=app.js.map