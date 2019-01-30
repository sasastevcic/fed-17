function sendGreeting(greeting) {
    if (greeting === void 0) { greeting = "Hello World!"; }
    document.write("<h1>" + greeting + "<h1>");
}
sendGreeting();
var greeting = "Good evening!";
sendGreeting(greeting);
