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
        range10.eq(0).prop('checked',true);
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


    // 地域横スクロール
    var leftPos = 0,
    slideBox = $('#slide-tabs1 ul'),
    boxMarg = slideBox.width() - 710,
    cl = 'left';

    function rl(){
      if(cl == 'right' && leftPos >= -boxMarg){
        leftPos--;
      }else if(cl == 'left' && leftPos < 0){
        leftPos++;
      }
      slideBox.css('left',leftPos+'px');
    }


    var rlS;
    var rlE;
    var intTmrInterval = 1;
    var targetS = $('#slide-tabs1 div[class^=slide-arrow-]');
    function start(){
      clearInterval(rl);
      rlE = true;
      rl();
      rlS = setInterval(rl, intTmrInterval);
    }
    function stop(){
      clearInterval(rlS);
      rlE = false;
    }

    targetS.on('mousedown',function(){
      cl = $(this).attr('class').slice(12);
      start();
    }).on('mouseup',function(){
      stop();
    });

    // スライドタブ
    $('#slide-tabs1 li').on('click', function() {
      var idx = $(this).index();
      $('#slide-tabs1 li').removeClass('selected').eq(idx).addClass('selected');
      $('#slide-tab-content-group').find('.slide-tab-content').removeClass('selected').eq(idx).addClass('selected');

    });

    var $tabs = $('#profile-tab li'),
    $allTab = $('#all'),
    $selectedTab = $('#selected');
    $(document).on('click','#profile-tab li:not(.selected)',function(){
      $tabs.removeClass('selected');
      $(this).addClass('selected');
      $allTab.toggle();
      $selectedTab.toggle();
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

TimeLine = (function() {
  var bgColor1, bgColor2, data, elemBackground, elemField;

  elemWrap = $('#profile-timeline-wrap');

  elemField = $('#profile-timeline-career');

  elemBackground = $('#profile-timeline-background');

  data = null;

  bgColor1 = ['#73afc0', '#406175', '#13253e', '#000000'];

  bgColor2 = ['#7fd396', '#5e9574', '#1d3e37', '#000000'];

  function TimeLine(args) {
    data = args;
  }

  TimeLine.prototype.renderYear = function() {
    var i, yearObjct;
    yearObjct = "";
    i = 0;
    while (i + data.startYear <= data.endYear) {
      yearObjct += '<div>' + (i + data.startYear) + '</div>';
      i++;
    }
    elemBackground.width(90 * i).append(yearObjct);
  };

  TimeLine.prototype.renderCareer = function() {
    var careerObjct, d, j, len, ref, results;
    ref = data.career;
    results = [];
    var h = 0;
    for (j = 0, len = ref.length; j < len; j++) {
      d = ref[j];
      careerObjct = $('<div></div');
      careerObjct.text(d.name).css({
        'background-color': d.color,
        'width': d.term,
        'margin-top': d.layer,
        'left': d.position
      });
      results.push(elemField.append(careerObjct));
      if( d.layer > 0 ){
        var m = d.layer + 30;
      }else{
        var m = Math.abs(d.layer);
      }
      if(h < m){
        h = m;
      }
    }
    elemWrap.css('height',m*2);
    return results;
  };

  TimeLine.prototype.dataFormatting = function() {
    var aaa, c1, c2, k, key, layer, layerPos, objHeight, objWidth, ref, ref1, v, value;
    objWidth = 90;
    objHeight = 20;
    c1 = 0;
    c2 = 0;
    ref = data.career;
    layerPlus = 0;
    beforeStart = 0;
    for (key in ref) {
      value = ref[key];
      layerPos = 1;
      if (data.career[key].type === 1) {
        k = 0 == c1 ? 0 : c1%4;
        c1++;
        data.career[key].color = bgColor1[k];
      } else if (data.career[key].type === 2) {
        k = 0 == c2 ? 0 : c2%4;
        c2++;
        data.career[key].color = bgColor2[k];
        layerPos = -1;
      }
      data.career[key].term = objWidth * (value.end - value.start + 1);
      data.career[key].position = objWidth * (value.start - data.startYear);
      layer = 0;
      ref1 = data.career;

      for (k in ref1) {
        v = ref1[k];
        aaa = value.type === 1 ? 10 : -30;
        if (k === key) {
          break;
        }
        if (value.start >= v.start && (v.type === value.type)) {
          layer += 1;
        }
      }
      data.career[key].layer = objHeight * layer * layerPos + aaa;
    }
  };

  return TimeLine;

})();

career = new TimeLine(timelineData);

career.renderYear();

career.dataFormatting();

career.renderCareer();

