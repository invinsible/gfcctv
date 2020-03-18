$('.grid').masonry({
  itemSelector: '.grid__item',
  columnWidth: '.grid__sizer',    
  gutter: '.grid__gutter',
  percentPosition: true
});

$('.filterBtn').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});