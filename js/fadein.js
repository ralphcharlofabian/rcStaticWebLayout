$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    // $(window).scroll( function(){
    
        // /* Check the location of each desired element */
        // $('.hideme').each( function(i){
            
            // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            // var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // /* If the object is completely visible in the window, fade it it */
            // if( bottom_of_window > bottom_of_object ){
                
                // $(this).animate({'opacity':'1'},800);
                    
            // }
            
        // }); 
    
    // });
/***********************************************************/
	var $animation_elements = $('.animatedelement');
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

	    
	    if ((element_bottom_position >= window_top_position) &&
	      (element_top_position <= window_bottom_position)) {
	      $element.addClass('start');
	    } else {
	      /*$element.removeClass('start');*/
	    }
	  });
	}


	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

});

