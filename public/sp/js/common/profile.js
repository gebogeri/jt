var TimeLine, career, timelineData;

$(function() {
  var tab_width, target, selectArea;
  target = $('#slide-tabs1');
  tab_width = (target.find('li').eq(0).width() + 1) * target.find('li').length;
  target.find('ul').width(tab_width);

    $(document).on('change','#profile_form select', function(){
      $(this).css('color','#333');
    }).on('change','#entry_form select', function(){
      $(this).css('color','#333');
    }).on('change', '.js-example-basic-single', function(){
      $(this).next('span').find('span').css('color','#333');
    });

    var btnDet = $('.btn_detail');
    btnDet.on('click',function(){
      $(this).prev().slideToggle();
      $(this).closest('.profile-title-search').toggleClass('active');
      $("#jurisdiction").select2({
        placeholder: "テキストを入力"
      });

      $("#lawField").select2({
        placeholder: "テキストを入力"
      });
      $('#language').select2();
      $('select[name^=office]').select2();
    });

    $('select').on('change', function(){
      $(this).next().find('span').css('color','#333');
    });

    // スライドタブ
    $('#slide-tabs1 li').on('click', function() {
      var idx = $(this).index();
      $('#slide-tabs1 li').removeClass('selected').eq(idx).addClass('selected');
      $('#slide-tab-content-group').find('.slide-tab-content').removeClass('selected').eq(idx).addClass('selected');

    });


    // 円グラフのサイズ変更
    $(window).on('load resize',function(){
      var pWidth = $('.circle_graph canvas').parent().width();
      $('.circle_graph canvas').css({'width':pWidth*2,'height':pWidth});
    })

    // 表示範囲関連
    var range = $( '#btn_range input[name="range"]' );
    var rangeD = $('#range_d');
    var range0 = $('#range_0');
    var range1 = $('#range_1');
    var range10 = $('#range_10');
    var rangeX = $('#btn_range input[type=checkbox]');
    var pushBox = $('#btn_range ul');

    range.change( function() {
        if($( this ).val() == "非公開"){
            rangeX.prop('checked',false);
            pushBox.html('<li class="tag-select">非公開</li>');
        }else if($( this ).val() == "表示範囲を限定"){
            range10.prop('checked',true);
            pushBox.html('<li class="tag-select">表示範囲を限定</li>');
        }else{
            rangeX.prop('checked',false);
            pushBox.html('<li class="tag-select">全メンバー</li>');
        }
    });
    rangeX.change( function(){
        if($('#btn_range input[type=checkbox]:checked').length == 0){
            rangeD.prop('checked',true);
            pushBox.html('<li class="tag-select">非公開</li>');
        }else{
            range1.prop('checked',true);
            pushBox.html('<li class="tag-select">表示範囲を限定</li>');
        }
    });


    // チェックボックスOPEN,CLOSE
    var btnRange = $('#btn_range');
    var chkBox = $('#btn_range .chk-box');
    btnRange.click(function(evt){
        if(!btnRange.hasClass('open')){
            btnRange.addClass('open');

        }else if(!$(evt.target).closest(chkBox).length){
            btnRange.removeClass('open');
        }
    });

    $(document).on('click', function(evt){
        if( !$(evt.target).closest(btnRange).length ){
            btnRange.removeClass('open');
        }
    });

    $(document).on('touchend','.pop_up',function(){
        $('.pop_up').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    });

    $(window).on('scroll',function(){
        $('.pop_up').removeClass('active');
    });

    $(document).on('touchend','.default_select',function(){
      $(this).css('color','#333').find('option:first-child').attr('disabled',false);
    }).on('touchend','#careerForm .btn_delete',function(){
      var target = $(this).closest('tr');
      target.remove();
    });

});

timelineData = {
  'startYear': 2009,
  'endYear': 2020,
  'career': [
    {
      'name': '政治学研究科',
      'type': 1,
      'start': '2010',
      'end': '2010'
    }, {
      'name': '東京大学 法学部 法学政治学...',
      'type': 1,
      'start': '2011',
      'end': '2012'
    }, {
      'name': 'C&R リーガ...',
      'type': 2,
      'start': '2012',
      'end': '2012'
    }, {
      'name': '東京大学 法学部 法学政治学研究科',
      'type': 1,
      'start': '2012',
      'end': '2015'
    }, {
      'name': 'C&R リーガルエージェンシー社',
      'type': 2,
      'start': '2013',
      'end': '2014'
    }, {
      'name': 'C&R リーガルエージェンシー社',
      'type': 2,
      'start': '2014',
      'end': '2017'
    }
  ]
};