$(function(){
    // ヘッダー左右スクロール
    $(window).on("load scroll", function(){
        $("#header").css("left", -$(window).scrollLeft());
        $("#container aside").css("left", -$(window).scrollLeft());
    });

    // タイムライン | 設定
    var btn_setting = $(".post-setting");
    btn_setting.on('click', function(){
        $(this).toggleClass('active');
    });

    // タイムライン | シェア
    var btn_share = $(".post-share");
    btn_share.mouseover(function(){
        $(this).addClass('active');
    }).mouseout(function(){
        $(this).removeClass('active');
    }).mousemove(function(e){
        $(this).children().css({
            "top":e.pageY+25+"px",
            "left":e.pageX-20+"px"
        });
    });



    // 報告ウィンドウ関連
    var winBtm = $('#win-btm');
    var winHead = $("#win-head");
    var winBox = $("#win-box");
    winHead.on('click',function(){
        if(winBtm.hasClass('open')){
            winBtm.removeClass('open');
        }else{
            winBtm.addClass('open');
        }
    });

    $('#win-btm input[type="submit"]').on('click',function(){
        winBox.addClass('sent');

        setTimeout(function(){
            if(winBtm.hasClass('open')){
                winBtm.removeClass('open');
            }else{
                winBtm.addClass('open');
            }
            setTimeout(function(){
                winBox.removeClass('sent');
            },205);
        },1000);
        return false;
    });

});