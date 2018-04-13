
//smooth scroll 
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200 && y < 1850) {
        $('#tour_nav').fadeIn();
    } else {
        $('#tour_nav').fadeOut();
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

function moreInfo() {
    var x = document.getElementById("moreInfo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("read1").style.opacity = "0";
    $( ".bodyText" ).addClass( "fadeInTwo" );
}

function moreInfo2() {
     var x = document.getElementById("moreInfo2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("read2").style.height = "0";
    document.getElementById("read2").style.margin = "0";
    $( ".bodyText" ).addClass( "fadeInTwo" );
}

function moreInfo3() {
     var x = document.getElementById("moreInfo3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("read3").style.height = "0";
    document.getElementById("read3").style.margin = "0";
    $( ".bodyText" ).addClass( "fadeInTwo" );
}

function moreInfo4() {
     var x = document.getElementById("moreInfo4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("read4").style.height = "0";
    document.getElementById("read4").style.margin = "0";
    $( ".bodyText" ).addClass( "fadeInTwo" );
}

$(".img1").click(function(){
    $(this).css("opacity", "1");
    document.getElementById("caption1").style.display = "block";
});


function closeDrawer() {
    document.getElementById("moreInfo").style.display = "none";
    document.getElementById("read1").style.height = "auto";
    document.getElementById("read1").style.marginTop = "12px";
}

function closeDrawer2() {
    document.getElementById("moreInfo2").style.display = "none";
    document.getElementById("read2").style.height = "auto";
    document.getElementById("read2").style.marginTop = "12px";
}

function closeDrawer3() {
    document.getElementById("moreInfo3").style.display = "none";
    document.getElementById("read3").style.height = "auto";
    document.getElementById("read3").style.marginTop = "12px";
}

function closeDrawer4() {
    document.getElementById("moreInfo4").style.display = "none";
    document.getElementById("read4").style.height = "auto";
    document.getElementById("read4").style.marginTop = "12px";
}

function openNav() {
    document.getElementById("open_nav").style.display = "block";
}

function closeNav() {
    document.getElementById("open_nav").style.display = "none";
}