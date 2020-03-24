// Masonry
$('.gridJS').masonry({
  itemSelector: '.grid__item',
  columnWidth: '.grid__sizer',    
  gutter: '.grid__gutter',
  percentPosition: true
});


// Filter
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

//Slider photo item-page
$('.photos-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.photos-nav'
});

$('.photos-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.photos-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

$('.main-menu__mobile').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).next('.main-menu__list').slideToggle();
})