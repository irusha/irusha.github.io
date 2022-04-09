document.querySelector(".button_cart").addEventListener("click", function(){
    this.closest(".banner").style.display = "none";
});
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }