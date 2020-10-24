function sendtowhatsapp(){
    var r = confirm("We are leaving this site. Press OK to proceed.");
    if (r == true) {
      window.open("http://wa.me/?text=https://ocs879.github.io/Assignment_Page1.html");
    } else {
      window.close("http://wa.me/?text=https://ocs879.github.io/Assignment_Page1.html");
    }
}
