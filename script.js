let btnClear = document.querySelector('.input-clear');
let inputs = document.querySelectorAll('.search');

btnClear.addEventListener('click',() =>{
    inputs.forEach(input => input.value = '');
})

let btnClear2 = document.querySelector('.inputclear2');
let inputs1 = document.querySelectorAll('.search');

btnClear2.addEventListener('click',() =>{
    inputs1.forEach(input => input.value = '');
});


var menu = document.getElementById("menu");
menu.onclick = function(){
    menu.classList.toggle("openmenu")
}
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  