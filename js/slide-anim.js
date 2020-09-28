function slideTo(lieu) {
    $('body, html').animate({
      scrollTop: $(lieu).offset().top-50
    }, 750);
}

$(window).scroll(function() {
    var cutoff = $(window).scrollTop();
	var lien = "";

    $('section').each(function(){
        if($(this).offset().top + $(this).height()-50 > cutoff){
			lien = $(this).attr("id");
            return false; // stops the iteration after the first one on screen
        }
    });
	
	$('.js-nav').each(function(){

		$(this).find('li').each(function(){
			var current = $(this);
			$(this).find('a').each(function() {
				if($(this).attr("onclick").indexOf(lien) >= 0)
				{
					current.addClass('activelink');
				}
				else
				{
					current.removeClass('activelink');
				}
			});
		});
    });
});