window.onload = function () {
    var calc = new Calculator('X','Y','Output');
};

class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
		//       Selektovati te elemente 
        this.x = document.getElementById(xId) as HTMLInputElement; 
        //TypeAssertion - TypeScript zna da document.getElementById vraca HTMLElement, 
        //ali ne zna koji tacno HTMLElement vraca zbog toga vrsim Type Assertion u HTMLInputElement
        this.y = document.getElementById(yId) as HTMLInputElement;
        this.output = document.getElementById(outputId) as HTMLSpanElement;
		//TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }

    wireEvents() {
      //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
	  //       I implementira njihovu funkcionalnost
      document.getElementById("Add").addEventListener("click", () => {
          //value input polja nam uvek vraca string zbog cega treba da pretvorimo string u number
          let xbr = Number(this.x.value);
          let ybr = Number(this.y.value);
          let suma = this.add(xbr, ybr);
          this.output.innerHTML = suma.toFixed(2);
      });

      document.getElementById("Subtract").addEventListener("click", () => {
          let xbr = Number(this.x.value);
          let ybr = Number(this.y.value);
          let razlika = this.sub(xbr, ybr);
          this.output.innerHTML = razlika.toFixed(2);
      });

      document.getElementById("Multiply").addEventListener("click", () => {
          let xbr = Number(this.x.value);
          let ybr = Number(this.y.value);
          let multi = this.mul(xbr, ybr);
          this.output.innerHTML = multi.toFixed(2);
      });

      document.getElementById("Divide").addEventListener("click", () => {
          let xbr = Number(this.x.value);
          let ybr = Number(this.y.value);
          let raz = this.div(xbr, ybr);
          this.output.innerHTML = raz.toFixed(2);
      });

    }

    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    add(x:number, y:number): number{
        return x + y;
    }

    sub(x:number, y:number): number{
        return x - y;
    }

    mul(x:number, y:number): number{
        return x * y;
    }

    div(x:number, y:number): number{
        return x / y;
    }
}



