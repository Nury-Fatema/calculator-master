
var display = document.getElementById("display")
var zero = document.getElementById("zero");

zero.addEventListener("click", function(){
    if(display.value>0){
        display.value = display.value + 0;
    }
})