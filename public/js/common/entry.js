$(function() {

    $(document).on("change",'select[name^=country]',function() {
        var countryName = $(this).find('option:selected').data("country");

        $(this).closest('td').find('select[name^=city] option:not(.'+countryName+')').hide().closest('td').find('select[name^=city] .'+countryName).show();

    }).on('change','select', function(){
	    $(this).css('color','#333');
	  }).on('change', '.js-example-basic-single', function(){
	    $(this).next('span').find('span').css('color','#333');
	  }).on('click','.lawyer-item',function(evt){
        if(!$(this).parent().hasClass('scroll-box')){
            $('.lawyer-item').removeClass('selected');
            $(this).toggleClass('selected');
        }
    });

    $('.lawyer-box').slimScroll();

    $(".search_all").hide();
    $(".ask_search").click(function(){
        $(".search_all").show();
    });
});