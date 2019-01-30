function sendGreeting(greeting: string = "Hello World!"): void {
	document.write("<h1>"+greeting+"<h1>");
}

sendGreeting();

let greeting: string = "Good evening!";

sendGreeting(greeting);