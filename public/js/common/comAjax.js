$(function(){
    var contentArea = $('#column-communication-main'),
    tabBtn = $(".query-side-tab a"),
    tabCont = $(".query-side-content > li");
    $(window).on('load', function(){
        var q = $('#column-communication-sub').data('query');
        ajaxLoad(0,q);
    });

    tabBtn.on('click', function(){
        var p = $(this).data('tabs'),
        q = $(this).data('query');
        ajaxLoad(p,q);
    });

    function ajaxLoad(p,q){
        var part = (p == 0) ? 'latest' :
                   (p == 1) ? 'question' :
                   (p == 2) ? 'case' :
                   'other';

        $.ajax({
            type: 'GET',
            url: '/communication/include/ajax/'+q+'/'+part+'.html',
            dataType: 'html',
            success: function(data){
                contentArea.html(data);
                tabBtn.removeClass('selected').eq(p).addClass('selected');
                tabCont.removeClass('selected').eq(p).addClass('selected');
                return false;
            }
        });
    }
});