$(function(){
    // モーダルウィンドウ
    var body = $('body'),
    modalLikelink = $('#modal_likelist'),
    modalLikelinkURI = "/profile/modal/likelist.html";

    $(document).on('click',".modal_like_list",function(){ // 削除
        $.ajax({
            type: "GET",
            url: modalLikelinkURI,
            dataType:"html",
            success: function(data,dataType){
                modalLikelink.html(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){}
        });
        return false;
    })

});