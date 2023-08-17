// countdown for ad

var l = 5;
seconds.innerHTML = l;
const secondinterval = setInterval(function() {
  const seconds = document.getElementById("seconds");
  seconds.innerHTML = l;

  l--;

  if (l < 0) {
    clearInterval(secondinterval);
    seconds.innerHTML = "59";
    k--;
    minutes.innerHTML = k;
  }
}, 1000);

var k = 32;
minutes.innerHTML = k;
const minuteinterval = setInterval(function() {
  const minutes = document.getElementById("minutes");
  minutes.innerHTML = k;

  k--;

  if (k < 0) {
    clearInterval(minuteinterval);
    minutes.innerHTML = "59";
    j--;
    hours.innerHTML = j;
  }
}, 60000);

var j = 19;
hours.innerHTML = j;
const hourinterval = setInterval(function() {
  const hours = document.getElementById("hours");
  hours.innerHTML = j;

  j--;

  if (j < 0) {
    clearInterval(hourinterval);
    hours.innerHTML = "24";
  }
}, 3600000);


var i = 1;
days.innerHTML = i;
const dayinterval = setInterval(function() {
  const days = document.getElementById("days");
  days.innerHTML = i;

  i--;

  if (i < 0) {
    clearInterval(dayinterval);
    days.innerHTML = "0";
  }
}, 86400000);


function closeHeader() {
  let header = document.getElementById("header");
  let navbar = document.getElementById("navbar");
  let hero = document.getElementById("hero");
  let list = document.getElementById("list");
  navbar.style.marginTop="0";
  hero.style.marginTop="0";
  header.style.display = "none";
  navbar.style.position = "sticky";
  navbar.style.top = "0";
  list.style.top="60px";

}

//bye header
var header = document.getElementById("header");
var navbar = document.getElementById("navbar");
var hero = document.getElementById("hero");
var list = document.getElementById("list");
var hideHeader = header.offsetHeight;
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= hideHeader) {
    header.style.top = "-20vh";
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    list.style.top="60px";
  } 
  else if (window.pageYOffset < hideHeader ) {
    navbar.style.position = "fixed";
    header.style.top = "0";
    header.style.position = "sticky";
    hero.style.marginTop="5vh";
    list.style.top="150px";
  } 

});


//slide show buttons 
function change1(){
var cards = document.getElementsByClassName("box1");
var name = document.getElementsByClassName("top");
    for (var i=0; i< cards.length; i++){
      for(var j=0; j< name.length; j++){

        cards[i].style.backgroundColor="plum";
        name[j].innerHTML="<h3>"+ "free" +"</h3>";
      }
    }
}
function change2(){
var cards = document.getElementsByClassName("box1");
var name = document.getElementsByClassName("top");
  for (var i=0; i< cards.length; i++){
    for(var j=0; j< name.length; j++){

      cards[i].style.backgroundColor="yellowgreen";
      name[j].innerHTML="<h3>"+ "new" +"</h3>";
    }
  }
}
function change3(){
  var cards = document.getElementsByClassName("box1");
  var name = document.getElementsByClassName("top");
    for (var i=0; i< cards.length; i++){
      for(var j=0; j< name.length; j++){
  
        cards[i].style.backgroundColor="pink";
        name[j].innerHTML="<h3>"+ "on sale" +"</h3>";
      }
    }
}
function change4(){
var cards = document.getElementsByClassName("box1");
var name = document.getElementsByClassName("top");
    for (var i=0; i< cards.length; i++){
      for(var j=0; j< name.length; j++){
  
        cards[i].style.backgroundColor="grey";
        name[j].innerHTML="<h3>"+ "popular" +"</h3>";
      }
    }
}
function change5(){
var cards = document.getElementsByClassName("box1");
var name = document.getElementsByClassName("top");
      for (var i=0; i< cards.length; i++){
        for(var j=0; j< name.length; j++){
    
          cards[i].style.backgroundColor="orange";
          name[j].innerHTML="<h3>"+ "trending" +"</h3>";
        }
      }
}





function search(){
    var data = [
        {
          name: "Lion",
          type: "Mammal",
          habitat: "Savanna"
        },
        {
          name: "Shark",
          type: "Fish",
          habitat: "Ocean"
        },
        {
          name: "Parrot",
          type: "Bird",
          habitat: "Rainforest"
        }
      ];
        let input = document.getElementById('searchbar').value
        input=input.toLowerCase();
        let elements = document.getElementsByClassName('animals');
        for (i = 0; i < elements.length; i++) { 
        if (data[i].name.toLowerCase().includes(input) ||
            data[i].type.toLowerCase().includes(input) ||
            data[i].habitat.toLowerCase().includes(input)) { 
            elements[i].style.display="item"; 
            if (data[i].name.toLowerCase().includes(input)) { 
              elements[i].innerHTML = `
                <p>${data[i].name}</p>
              `; 
            } else if (data[i].type.toLowerCase().includes(input)) { 
              elements[i].innerHTML = `
                <p>${data[i].type}</p>
              `; 
            } else if (data[i].habitat.toLowerCase().includes(input)) { 
              elements[i].innerHTML = `
                <p>${data[i].habitat}</p>
              `; 
            }
        }
        else {
            elements[i].style.display="none";             
        }

    }
}


// function close(){
//     let close = Document.getElementById('list');
//     close.innerHTML.style.display="none"
// }




      










if (document.body.clientWidth < 300) {
    alert("not for screens less than 300px!");
  }
  



