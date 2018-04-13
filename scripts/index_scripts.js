$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(document).ready(function() {
  $(".t1").click(function() {
    $(".d1")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_one.html"      });
  });
});

$(document).ready(function() {
  $(".t2").click(function() {
    $(".d2")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_two.html"      });
  });
});

$(document).ready(function() {
  $(".t3").click(function() {
    $(".d3")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_three.html"      });
  });
});

function openNav() {
    document.getElementByClassName("dropdown-content").style.display = "block";
}
