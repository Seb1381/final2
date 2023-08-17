function submit_comment(){
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    let uname = name+" commented: "
    let message = comment
    document.getElementById("uname").innerHTML = uname 
    document.getElementById("message").innerHTML = message
    vision()
}

function vision(){
    document.getElementById("comment_section").style.display="inline-block"
    time()
}

function time(){
    document.getElementById("time").innerHTML= "1 minute ago"
    pic()
}

function pic(){
    const img = document.getElementById("img");
    img.src = "john.jfif";
}

