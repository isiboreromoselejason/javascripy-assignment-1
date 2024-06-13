window.onload = function () {
    "use strict";
    var form = document.forms.form
    function handleSubmit(event) {
          var username = document.querySelector(".login__txtbox__username").value;
          var password = document.querySelector(".login__txtbox__password").value;
          var result = checkLogin(username, password);
          var output = document.getElementById("output");
          if (result === true) {
            output.innerHTML = "Welcome back!";
        } else {
            output.innerHTML = result;
        }
        output.style.display = "block";

        event.preventDefault();
    }
    form.addEventListener("submit", handleSubmit);
  };