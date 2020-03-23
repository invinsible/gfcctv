$('.gridJS').masonry({
  itemSelector: '.grid__item',
  columnWidth: '.grid__sizer',    
  gutter: '.grid__gutter',
  percentPosition: true
});

$('.filterBtn').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');

  $('.filterHidden').slideToggle();
});


//Tabs
$(".tabBody").hide();
$(".tabBody:first").show();    
  
$(".tabBtn").click(function() {
  $(".tabBody").hide();
  let activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
      
  $(".tabBtn").removeClass("active");
  $(this).addClass("active");
});


$('.photos-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.photos-nav'
});

$('.photos-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.photos-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});