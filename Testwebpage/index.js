var c = true;
var menubutton = document.getElementById("menubicon")
document.querySelector(".button_cart").addEventListener("click", function(){
    this.closest(".banner").style.display = "none";
});
function w3_open() {
  if (c){
    document.getElementById("rightMenu").style.display = "block";
    
    console.log(menubutton.textContent);
    menubutton.textContent = 'close'
    c = false;
  }
  else{
    document.getElementById("rightMenu").style.display = "none";
    c = true;
    console.log(menubutton.textContent);
    menubutton.textContent = 'menu'
  }
    
}
if(document.body.clientWidth < 400){
  this.alert("Your screensize may not compatible with the website")
}
if(document.body.clientWidth < 600){
  console.log("Ok")
  this.document.getElementById("headings").style.fontSize = "70px"
}
window.addEventListener("resize", function(event) {
  console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
  if(document.body.clientWidth < 600){
    console.log("Ok")
    this.document.getElementById("headings").style.fontSize = "70px"
    this.document.getElementById("headings1").style.fontSize = "70px"
    this.document.getElementById("headings2").style.fontSize = "70px"
    }
  else{
    this.document.getElementById("headings").style.fontSize = "100px"
  }
})
console.log(navigator.userAgent)
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  console.log("Mobile")
  this.document.getElementById("banner__text").style.fontSize = "45px";
  this.document.getElementById("banner__text").style.paddingLeft = "10px"
  this.document.getElementById("menubicon").style.fontSize = "66px";
  this.document.getElementById("ordersico").style.fontSize = "66px";
  this.document.getElementById("cartbicon").style.fontSize = "66px";
  this.document.getElementById("rightMenu").style.marginTop = "101px";
  this.document.getElementById("sidebarelements").style.fontSize = "45px";
  this.document.getElementById("sidebarelements1").style.fontSize = "45px";
  this.document.getElementById("sidebarelements2").style.fontSize = "45px";
  this.document.getElementById("sidebarelements").style.padding = "39px"
  this.document.getElementById("sidebarelements1").style.padding = "39px"
  this.document.getElementById("sidebarelements2").style.padding = "39px"
  this.document.getElementById("rightMenu").style.width = "100%";
  this.document.getElementById("headings").style.fontSize = "150px";
  this.document.getElementById("bestbagshead").style.fontSize = "45px";
  this.document.getElementById("gotago").style.fontSize = "35px";
  this.document.getElementById("buttext").style.fontSize = "35px";
  this.document.getElementById("butbut").style.width = "350px";
  this.document.getElementById("butbut").style.height = "110px";
  this.document.getElementById("paratext").style.fontSize = "35px";
  this.document.getElementById("paratext1").style.fontSize = "35px";
  this.document.getElementById("paratext2").style.fontSize = "35px";
  this.document.getElementById("paratext").style.paddingLeft = "30px"
  this.document.getElementById("paratext").style.paddingRight = "30px"
  this.document.getElementById("paratext1").style.paddingLeft = "30px"
  this.document.getElementById("paratext1").style.paddingRight = "30px"
  this.document.getElementById("paratext2").style.paddingLeft = "30px"
  this.document.getElementById("paratext2").style.paddingRight = "30px"
}
else{
  console.log("Desktop")
}
