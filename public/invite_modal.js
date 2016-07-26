$(function(){
    // モーダルウィンドウ
    var modalEdit = $('#modal_edit');
    var inviteStyle = 'display: block; left: 50%; margin-left: -340px; opacity: 1; position: fixed; top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); z-index: 11000; max-height:98%; overflow-y:auto;';

    $(document).on('click',"#invite_modalOpen",function(){
        modalURI = '/invite/link_modal/invite_link.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_top_link',function(){
        modalURI = '/invite/link_modal/top_link.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.confirm_link',function(){
        modalURI = '/invite/link_modal/lawyer_link.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.complete_link',function(){
        modalURI = '/invite/link_modal/complete_link.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_top',function(){
        modalURI = '/invite/mail_modal/top.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_import',function(){
        modalURI = '/invite/mail_modal/lawyer.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
        modal(modalURI,modalEdit);
        return false;
    }).on('click','.btn_modalEdit.btn_complete',function(){
        modalURI = '/invite/mail_modal/complete.html';
        modalEdit.attr('style',inviteStyle).removeClass('complete');
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