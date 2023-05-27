$(document).ready(function() {
  $("#name").css("border", "2px solid #333");
  $("label").addClass("form-label");
  $("input[type='submit']").addClass("btn");
  $("select").on("change", function() {
    var selectedTour = $(this).val();
    if (selectedTour !== "") {
      alert("You selected " + selectedTour);
    }
  });
  $("#result").hide(); // Hide the result element initially
  $("#bookingForm").on("submit", function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var tour = $("#tour").val();
    var quantity = $("#quantity").val();

    if (name === "" || email === "" || tour === "" || quantity === "") {
      alert("Please fill in all fields.");
    } else {
      var result = $("#result");
      result.html("Thank you, " + name + "! Your booking for " + quantity + " tickets for tour " + tour + " has been confirmed.");
      result.show();
    }
  });
});


