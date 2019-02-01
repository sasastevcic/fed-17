/*
//Zadatak 6
Napraviti klasu Robot, robot ima atribut ime, i metode pozdrav i reset.
Pre pravljenja Robota, potrebno im je izabrati ime. Ime robota treba da bude
u formatu dva velika slova pa tri cifre: AF897, EO001 ... Imena robota treba
nasumicno odrediti, pri cemu nije dozvoljeno da postoje dva robota sa istim imenom.
Metoda pozdrav ispisuje "Zdravo ja sam robot: imeRobota". Metoda reset brise resetuje
njegovo ime.
*/
var roboti = [];
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.pozdrav = function () {
        document.write("Zdravo ja sam robot: " + this.ime + "<br/>");
    };
    Robot.prototype.reset = function () {
        this.ime = "";
    };
    return Robot;
}());
function izaberiIme() {
    var slova = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
    var redukovaniNiz;
    var ime = "";
    do {
        var prviIndeks = Math.floor(Math.random() * slova.length);
        var drugiIndeks = Math.floor(Math.random() * slova.length);
        var s1 = slova.charAt(prviIndeks);
        var s2 = slova.charAt(drugiIndeks);
        var cifre = Math.floor(Math.random() * 1000);
        if (cifre < 100)
            cifre += 100;
        ime = s1 + s2 + cifre;
        redukovaniNiz = roboti.filter(function (elem) { return elem.ime == ime; });
    } while (redukovaniNiz.length != 0);
    return ime;
}
for (var i = 0; i < 10000; i++) {
    var robot = new Robot();
    robot.ime = izaberiIme();
    roboti.push(robot);
    robot.pozdrav();
}
//# sourceMappingURL=app.js.map