// {
//   // countdown for sales ad
// let l = 10;
// seconds.innerHTML = l;
// const secondinterval = setInterval(function() {
//   const seconds = document.getElementById("SEC");
//   seconds.innerHTML = l;

//   l--;

//   if (l < 0) {
//     clearInterval(secondinterval);
//     seconds.innerHTML = "59";
//     k--;
//     minutes.innerHTML = k;
//   }
// }, 1000);

// let k = 32;
// minutes.innerHTML = k;
// const minuteinterval = setInterval(function() {
//   const minutes = document.getElementById("MIN");
//   minutes.innerHTML = k;

//   k--;

//   if (k < 0) {
//     clearInterval(minuteinterval);
//     minutes.innerHTML = "59";
//     j--;
//     hours.innerHTML = j;
//   }
// }, 60000);
// }


 // ina kar nakardan

//   // const video = document.createElement("img");
//   // video.src = "9253530.jpg";
//   // document.getElementById("video").appendChild(video);

//   // const vid = document.getElementById('video');
//   // vid.style.height="300px"

// }

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// baraye tag ha
{
let collap = document.getElementsByClassName("collapse");
let i;
for (i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.previousElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
for (i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.previousElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
}

 
{
  var button = document.getElementById("btn");
var originalText = "<h2>مشاهده بیشتر</h2>";
function changeText() {
  if (button.innerHTML === "<h2>مشاهده کمتر</h2>") {
    button.innerHTML = originalText;
  } else {
    button.innerHTML = "<h2>مشاهده کمتر</h2>";
  }
}
}

// var left = $("#left");
// $(document).scroll(function(e) {
//     if ($(this).scrollTop() > $("#footer").height()) {
//         left.css({"position": "fixed"});
//     } else {
//         left.css("position", "static");
//     }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() + $(window).height() > $(document).height() - 120) {
//       $("#left").css({"top": 100});
//   }
// });


// var left = document.getElementById("left");
// // var nav = document.getElementById("navbar");
// // var mark = document.getElementById("bookmarks");
// // var stop = 120;
// window.addEventListener("scroll", function() {
//   if (window.scrollY = "10vh") {
//     left.style.top = 100;
//   } 

// });




// kar nakard
// {
//   function move(){
//     const header = document.getElementById('header')
//     if ((header.style.display = "none") || (header.style.marginTop = "-20vh")){
//       // window.scrollTo(0, 500);
//       window.location.href = "#targeta";
  
//     }
//     else{
//       window.location.href = "#target1";
//     }
//   }
// }




var sticky = document.getElementById("left");
window.addEventListener("scroll", function() {
  var scrollY = window.scrollY;
  if (scrollY >= 60) {
    sticky.style.top = "140px";
  } else {
    sticky.style.top = "210px";
  }
});






if (document.body.clientWidth < 300) {
    alert("This is a pop-up box!");
  }


