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
        this.y = document.getElementById(yId) as HTMLInputElement;
        this.output = document.getElementById(outputId) as HTMLSpanElement;
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }

    wireEvents() {
      //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
      //       I implementira njihovu funkcionalnost
      document.getElementById("Add").addEventListener("click", () => {
          let a: number = Number(this.x.value);
          let b: number = Number(this.y.value);
          let rez: number = this.add(a, b);
          this.output.innerHTML = rez.toFixed(2);
      });

      document.getElementById("Subtract").addEventListener("click", () => {
        let a: number = Number(this.x.value);
        let b: number = Number(this.y.value);
        let rez: number = this.sub(a, b);
        this.output.innerHTML = rez.toFixed(2);
    });

    document.getElementById("Mul").addEventListener("click", () => {
        let a: number = Number(this.x.value);
        let b: number = Number(this.y.value);
        let rez: number = this.mul(a, b);
        this.output.innerHTML = rez.toFixed(2);
    });

    document.getElementById("Div").addEventListener("click", () => {
        let a: number = Number(this.x.value);
        let b: number = Number(this.y.value);
        let rez: number = this.div(a, b);
        this.output.innerHTML = rez.toFixed(2);
    });

    }

    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    add(a: number, b: number): number {
        return a + b;
    }

    sub(a: number, b: number): number {
        return a - b;
    }

    mul(a: number, b: number): number {
        return a * b;
    }

    div(a: number, b: number): number {
        return a / b;
    }
}



