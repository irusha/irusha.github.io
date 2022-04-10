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
  
  function w3_close() {
    document.getElementById("leftMenu").style.display = "none";
  }