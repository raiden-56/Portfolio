
// typeWriter
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Graphic Designer.", "Web Developer.", "Web Designer"];
    
    function typeWriter(text, i, fnCallback) {
      
      if (i < (text.length)) {
        
       document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      
      else if (typeof fnCallback == 'function') {
        
        setTimeout(fnCallback, 700);
      }
    }
    
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, Infinity);
       }
       
      if (i < dataText[i].length) {
        
       typeWriter(dataText[i], 0, function(){
         
         StartTextAnimation(i + 1);
       });
      }
     }
    StartTextAnimation(0);
  });
// typeWriter


// navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// navbar



  // portfolio
$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('fil-active');
  $(this).addClass('fil-active');
  
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
      filter:selector
  });
  return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
  enabled : true
}
});
});
// portfolio




   

  