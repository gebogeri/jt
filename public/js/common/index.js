$(function(){
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
        if($( this ).val() == "Limit who can see this post"){
            range10.prop('checked',true);
            pushBox.html('<li class="tag-select">Limit who can see this post</li>');
        }else{
            rangeX.prop('checked',false);
            pushBox.html('<li class="tag-select">All Members</li>');
        }
    });

    rangeX.change( function(){
        if($('#btn_range input[type=checkbox]:checked').length == 0){
            range0.prop('checked',true);
            pushBox.html('<li class="tag-select">All Members</li>');
        }else{
            range1.prop('checked',true);
            pushBox.html('<li class="tag-select">Limit who can see this post</li>');
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


    // 「投稿を編集」モーダル
    var postEdit = $('#modal_postEdit'),
    body = $('body'),
    modalShare = $('#modal_share'),
    modalShareURI = "/knowledge/share/check.html",
    modalShareCURI = "/knowledge/share/complete.html";
    $(document).on('click','a[rel*=leanModal]', function(){
        $.ajax({
            type: "GET",
            url: "/ajax/post-edit01.html",
            dataType:"html",
            success: function(data,dataType){
                postEdit.html(data);
                body.addClass("win_02");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){}
        });
        return false;
    }).on('click',function(evt){
        if( !$(evt.target).closest($("#modal_postEdit")).length && !$(evt.target).closest($("a[rel*=leanModal]")).length && !$(evt.target).hasClass('select2-selection__choice__remove')){
            body.removeClass('win_02');
        }
    }).on('click',".modal_share_cload",function(){ // シェア完了画面呼び出し
        $.ajax({
            type: "GET",
            url: modalShareCURI,
            dataType:"html",
            success: function(data,dataType){
                modalShare.html(data);
                body.removeClass('modal-edit-active');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){}
        });
        return false;
    }).on('click',".modal_share_load",function(){ // シェア確認画面呼び出し
        $.ajax({
            type: "GET",
            url: modalShareURI,
            dataType:"html",
            success: function(data,dataType){
                modalShare.html(data);
                body.addClass('modal-edit-active');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){}
        });
        return false;
    });
});