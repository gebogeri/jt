$(function(){
    var $win = $(window),
        $doc = $(document),
        $body = $('body');

    var $commonHeadSide = $('#header,#sideBar'),
        $header = $('#header'),
        $aside = $('#sideBar');

    var $navNotice = $('#navNotification'),
        $alert = $('#header .alert');

    var $contactBtn = $('.contact_head'),
        $contact = $('.contact'),
        $send = $('#contactForm');

    var $toggleBtn = $('.modal_toggleBtn');

    // ヘッダー、サイドバー横スクロール
    /////////////////////////////////////
    $win.on('load scroll',function(){
        $commonHeadSide.css("left", -$win.scrollLeft());
    });


    // サイドバー上下スクロール
    ///////////////////////////////
    // サイドバーに基準位置設定
    $aside.find('.sideLeft').append('<span id="sideHeight_A"></span>');
    $aside.find('.sideRight').append('<span id="sideHeight_B"></span>');

    function sideAdj(){
        var headerHeight = $header.offset().top;

        // サイドバー最上部から最下部までの長さ
        try{
            var navHeight_A = $('#sideHeight_A').offset().top - headerHeight;
        }catch(e){
            var navHeight_A = 0
        }

        try{
            var navHeight_B = $('#sideHeight_B').offset().top - headerHeight;
        }catch(e){
            var navHeight_B = 0
        }

        if(navHeight_A > navHeight_B){
            var navHeight = navHeight_A;
        }else{
            var navHeight = navHeight_B;
        }


        $body.css('minHeight',navHeight);
        $aside.css('minHeight',navHeight);

        if( $win.height() < navHeight ){
            var maxMargin = navHeight-$win.height();
            if( $win.scrollTop() >= maxMargin ){
                $aside.css('marginTop',-maxMargin);
            }else{
                $aside.css('marginTop',-$win.scrollTop());
            }
        }else{
            $aside.css('marginTop',0);
        }
    }

    $win.on('load scroll resize',function(){
        sideAdj();
    });



    // Notification開閉
    /////////////////////////
    $navNotice.on('click', function(){
        $alert.toggleClass('isOpen');
    });

    $doc.on('click', function(e){
        if(!$(e.target).closest('#navNotification').length > 0){
            $alert.removeClass('isOpen');
        }
    });

    // 共通問い合わせ
    /////////////////////////
    $contactBtn.on('click',function(){
        $contact.toggleClass('isOpen');
    });

    $send.submit(function(){
        $(this).addClass('isSend');
        setTimeout(function(){
            $contact.removeClass('isOpen');
            $send.removeClass('isSend');
        }, 600);
        return false;
    });


    // 検索モーダルトグル
    //////////////////////////
    $toggleBtn.on('click', function(){
        $(this).prev().slideToggle(250);
        $(this).closest('.modal').toggleClass('isOpen');
    });


    // フォーム表示色
    /////////////////////////
    $doc.on('change', 'select', function(){
        if($(this).not(':first-child')){
            $(this).css('color', '#333');
        }
    });
});


// グラフの色
var B1 = '#072615',
    B2 = '#104940',
    B3 = '#186C6B',
    B4 = '#218E95',
    B5 = '#29B1C0',
    B6 = '#42C4C2',
    B7 = '#5BD8C3',
    B8 = '#74ECC5',
    B9 = '#74ECC5',
    Y1 = '#102F20',
    Y2 = '#1B5037',
    Y3 = '#27724E',
    Y4 = '#329364',
    Y5 = '#3DB47B',
    Y6 = '#6EC682',
    Y7 = '#9ED889',
    Y8 = '#CFEA90',
    Y9 = '#FFFC97',
    Other = '#ddd';
