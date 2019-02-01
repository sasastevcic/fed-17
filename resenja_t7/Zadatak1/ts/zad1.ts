function spajaIme(ime: string, prezime: string, pol: string, nekaFunkcija: (x: string, y: string)=>void){
    var punoIme = ime + " " + prezime;
    if(typeof nekaFunkcija === "function"){
        nekaFunkcija(punoIme, pol);
    }
}

function formalGreet(ime: string, p: string) {
    if(p == "Man"){
        console.log("Hello, Mr. " + ime);
    }else if(p == "Woman"){
        console.log("Hello, Ms. " + ime);
    }
}

spajaIme("John", "Smith", "Man", formalGreet);


spajaIme("Mary", "Jane", "Woman", function(i:string): void {
    console.log("Hello " + i);
});