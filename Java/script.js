$(document).ready(function() {
    $(".click").click(function() {
      $(".show").toggle();
      $(".hide").toggle();
    });
  });

  $(document).ready(function() {
    $(".click2").click(function() {
      $(".show2").toggle();
      $(".hide2").toggle();
    });
  });

  $(document).ready(function() {
    $(".click3").click(function() {
      $(".show3").toggle();
      $(".hide3").toggle();
    });
  });

  function display(){

    var name = document.getElementById("fname");

    alert(" we have received your message. Thank you for reaching out to us.");
  }

 