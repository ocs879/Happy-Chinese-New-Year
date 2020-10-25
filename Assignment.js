function sendtowhatsapp(){
    var r = confirm("We are leaving this site. Press OK to proceed.");
    if (r == true) {
      window.open("http://wa.me/?text=https://ocs879.github.io/CNY_Greet.html");
    } else {
      window.close("http://wa.me/?text=https://ocs879.github.io/CNY_Greet.html");
    }
}
