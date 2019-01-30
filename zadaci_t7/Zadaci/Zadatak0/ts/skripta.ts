window.onload = function () {
    document.getElementById("forma").addEventListener("submit", function (event) {
        let forma: HTMLFormElement = document.getElementById("forma") as HTMLFormElement;
        let ime: HTMLInputElement = document.getElementById("ime") as HTMLInputElement;
        let prezime: HTMLInputElement = document.getElementById("prezime") as HTMLInputElement;
        let jmbg: HTMLInputElement = document.getElementById("jmbg") as HTMLInputElement;
        let registracija: HTMLInputElement = document.getElementById("registracija") as HTMLInputElement;
        let flag: boolean = true;
        if (ime.value.trim() == "" || ime.value[0] != ime.value[0].toUpperCase()) {
            flag = false;
        }
        if (prezime.value.trim() == "" || prezime.value[0] != prezime.value[0].toUpperCase()) {
            flag = false;
        }
        if (jmbg.value.trim() == "" || jmbg.value.length != 13) {
            flag = false;
        }
        if (registracija.value.trim() == "") {
            flag = false;
        }
        if (!flag) {
            event.preventDefault();
        }
    });
};