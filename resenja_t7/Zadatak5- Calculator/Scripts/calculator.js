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
            var xbr = Number(_this.x.value);
            var ybr = Number(_this.y.value);
            var suma = _this.add(xbr, ybr);
            _this.output.innerHTML = suma.toFixed(2);
        });
        document.getElementById("Subtract").addEventListener("click", function () {
            var xbr = Number(_this.x.value);
            var ybr = Number(_this.y.value);
            var razlika = _this.sub(xbr, ybr);
            _this.output.innerHTML = razlika.toFixed(2);
        });
        document.getElementById("Multiply").addEventListener("click", function () {
            var xbr = Number(_this.x.value);
            var ybr = Number(_this.y.value);
            var multi = _this.mul(xbr, ybr);
            _this.output.innerHTML = multi.toFixed(2);
        });
        document.getElementById("Divide").addEventListener("click", function () {
            var xbr = Number(_this.x.value);
            var ybr = Number(_this.y.value);
            var raz = _this.div(xbr, ybr);
            _this.output.innerHTML = raz.toFixed(2);
        });
    };
    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.mul = function (x, y) {
        return x * y;
    };
    Calculator.prototype.div = function (x, y) {
        return x / y;
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map