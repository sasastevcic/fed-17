var studenti = [];
var Predmet = /** @class */ (function () {
    function Predmet(id, naziv, profesor, ocena) {
        this.id = id;
        this.naziv = naziv;
        this.profesor = profesor;
        this.ocena = ocena;
    }
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, brojIndeksa) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._brojIndeksa = brojIndeksa;
        this._prosecnaOcena = 0;
        this._polozeniPredmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        get: function () {
            return this._fakultet;
        },
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "brojIndeksa", {
        get: function () {
            return this._brojIndeksa;
        },
        set: function (value) {
            this._brojIndeksa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prosecnaOcena", {
        get: function () {
            return this._prosecnaOcena;
        },
        set: function (value) {
            this._prosecnaOcena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeniPredmeti", {
        get: function () {
            return this._polozeniPredmeti;
        },
        set: function (value) {
            this._polozeniPredmeti = value;
            this.izracunajProsecnuOcenu();
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.dodajPredmet = function (predmet) {
        this.polozeniPredmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    };
    Student.prototype.predstaviSe = function () {
        return "Ja sam " + this._ime + " " + this._prezime + ", student " + this._fakultet + "-a sa prosecnom ocenom " + this._prosecnaOcena;
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        var sumaOcena = 0;
        for (var key in this._polozeniPredmeti) {
            sumaOcena += this._polozeniPredmeti[key].ocena;
        }
        this._prosecnaOcena = sumaOcena / this._polozeniPredmeti.length;
    };
    Student.prototype.omiljeniProfesori = function () {
        var retVal = [];
        for (var key in this._polozeniPredmeti) {
            if (this._polozeniPredmeti[key].ocena >= 11) {
                retVal.push(this._polozeniPredmeti[key].profesor);
            }
        }
        return retVal;
    };
    return Student;
}());
function devetke(studenti) {
    var retVal = [];
    for (var key in studenti) {
        var ocenaCounter = 0;
        for (var pkey in studenti[key].polozeniPredmeti) {
            if (studenti[key].polozeniPredmeti[pkey].ocena == 9) {
                ocenaCounter++;
                if (ocenaCounter >= 3) {
                    retVal.push(studenti[key]);
                    break;
                }
            }
        }
    }
    return retVal;
}
function dugmePredstavi() {
    var tekst = document.querySelector("#tekst");
    tekst.innerHTML = "";
    for (var x in studenti) {
        tekst.innerHTML += studenti[x].predstaviSe() + "<br/>";
    }
}
function dugmeDevetke() {
    var tekst = document.querySelector("#tekst");
    tekst.innerHTML = "";
    var s = devetke(studenti);
    for (var x in s) {
        tekst.innerHTML += s[x].predstaviSe() + "<br/>";
        console.log(s[x]);
    }
}
function dugmeOmiljeni() {
    var tekst = document.querySelector("#tekst");
    tekst.innerHTML = "";
    for (var x in studenti) {
        if (studenti[x].omiljeniProfesori().length > 0) {
            tekst.innerHTML += studenti[x].ime + " " + studenti[x].prezime + "ima omiljene profesore: " + studenti[x].omiljeniProfesori().join(", ") + ". <br/>";
        }
    }
}
function dodaj(forma) {
    var ime = forma.elements["ime"].value;
    var prezime = forma.elements["prezime"].value;
    var fakultet = forma.elements["fakultet"].value;
    var indeks = forma.elements["indeks"].value;
    var predmeti = forma.elements["predmeti"].value;
    var noviStudent = new Student(ime, prezime, fakultet, indeks);
    var p = [];
    var s = predmeti.split(";");
    for (var k in s) {
        var pd = s[k].split(",");
        var np = new Predmet(Number(pd[0].trim()), pd[1].trim(), pd[2].trim(), Number(pd[3].trim()));
        p.push(np);
    }
    noviStudent.polozeniPredmeti = p;
    studenti.push(noviStudent);
}
var s1 = new Student("Pera", "Peric", "FTN", "PP-001");
var s1p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 9);
var s1p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s1p3 = new Predmet(3, "Predmet 3", "Predavac Predavacevic", 9);
var s1p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeniPredmeti = [s1p1, s1p2, s1p3, s1p4];
var s2 = new Student("Mika", "Mikic", "FTN", "MM-001");
var s2p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s2p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s2p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeniPredmeti = [s2p1, s2p2, s2p4];
var s3 = new Student("Ana", "Anaic", "FTN", "AA-001");
var s3p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s3p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);
studenti.push(s1, s2, s3);
//# sourceMappingURL=skripta.js.map