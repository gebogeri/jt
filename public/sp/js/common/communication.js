$(function(){
  // 2段目サイドメニュー開閉
  $('.folder-head, .folder-head02').on('click', function() {
    $(this).closest(".folder-item").toggleClass('open');
  });
  $('.bookmark-head').on('click', function() {
    $(this).closest(".bookmark-item").toggleClass('open');
  });

  // 設定ボタンポップアップ
  $('.in-folder-list .btn_gear').on('click', function() {
      $(this).next('.in-folder-setting-popup').fadeToggle();
  });

  // 中央カラム左右スクロール
  $(window).on("load scroll", function(){
      $("#column-communication-sub").css("left", -$(window).scrollLeft() + 160);
  });

  //クリックしたときのファンクションをまとめて指定
  $('.modal-tab li').click(function() {
    var parent = '#' + $(this).parents()[2]['id'];
    console.log(parent);
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

  //クリックしたときのファンクションをまとめて指定
  $('.query-side-tab a').click(function() {
    var parent = '#' + $(this).parents()[2]['id'];
    console.log(parent);
    //.index()を使いクリックされたタブが何番目かを調べ、
    //indexという変数に代入します。
    var index = $( parent + ' .query-side-tab a').index(this);
    //コンテンツを一度すべて非表示にし、
    $( parent + ' .query-side-content > li').css('display','none');
    //クリックされたタブと同じ順番のコンテンツを表示します。
    $( parent + ' .query-side-content > li').eq(index).css('display','block');
    //一度タブについているクラスselectを消し、
    $( parent + ' .query-side-tab a').removeClass('selected');
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
      var wh = $(window).height() / 2;
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
