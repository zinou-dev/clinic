const enable = (e) => {
    document.getElementById('burger').classList.toggle("open");
    document.getElementById("nav").classList.toggle("nav-open");
};


const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    
});
/*function adjustBrightness() {
    var image = document.getElementById("myImage");
    var checkbox = document.getElementById("toggle");
    if (checkbox.checked) {
        image.style.filter = "brightness(100%)";
    } else {
        image.style.filter = "brightness(5000%)";
    }
}*/

/*function adjustBrightnessAndChangeTextColor() {
    var image = document.getElementById("myImage");
    var text = document.getElementById("myText");
    var checkbox = document.getElementById("toggle");
    
    if (checkbox.checked) {
        image.style.filter = "brightness(5000%)";
        text.style.color = "#ffffff";
    } else {
        image.style.filter = "brightness(100%)";
        text.style.color = "#151D2A";
    }
}
/*function adjustBrightnessAndChangeTextColor() {
    var image = document.getElementById("myImage");
    var textElements = document.getElementById("myText");
    var checkbox = document.getElementById("toggle");
    
    if (checkbox.checked) {
        image.style.filter = "brightness(5000%)";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color ="#959595" ;
        }
    } else {
        image.style.filter = "brightness(100%)";
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "#151d2a";
        }
    }
}*/
function adjustBrightnessAndChangeTextColor() {

    var header = document.getElementById("header");
    var image = document.getElementById("myImage");
    var image2 = document.getElementById("myImage2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    var text6 = document.getElementById("text6");
    var text7 = document.getElementById("text7");
    var text8 = document.getElementById("text8");
    var text10 = document.getElementById("text10");
    var text11 = document.getElementById("text11");
    var separer = document.getElementById("separer");
    var separer2 = document.getElementById("separer2");
    var nav = document.getElementById("nav");
    var checkbox = document.getElementById("toggle");
    
    if (checkbox.checked) {
        header.style.backgroundColor = "rgb(32, 32, 32)";
        image.style.filter = "brightness(5000%)";
        image2.style.filter = "brightness(5000%)";
        text1.style.color = "#fff";
        text2.style.color = "#fff";
        text3.style.color = "#fff";
        text4.style.color = "#fff";
        text5.style.background = "#fff";
        text6.style.background = "#fff";
        text7.style.background = "#fff";
        text8.style.background = "#fff";
        separer.style.background = "rgb(90 90 90)";
        separer2.style.background = "rgb(90 90 90)";
        text10.style.color = "#fff";
        text11.style.color = "#fff";
        nav.style.backgroundColor = "#202020";
    } else {
        header.style.backgroundColor = "rgb(255, 255, 255)";
        image.style.filter = "brightness(100%)";
        image2.style.filter = "brightness(100%)";
        text1.style.color = "#151d2a";
        text2.style.color = "#151d2a";
        text3.style.color = "#151d2a";
        text4.style.color = "#151d2a";
        text5.style.background = "#151d2a";
        text6.style.background = "#151d2a";
        text7.style.background = "#151d2a";
        text8.style.background = "#151d2a";
        separer.style.background = "#151d2a";
        separer2.style.background = "#151d2a";
        text10.style.color = "#000";
        text11.style.color = "#000";
        nav.style.backgroundColor = "#808080";
    }
}