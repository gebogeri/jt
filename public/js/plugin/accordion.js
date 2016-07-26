$(function(){

//--設定----------------------------------------------------//
	
	var clickBtn  = ['.btn_edit.open'];
	var ac_detail = ['.open_display'];
	var Speed ="fast";
	var openTypeOne = true;
	var closeArea = ['.init_display'];
	var cancelBtn = ['.cencelBtn'];

//--設定ここまで--------------------------------------------//

	$(clickBtn).each(function(i) {
		$(clickBtn[i]).css({"cursor":"pointer"});
		$(ac_detail[i]).hide();		
		$(clickBtn[i]).click(function(){
			index = $(clickBtn[i]).index(this);
			$(ac_detail[i]).eq(closeArea[i]).css({"display":"none"});
			$(closeArea[i]).eq(-i).css({"display":"none"});
			if(openTypeOne==true){
				accordion_one(clickBtn[i],ac_detail[i],index,i,closeArea[i],cancelBtn[i]);
			}else{
				accordion(clickBtn[i],ac_detail[i],index,i,closeArea[i],cancelBtn[i]);
			}
		});		
	});
	$(cancelBtn).each(function(i) {
		$(cancelBtn[i]).css({"cursor":"pointer"});
		//$(closeArea[i]).hide();		
		$(cancelBtn[i]).click(function(){
			$(closeArea[i]).eq(i).css({"display":"block"});
			index = $(cancelBtn[i]).index(this);
			if(openTypeOne==true){
				accordion_one(clickBtn[i],ac_detail[i],index,i,closeArea[i],cancelBtn[i]);
			}else{
				accordion(clickBtn[i],ac_detail[i],index,i,closeArea[i],cancelBtn[i]);
			}
		});		
	});

	function accordion_one(a,b,c,d,e,f){
		$(a).each(function(i) {		
			if(c!=i){
				if($(a).eq(i).hasClass('clickBtn_on'+d)){
					$(a).removeClass('clickBtn_on'+d);
					$(b).eq(i).slideUp(Speed);
					//$(b).eq(i).css({"display":"block"});
				}
			}							   
		});
		$(f).each(function(i) {		
			if(c!=i){
				if($(f).eq(i).hasClass('clickBtn_on'+d)){
					$(f).removeClass('clickBtn_on'+d);
					$(e).eq(i).slideUp(Speed);
					//$(b).eq(i).css({"display":"none"});
					//$(e).eq(i).css({"display":"block"});
				}
			}							   
		});

		if ($(a).eq(c).hasClass('clickBtn_on'+d)) {
			$(a).removeClass("clickBtn_on"+d);
			$(b).eq(c).slideUp(Speed);
			$(b).eq(c).css({"display":"block"});
		}else{
			$(a).eq(c).addClass('clickBtn_on'+d);
			$(e).eq(c).slideDown(Speed);
			$(b).eq(c).css({"display":"none"});
		}
	}
});