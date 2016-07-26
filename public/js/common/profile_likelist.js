$(function(){
    // モーダルウィンドウ
    var modalLikelink = $('#modal_likelist'),
    modalLikelinkURI = "/profile/modal/likelist.html";

    $(document).on('click',".modal_like_list",function(){
        $.ajax({
            type: "GET",
            url: modalLikelinkURI,
            dataType:"html",
            success: function(data,dataType){
                modalLikelink.html(data);
            }
        });
        return false;
    })

});