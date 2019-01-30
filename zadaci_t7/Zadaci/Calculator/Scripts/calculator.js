window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
};
var Calculator = /** @class */ (function () {
    function Calculator(xId, yId, outputId) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
        //       I implementira njihovu funkcionalnost
        document.getElementById("Add").addEventListener("click", function () {
            var a = Number(_this.x.value);
            var b = Number(_this.y.value);
            var rez = _this.add(a, b);
            _this.output.innerHTML = rez.toFixed(2);
        });
        document.getElementById("Subtract").addEventListener("click", function () {
            var a = Number(_this.x.value);
            var b = Number(_this.y.value);
            var rez = _this.sub(a, b);
            _this.output.innerHTML = rez.toFixed(2);
        });
        document.getElementById("Mul").addEventListener("click", function () {
            var a = Number(_this.x.value);
            var b = Number(_this.y.value);
            var rez = _this.mul(a, b);
            _this.output.innerHTML = rez.toFixed(2);
        });
        document.getElementById("Div").addEventListener("click", function () {
            var a = Number(_this.x.value);
            var b = Number(_this.y.value);
            var rez = _this.div(a, b);
            _this.output.innerHTML = rez.toFixed(2);
        });
    };
    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.mul = function (a, b) {
        return a * b;
    };
    Calculator.prototype.div = function (a, b) {
        return a / b;
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map