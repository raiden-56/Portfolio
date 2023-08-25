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