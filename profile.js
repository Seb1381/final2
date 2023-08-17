var cities = {
  "تهران": ["اندیشه", "پردیس", "دماوند", "رباطکریم", "شهریار", "صفادشت", "لواسان", "ملارد", "ورامین"],
  "گیلان": ["رشت", "انزلی", " لاهیجان", "استانه", "تالش", "فومن", "خمام", "زیباکنار"]
};

function update() {

  var ostan = document.getElementById("ostan");
  var shahr = document.getElementById("shahr");
  shahr.innerHTML = "";
  var selected_ostan = ostan.value;
  if (selected_ostan != "") {
    for (var i = 0; i < cities[selected_ostan].length; i++) {

      var option = document.createElement("option");
      
      option.value = cities[selected_ostan][i];
      option.text = cities[selected_ostan][i];
      
      shahr.appendChild(option);
    }
  }
}  

function block() {

  var checkbox = document.getElementById("checkbox");
  var enddate = document.getElementById("enddate");

  if (checkbox.checked == true){
    enddate.setAttribute("disabled", "");

  } else {
    enddate.removeAttribute("disabled");
  }
}




var border = document.getElementById("border")
var box3 =document.getElementById("box3");
let count = 0;
function add(){
  if (count < 3) {
    box3.appendChild(border.cloneNode(true));
    border.style.display = "block";
  }
  count++;
}

// yek chizi inja milange nemidunm chera bad az modati nemishe ye border dige ezafe kard shayad chon border class hame box hast na faghat box3
function remove(element){
  let warning = confirm("آیا از حذف این مورد اطمینان دارید؟");
  if (warning){
    let borders = document.getElementsByClassName("border");
    for (let i = 0; i < borders.length; i++) {
      if (borders[i].contains(element)) {
        borders[i].style.display = "none";
        count--;
        break;
      }
    
    }
  }
}



function select(element){

  var likes = document.getElementsByClassName("like");
  if(element.classList.contains("selected")) {
    element.classList.remove("selected");
}
  else {
  for (let j=0; j < likes.length; j++) {
    if (likes[j].contains(element) ){
      likes[j].classList.add("selected");
    }
  }
}
}



function change(){
  alert("✔  اطلاعات شما با موفقیت تغییر یافت ");
}

function cancel(){
  location.replace("profile.html")
}

// ghalb ha nashod
// function heart(element){
//   if (element.classList.contains('fa-heart-o')) {
//     element.remove('<i class="fa fa-heart"></i>');
//     element.innerHTML = '<i class="fa fa-heart"></i>';

//   } else {
//     element.innerHTML = '<i class="fa fa-heart-o"></i>';
//   }
// }



if (document.body.clientWidth < 300) {
    alert("This is a pop-up box!");
}
