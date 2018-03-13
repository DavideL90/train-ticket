var kilometers = prompt("Inserire i km da percorrere");
var age = prompt("Inserire l'età");
var ticketPrice = kilometers * 0.21;
if(age < 18){
  ticketPrice = (ticketPrice * 80) / 100;
}
else if (age > 65) {
  ticketPrice = (ticketPrice * 60) / 100;
}
document.writeln("Il prezzo del biglietto è: " + ticketPrice + "€");
