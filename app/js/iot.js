$(document).ready(function(){
  	  $( "#downloadIot" ).click(function() {
  		$( ".download-iot" ).show();
	});	
    $( "#close-img-iot" ).click(function() {
  		$( ".download-iot" ).hide();
	});
    $( "#btn-close-iot" ).click(function() {
  		$( ".download-iot" ).hide();
	});	
    
  $("#form").submit(function(){
    var data = {};
    data = $(this).serialize() + "&" + $.param(data);
    $.ajax({
    type: "POST",
    dataType: "json",
    url: "ajaxsubmit.php", 
    data: data,
    success: function(data) {
      $(".the-return").html(
      "first name: " + data["fname"] + "<br />last name: " + data["lname"] + "<br />email: " + data["email"]
      );
      alert("Form data stored successfully.\n json: " + data["json"]);
          },
    });
    return false;
  });  				
});