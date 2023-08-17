// function focus()
// {
//     var fd = document.getElementById('fd');
//     var pw = document.getElementById('password');
//     fd.style.border= "white"
// }

function valid() {
    let num = document.getElementById("tel").value;
    let user = document.getElementById("username").value;
    let mail = document.getElementById("email").value;
    let p1 = document.getElementById("password1").value;
    let p2 = document.getElementById("password2").value;
    let check = document.getElementById("check");
    let pop = document.getElementById("popup");
    var hasNumber = /\d/;
    var hasSymbol = /[^a-zA-Z0-9]/;
  
    let errors = [];
  
    if (num.length != 10) {
      errors.push("لطفا شماره همراه خود را با 10 رقم وارد کنید");
    }
  
    if (user.length < 6) {
      errors.push("لطفا نام کاربری خود را با حداقل 6 حرف وارد کنید");
    }
  
    if (p1 != p2) {
      errors.push("لطفا رمز عبور خود را با مطابقت وارد کنید");
    }
  
    if (p1.length < 8) {
      errors.push("لطفا رمز عبور خود را با حداقل 8 حرف وارد کنید");
    }
  
    if (!hasNumber.test(p1)) {
      errors.push("لطفا رمز عبور خود را با حداقل یک عدد وارد کنید");
    }
  
    if (!hasSymbol.test(p1)) {
      errors.push("لطفا رمز عبور خود را با حداقل یک علامت مخصوص وارد کنید");
    }

    if (errors.length == 0) {
      pop.style.visibility = "visible";
      check.innerHTML =
       "<p>"+ num + "</p>" + "<p>"+ user + "</p>" +"<p>"+ mail + "</p>" + "<p>"+ p1+ "</p>" ;
      return true;

      } else {

        let message = errors.join("\n");

        let choice = confirm(message);

        if (choice) {
          location.reload("signin.html");
        }

        return false;
      }
  }
  
  

function back() {
    location.reload('signin.html');
  };

  
function welcome() {
    location.replace('final/website.html');
    alert("Welcome to Behdars! :)")
  };



  











if (document.body.clientWidth < 300) {
    alert("This is a pop-up box!");
  }