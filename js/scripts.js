
function Ticket(selectedTime, age, releaseDate) {
  this.selectedTime = selectedTime,
  this.age = age
  this.releaseDate = releaseDate;
  this.ticketPrice = 5;
}

Ticket.prototype.ticketCharge = function() {
  if (this.age <= 10 || this.age >= 62) {
    this.ticketPrice;
  } else {
    this.ticketPrice += 3;
  }
  if (this.selectedTime >= 17) {
    this.ticketPrice += 2;
  } else {
    this.ticketPrice;
  }
  if (this.releaseDate > 2005) {
    this.ticketPrice += 2;
  } else {
    this.ticketPrice;
  }
  return this.ticketPrice;
}

$(document).ready(function() {
  $("form#movie-submit").submit(function(event) {
    event.preventDefault();
    let age = $("input#age1").val();
    let time = parseInt($("#time").val());
    let releaseDate = parseInt($("#movie").val());
    let movieTitle = $("#movie option:selected").text();
    
    let newTicket = new Ticket(time, age, releaseDate);
    // console.log(newTicket);
    newTicket.ticketCharge()
    // console.log(newTicket.ticketPrice);
    $("#answer").text(`We have you booked for ${movieTitle} at ${time}:00, and the ticket price is ${newTicket.ticketPrice} dollars!`)
  });
});

// console.log(age);
// console.log(time);
// console.log(movieEra);
// console.log(movieTitle);


