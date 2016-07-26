$(function(){
  var $doc = $(document), $win = $(window);
  // 2段目サイドメニュー開閉
  var $fhead = $('.folder-head'),
      $bhead = $('.bookmark-head');
  $fhead.on('click', function(e) {
    if(!$(e.target).closest('.btn_gear').length){
      $(this).toggleClass('open').next().slideToggle();
    }
  });
  $bhead.on('click', function() {
    $(this).closest('.bookmark-item').toggleClass('open');
    $(this).next().slideToggle();
  });


  // titleトグル
  var btnTtlToggle = '.btn-toggle';
  $doc.on('click',btnTtlToggle, function() {
    $(this).closest(".query-detail").toggleClass("open");
    $(this).prev().slideToggle();
    if ($(this).closest(".query-detail").hasClass("open")) {
      $(this).find("span").text("CLOSE")
    } else {
      $(this).find("span").text("DETAIL")
    }
  });


  // 設定ボタンポップアップ
  var $btnGear = $('.btn_gear');
  $btnGear.on('click', function() {
    $(this).next('.in-folder-setting-popup').toggleClass('open');
  });

  // 設定ボタン非表示
  $doc.on('click',function(e){
    if(!$(e.target).closest('.in-folder-setting-popup').length && !$(e.target).closest('.btn_gear').length ){
        $('.in-folder-setting-popup').removeClass('open');
    }
  }).on('scroll',function(){
    $('.in-folder-setting-popup').removeClass('open');
  });

  // 中央カラム左右スクロール
  $win.on("load scroll", function(){
      $("#column-communication-sub").css("left", -$win.scrollLeft() + 160);
  });

  //クリックしたときのファンクションをまとめて指定
  $('.modal-tab li').click(function() {
    var parent = '#' + $(this).parents()[2]['id'];
    //.index()を使いクリックされたタブが何番目かを調べ、
    //indexという変数に代入します。
    var index = $( parent + ' .modal-tab li').index(this);
    //コンテンツを一度すべて非表示にし、
    $( parent + ' .modal-tab-content > ul').css('display','none');
    //クリックされたタブと同じ順番のコンテンツを表示します。
    $( parent + ' .modal-tab-content > ul').eq(index).css('display','block');
    //一度タブについているクラスselectを消し、
    $( parent + ' .modal-tab li').removeClass('selected');
    //クリックされたタブのみにクラスselectをつけます。
    $(this).addClass('selected')
  });
  // ////クリックしたときのファンクションをまとめて指定


  // エンターでメッセージを送るボタン開閉
  var sendBtn         = '.btn_post_send';
  var box             = '.communication-post-control-box .control-box-inner';
  var newPostTextarea = '.new-post-textarea';

  if( $('#enter_on' ).prop('checked') ){
    $( sendBtn ).hide();
    var flag = 1;
    var flag_text = 1;
    $( box ).css('width','100%');
  }
  else {
    $( sendBtn ).show();
    var flag = 0;
    var flag_text = 0;
  };

  $( '#enter_on' ).click( function() {
    if( flag == 1 ){
      $( sendBtn ).show();
      flag = 0;
      $( box ).css('width','80%');
      $( '#enter_on' ).prop("checked",false);
     }
    else if( flag == 0 ){
      $( sendBtn ).hide();
        flag = 1;
        $( box ).css('width','98%');
        $( '#enter_on' ).prop("checked",true);
    };
  });

  $( '.btn_post_large' ).click( function() {
    $(this).toggleClass('select');
    if( flag_text == 1 ){
      // $( sendBtn ).show();
      flag_text = 0;
      // $( box ).css('width','80%');
      $( newPostTextarea ).css('height','auto');
      // $( '#enter_on' ).prop("checked",false);
      // $( '#enter_on' ).prop('disabled',false);
     }
    else if( flag_text == 0 ){
      // $( sendBtn ).hide();
      flag_text = 1;
      var wh = $win.height() / 2;
      // $( box ).css('width','98%');
      $( newPostTextarea ).css('height', wh );
      // $(window).scrollTop($('.new-post-textarea').height());
      // $( '#enter_on' ).prop("checked",true);
      // $( '#enter_on' ).prop('disabled',true);
      $('body,html').animate({scrollTop: $(this).offset().top - 80}, 200, 'swing');
    };
  });
  // ////エンターでメッセージを送るボタン開閉

  $(".communication-post-toggle").on('click', function() {
    $(this).toggleClass('open');
    $(this).closest(".communication-post-box").toggleClass("close");
    if ($(this).closest(".communication-post-box").hasClass("close")) {
      $(this).find("span").text("DETAIL")
    } else {
      $(this).find("span").text("CLOSE")
    }
  });

  // モーダル検索
  $("#search_message").select2({
    placeholder: "検索キーワードを入力",
    width: 440,
    tags: true
  });
  $("#search_query").select2({
    placeholder: "検索キーワードを入力",
    width: 440,
    tags: true
  });

});
