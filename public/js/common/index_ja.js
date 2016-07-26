    // Ajax
    var emptyData;
    var postWrap = $("#post-wrap");
    var postItem = $("#timeline-tab li");
    var conWrap = $("#con-wrap");
    var conItem = $("#contact-tab li");
    $(document).on('click',".tab li:not(.selected)",function(){
        var getId = $(this).attr("id");
        getId = getId.substr(4); // "tab-"の除去
        var getUrl = "/ajax/"+getId+".html";
        var ajaxField = $(this).parent().attr("id");
        if(ajaxField == "timeline-tab"){ // タイムライン処理
            emptyData = postWrap;
            tabClass = postItem;
        }else if(ajaxField == "contact-tab"){ // サイドバー処理
            emptyData = conWrap;
            tabClass = conItem;
        }

        if(emptyData != ""){
            tabClass.removeClass("selected");
            $(this).addClass("selected");
            emptyData.empty();
            $.ajax({
                type: "GET",
                url: getUrl,
                dataType:"html",
                success: function(data,dataType){
                    emptyData.html(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){}
            });
        }
    });

    // 表示範囲関連
    var range = $( '#btn_range input[name="range"]' );
    var range0 = $('#range_0');
    var range1 = $('#range_1');
    var range10 = $('#range_10');
    var rangeX = $('#btn_range input[type=checkbox]');
    var pushBox = $('#btn_range ul');

    range.change( function() {
        if($( this ).val() == "表示範囲を限定"){
            range10.prop('checked',true);
            pushBox.html('<li class="tag-select">表示範囲を限定</li>');
        }else{
            rangeX.prop('checked',false);
            pushBox.html('<li class="tag-select">全メンバー</li>');
        }
    });

    rangeX.change( function(){
        if($('#btn_range input[type=checkbox]:checked').length == 0){
            range0.prop('checked',true);
            pushBox.html('<li class="tag-select">全メンバー</li>');
        }else{
            range1.prop('checked',true);
            pushBox.html('<li class="tag-select">表示範囲を限定</li>');
        }
    });

    // チェックボックスOPEN,CLOSE
    var btnRange = $('#btn_range');
    var chkBox = $('#btn_range .chk-box');
    btnRange.click(function(evt){
        if(!btnRange.hasClass('open')){
            btnRange.addClass('open');

        }else if(!$(evt.target).closest(chkBox).length){
            btnRange.removeClass('open');
        }
    });

    $(document).on('click', function(evt){
        if( !$(evt.target).closest(btnRange).length ){
            btnRange.removeClass('open');
        }
    });

