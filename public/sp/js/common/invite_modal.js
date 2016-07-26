$(function(){
    // モーダルウィンドウ
    $('#modal_edit').after('<div id="modal_invite_parent"></div>');

    var modalEdit = $('#modal_invite_parent');

    $(document).on('click',"#invite_modalOpen",function(){
        modalURI = '/invite/link_modal/invite_link.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_top_link',function(){
        modalURI = '/invite/link_modal/top_link.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.confirm_link',function(){
        modalURI = '/invite/link_modal/lawyer_link.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.complete_link',function(){
        modalURI = '/invite/link_modal/complete_link.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_top',function(){
        modalURI = '/invite/mail_modal/top.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_import.invite',function(){
        modalURI = '/invite/mail_modal/lawyer.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_complete',function(){
        modalURI = '/invite/mail_modal/complete.html';
        modalEdit.removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    });


    // モーダル関数
    function modal(modalURI,modalEdit){
        if(modalURI.match(/.html/)){
            $.ajax({
                type: "GET",
                url: modalURI,
                dataType:"html",
                success: function(data,dataType){
                    modalEdit.html(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){}
            });
        }
    }
});