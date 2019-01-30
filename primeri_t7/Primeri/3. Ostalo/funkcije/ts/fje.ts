function add(x: number, y:number): number {
	return x + y;
}

let pomnozi = function(x: number, y: number): number {
	return x * y; 
}

let funk: (p1: number, p2: number) => number;

funk = add;
document.write("<h2> Add: " + funk(5,10) + "</h2>");

funk = pomnozi;
document.write("<h2> Multiply: " + funk(5,10) + "</h2>");


//Spread operator:
function foo(...x: number[]): void {
	let y = x.reduce((prev,next) => prev + next);
	document.write("<h2> Sum: " + y + "</h2>");
}

foo(1, 2, 3, 4, 5, 6, 7, 8);