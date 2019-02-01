var studenti = [];
var Predmet = /** @class */ (function () {
    function Predmet(id, nazivPredmeta, imeProfesora, ocena) {
        this._id = id;
        this._nazivPredmeta = nazivPredmeta;
        this._imeProfesora = imeProfesora;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "id", {
        /**
         * Getter id
         * @return {number}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {number} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "nazivPredmeta", {
        /**
         * Getter nazivPredmeta
         * @return {string}
         */
        get: function () {
            return this._nazivPredmeta;
        },
        /**
         * Setter nazivPredmeta
         * @param {string} value
         */
        set: function (value) {
            this._nazivPredmeta = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "imeProfesora", {
        /**
         * Getter imeProfesora
         * @return {string}
         */
        get: function () {
            return this._imeProfesora;
        },
        /**
         * Setter imeProfesora
         * @param {string} value
         */
        set: function (value) {
            this._imeProfesora = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        /**
         * Getter ocena
         * @return {number}
         */
        get: function () {
            return this._ocena;
        },
        /**
         * Setter ocena
         * @param {number} value
         */
        set: function (value) {
            this._ocena = value;
        },
        enumerable: true,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, broj_indeksa) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._broj_indeksa = broj_indeksa;
        this._polozeniPredmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        /**
         * Getter ime
         * @return {string}
         */
        get: function () {
            return this._ime;
        },
        /**
         * Setter ime
         * @param {string} value
         */
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        /**
         * Getter prezime
         * @return {string}
         */
        get: function () {
            return this._prezime;
        },
        /**
         * Setter prezime
         * @param {string} value
         */
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        /**
         * Getter fakultet
         * @return {string}
         */
        get: function () {
            return this._fakultet;
        },
        /**
         * Setter fakultet
         * @param {string} value
         */
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "broj_indeksa", {
        /**
         * Getter broj_indeksa
         * @return {string}
         */
        get: function () {
            return this._broj_indeksa;
        },
        /**
         * Setter broj_indeksa
         * @param {string} value
         */
        set: function (value) {
            this._broj_indeksa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeniPredmeti", {
        /**
         * Getter polozeniPredmeti
         * @return {Predmet[]}
         */
        get: function () {
            return this._polozeniPredmeti;
        },
        /**
         * Setter polozeniPredmeti
         * @param {Predmet[]} value
         */
        set: function (value) {
            this._polozeniPredmeti = value;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.dodajPredmet = function (p) {
        this._polozeniPredmeti.push(p);
    };
    Student.prototype.predstaviSe = function () {
        var i = "Ja sam " + this._ime + " " + this._prezime + " i studiram na " + this.fakultet + ", sa prosecnom ocenom " + this.izracunajProsecnuOcenu().toFixed(2);
        return i;
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        var suma = 0;
        for (var i in this._polozeniPredmeti) {
            suma += this._polozeniPredmeti[i].ocena;
        }
        var avg = suma / this._polozeniPredmeti.length;
        return avg;
    };
    Student.prototype.omiljeniProfesor = function () {
        var profesori = [];
        for (var i = 0; i < this._polozeniPredmeti.length; i++) {
            if (this._polozeniPredmeti[i].ocena == 11) {
                profesori.push(this._polozeniPredmeti[i].imeProfesora);
            }
        }
        return profesori;
    };
    return Student;
}());
function devetkasi(studenti) {
    var studentiSaDevetkama = [];
    for (var i = 0; i < studenti.length; i++) {
        var count = 0;
        for (var j = 0; j < studenti[i].polozeniPredmeti.length; j++) {
            if (studenti[i].polozeniPredmeti[j].ocena == 9) {
                count++;
            }
        }
        if (count > 3) {
            studentiSaDevetkama.push(studenti[i]);
        }
    }
    return studentiSaDevetkama;
}
window.onload = function () {
    document.getElementById('submit').addEventListener('click', function () {
        var forma = document.getElementsByTagName('form')[0];
        var ime = forma.elements['ime'].value;
        var prezime = forma.elements['prezime'].value;
        var fakultet = forma.elements['fakultet'].value;
        var indeks = forma.elements['indeks'].value;
        var predmeti = forma.elements['predmeti'].value;
        var s = new Student(ime, prezime, fakultet, indeks);
        var nizStringovaPredmeta = predmeti.split(';');
        for (var i in nizStringovaPredmeta) {
            var stringPredmeta = nizStringovaPredmeta[i];
            var atributiPredmeta = stringPredmeta.split(',');
            var p = new Predmet(Number(atributiPredmeta[0]), atributiPredmeta[1], atributiPredmeta[2], Number(atributiPredmeta[3]));
            s.dodajPredmet(p);
        }
        studenti.push(s);
        document.getElementById('tekst').innerHTML = s.predstaviSe();
    });
    document.getElementById('predstavi').addEventListener('click', function () {
        var div = document.getElementById('tekst');
        div.innerHTML = '';
        for (var i in studenti) {
            div.innerHTML += studenti[i].predstaviSe() + '<br/>';
        }
    });
    document.getElementById('devetke').addEventListener('click', function () {
        var div = document.getElementById('tekst');
        div.innerHTML = '';
        var devetke = devetkasi(studenti);
        for (var i in devetke) {
            div.innerHTML += devetke[i].predstaviSe() + '<br/>';
        }
    });
    document.getElementById('omiljeni').addEventListener('click', function () {
        var div = document.getElementById('tekst');
        div.innerHTML = '';
        for (var i in studenti) {
            var omiljeniProfesor = studenti[i].omiljeniProfesor();
            div.innerHTML += "Ja sam " + studenti[i].ime + " i moji omiljeni profesori su " + omiljeniProfesor.join(', ');
        }
    });
};
var p1 = new Predmet(1, 'P1', 'PP1', 9);
var p2 = new Predmet(2, 'P1', 'PP1', 10);
var p3 = new Predmet(3, 'P1', 'PP1', 10);
var s1 = new Student('Pera', 'Peric', 'FTN', 'RAR-01');
var t1 = new Predmet(1, 'P1', 'PP1', 9);
var t2 = new Predmet(2, 'P1', 'PP1', 9);
var t3 = new Predmet(3, 'P1', 'PP1', 9);
var s2 = new Student('Mika', 'Mikic', 'FTN', 'RAR-02');
s1.polozeniPredmeti = [p1, p2, p3];
s2.polozeniPredmeti = [p1, p2, p3, t1, t2, t3];
s1.predstaviSe();
console.log(devetkasi([s1, s2]));
console.log();
// console.log(s1.omiljeniProfesor())
//# sourceMappingURL=skripta.js.map