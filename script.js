let message1 = document.getElementById("msg");
let div = document.getElementById("div");
let width = screen.width; 
console.log(width);

if(width < 600){
    if (document.body.contains(document.getElementById("width1"))) {
        document.getElementById("width1").classList.remove("w-50");
        document.getElementById("width1").classList.add("w-75");
    }
    if (document.body.contains(document.getElementById("width2"))) {
        document.getElementById("width2").classList.remove("w-50");
        document.getElementById("width2").classList.add("w-75");
    }
    if (document.body.contains(document.getElementById("width3"))) {
        document.getElementById("width3").classList.remove("w-50");
        document.getElementById("width3").classList.add("w-75");
    }
}

if(message1 != null){
    anim();
    setTimeout(removeAllChildNodes,2000);
}

function removeAllChildNodes() {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function anim(){
    div.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 2000,
        iterations: Infinity
    });
}