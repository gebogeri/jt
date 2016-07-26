$(function(){
    // サイドバー全体表示
    $('aside').append('<span id="sideHeight"></span>')
    var navHeight = $('#sideHeight').offset().top - $('#header').offset().top,
    $aside = $('aside');
    $('body').css('minHeight',navHeight);
    $aside.css('minHeight',navHeight);

    $(window).on('load scroll resize',function(){
        if( $(window).height() < navHeight ){
            var maxMargin = navHeight-$(window).height();
            if( $(window).scrollTop() >= maxMargin ){
                $aside.css('margin-top',-maxMargin);
            }else{
                $aside.css('margin-top',-$(window).scrollTop());
            }
        }else{
            $aside.css('margin-top',0);
        }
    });

    // ヘッダー左右スクロール
    var header_aside = $('#header,aside');
    $(window).on("load scroll", function(){
        header_aside.css("left", -$(window).scrollLeft());
    });

    // タイムライン | 設定
    $(document).on('click',".post-setting", function(){
        $(this).toggleClass('active');
    });
    $(document).on('click', function(evt){
        if( !$(evt.target).closest($(".post-setting")).length ){
            $(".post-setting").removeClass('active');
        }
    });

     // 通知 | おしらせ
    $(document).on('click',".menu_up", function(){
        $(this).toggleClass('active');
    });
    $(document).on('click', function(evt){
        if( !$(evt.target).closest($(".menu_up")).length ){
            $(".menu_up").removeClass('active');
        }
    });

    // タイムライン | シェア
    $(document).on('mouseover',".post-share",function(){
        $(this).addClass('active');
    }).on('mouseout',".post-share",function(){
        $(this).removeClass('active');
    }).on('mousemove',".post-share",function(e){
        $(this).children().css({
            "top":e.clientY+25+"px",
            "left":e.clientX-25+"px"
        });
    });

    // タイムライン | 詳細
    $(document).on('mouseover',".post-detail",function(){
        $(this).addClass('active');
    }).on('mouseout',".post-detail",function(){
        $(this).removeClass('active');
    }).on('mousemove',".post-detail",function(e){
        $(this).children().css({
            "top":e.clientY+25+"px",
            "left":e.clientX-25+"px"
        });
    });

    // タイムライン | 詳細
    $(document).on('mouseover',".post-del",function(){
        $(this).addClass('active');
    }).on('mouseout',".post-del",function(){
        $(this).removeClass('active');
    }).on('mousemove',".post-del",function(e){
        $(this).children().css({
            "top":e.clientY+25+"px",
            "left":e.clientX-25+"px"
        });
    });

    // タイムライン | 詳細
    $(document).on('mouseover',".post-rec",function(){
        $(this).addClass('active');
    }).on('mouseout',".post-rec",function(){
        $(this).removeClass('active');
    }).on('mousemove',".post-rec",function(e){
        $(this).children().css({
            "top":e.clientY+25+"px",
            "left":e.clientX-25+"px"
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

    var modalSearchBox = $('#modal_search,body')
    $(document).on('click',function(evt){
        if( !$(evt.target).closest($("#modal_search")).length && !$(evt.target).closest($("#nav li:first-child")).length && !$(evt.target).closest($(".btn_open")).length ){
            modalSearchBox.removeClass('win');
        }
    });
    $('#modal_search .btn_open').on('click',function(){ // テキストエリアの横幅
        modalSearchBox.toggleClass('win');
        $('#modal_search .select-input-box li:first-child input').css('width','327px');
        $('#modal_search .select-input-box .select2.select2-container.select2-container--default').css('width','354px');
    });
});