function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const contactbtn= document.querySelector(".contactbtn");



contactbtn.addEventListener("click", function(){

  var myaudio = new Audio('Sounds/beef.wav');
  myaudio.play();
})
