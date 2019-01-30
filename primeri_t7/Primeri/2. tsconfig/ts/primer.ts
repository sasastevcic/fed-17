let value: any = 5;

let firstString: string = (<number>value).toFixed(4);
document.write("<h3> 1. Broj: " + firstString + "</h3>");

let secondString: string = (value as number).toFixed(3);
document.write("<h3> 2. Broj: " + secondString + "</h3>");

console.log("mika");