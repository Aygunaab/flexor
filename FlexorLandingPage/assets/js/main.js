$('.slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          dots:true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          dots:true,
        }
      }
    ]
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {

          slidesToShow: 1,
          dots:true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots:true,
        }
      }
    ]
  });

  jQuery(function ($) {
    
    $(".filter-panel-item").on("click", function () {
        var $this = $(this);
        if ( !$this.hasClass("filter-active") ) {
            $(".filter-panel-item").removeClass("filter-active");
            $this.addClass("filter-active"); 
            var $filter = $this.data("rel"); 
            
            $filter == 'all' ? 
                $(".gallery-item")
                .attr("data-fancybox", "gallery")
                .not(":visible")
                .fadeIn() 
            : 
                $(".gallery-item")
                .fadeOut(0)
                .filter(function () {
                    
                    return $(this).data("filter") == $filter; 
                })
                
                .attr("data-fancybox", $filter)
                .fadeIn(1000); 
        } 
    }); 
}); 


window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});


 
      