function spajaIme(ime, prezime, pol, nekaFunkcija) {
    var punoIme = ime + " " + prezime;
    if (typeof nekaFunkcija === "function") {
        nekaFunkcija(punoIme, pol);
    }
}
function formalGreet(ime, p) {
    if (p == "Man") {
        console.log("Hello, Mr. " + ime);
    }
    else if (p == "Woman") {
        console.log("Hello, Ms. " + ime);
    }
}
spajaIme("John", "Smith", "Man", formalGreet);
spajaIme("Mary", "Jane", "Woman", function (i) {
    console.log("Hello " + i);
});
//# sourceMappingURL=zad1.js.map