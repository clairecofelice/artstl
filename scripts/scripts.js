
//smooth scroll 
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200 && y < 1850) {
        $('#tour_nav').fadeIn();
    } else {
        $('#tour_nav').fadeOut();
    }
});

//shorter smooth scroll 
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200 && y < 1450) {
        $('#tour_nav2').fadeIn();
    } else {
        $('#tour_nav2').fadeOut();
    }
});

//scrolling animations 

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

//transitions between stop pages

$(document).ready(function() {
  $(".next_prev").click(function() {
    $(".next_prev")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "apotheosis.html"      });
  });
});

$(document).ready(function() {
  $("#n2").click(function() {
    $("#n2")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "school_bus.html"      });
  });
});

$(document).ready(function() {
  $("#n3").click(function() {
    $("#n3")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "footnote.html"      });
  });
});

$(document).ready(function() {
  $("#n4").click(function() {
    $("#n4")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "treemonisha.html"      });
  });
});

$(document).ready(function() {
  $("#n5").click(function() {
    $("#n5")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "arch.html"      });
  });
});

//open google maps modal

$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }   
    });   
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
}); 

//tour page scripts

$(document).ready(function(){
    $("#read1").click(function(){
        $("#moreInfo").slideToggle();
         $(this).val("Read Less");
        document.getElementById("moreInfo").style.opacity = "1";
    });
});

$(document).ready(function(){
    $("#read2").click(function(){
        $("#moreInfo2").slideToggle();
         $(this).val("Read Less");
    });
});

$(document).ready(function(){
    $("#read3").click(function(){
        $("#moreInfo3").slideToggle();
         $(this).val("Read Less");
    });
});

$(document).ready(function(){
    $("#read4").click(function(){
        $("#moreInfo4").slideToggle();
         $(this).val("Read Less");
    });
});

$(".img1").click(function(){
    $(this).css("opacity", "1");
    document.getElementById("caption1").style.display = "block";
});


//open completion modal

$(".modal2").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal2");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }   
    });   
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal2");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
}); 