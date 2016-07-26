$(function() {

    $(document).on("change",'select[name^=country]',function() {
        var countryName = $(this).find('option:selected').data("country");

        $(this).closest('td').find('select[name^=city] option:not(.'+countryName+')').hide().closest('td').find('select[name^=city] .'+countryName).show();

    });
	  $(document).on('change','select', function(){
	    $(this).css('color','#333');
	  }).on('change', '.js-example-basic-single', function(){
	    $(this).next('span').find('span').css('color','#333');
	  });
});