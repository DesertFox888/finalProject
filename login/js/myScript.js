$(function(){
  //variables for make change between register and login
  var register = $("#rgstr");
  var element = "<div class=\"form-group\"><label for=\"password\">Password Confirmation</label><input type=\"password\" class=\"form-control\" id=\"Password1\" placeholder=\"Password Confirmation\"></div>";
  var newLink = "<p class=\"text-center\"><a href=\"index.html\" class=\"btn btn-default\">LogIn</a></p>";



  register.on('click', function(){
  $(this).replaceWith(newLink);
  $("form div:nth-child(3)").after($(element));
  });
});
