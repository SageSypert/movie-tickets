//time of day
//movie release date
//age of viewer

// function Catalogue() {
//   this.films = {};
//   this.currentId = 0;
// }

function Ticket(movieName, selectedTime, age) {
  this.movieName = movieName,
  this.selectedTime = selectedTime,
  this.age = age
  this.ticketPrice = 5;
}





Ticket.prototype.ticketCharge = function() {

}

// movie name, time, cost

$(document).ready(function() {
  $("form#movie-submit").submit(function(event) {
    event.preventDefault();
    let age = $("input#age1").val();
    let time = $("#time").val();
    let movieEra = $("#movie").val();
    let movieTitle = $("#movie option:selected").text();
    console.log(age);
    console.log(time);
    console.log(movieEra);
    console.log(movieTitle);
  });
});

