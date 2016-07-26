$(function(){
    // モーダルウィンドウ
    var body = $('body'),
    modalDel = $('#modal_delete'),
    modalShare = $('#modal_share'),
    modalLink = $('#modal_link'),
    modalDelURI = "/knowledge/myfile/delete/index.html",
    modalDelCURI = "/knowledge/myfile/completion/index.html",
    modalShareURI = "/knowledge/share/check.html",
    modalShareCURI = "/knowledge/share/complete.html",
    modalLinkURI = "/knowledge/myfile/link/edit/index.html",
    modalLinkCURI = "/knowledge/myfile/link/edit/completion.html";

    $(document).on('click',".modal_del_reload",function(){ // 削除
        $.ajax({
            type: "GET",
            url: modalDelURI,
            dataType:"html",
            success: function(data,dataType){
                modalDel.html(data);
            }
        });
        return false;
    }).on('click',".modal_del_load",function(){
        $.ajax({
            type: "GET",
            url: modalDelCURI,
            dataType:"html",
            success: function(data,dataType){
                modalDel.html(data);
            }
        });
        return false;
    }).on('click',".modal_share_cload",function(){ // シェア完了画面呼び出し
        $.ajax({
            type: "GET",
            url: modalShareCURI,
            dataType:"html",
            success: function(data,dataType){
                modalShare.html(data);
                body.removeClass('modal-edit-active');
            }
        });
        return false;
    }).on('click',".modal_share_load",function(){ // シェア確認画面呼び出し
        $.ajax({
            type: "GET",
            url: modalShareURI,
            dataType:"html",
            success: function(data,dataType){
                modalShare.html(data);
                body.addClass('modal-edit-active');
            }
        });
        return false;
    }).on('click',".modal_link_reload",function(){
        $.ajax({
            type: "GET",
            url: modalLinkURI,
            dataType:"html",
            success: function(data,dataType){
                modalLink.html(data);
            }
        });
        return false;
    }).on('click',".modal_link_load",function(){
        $.ajax({
            type: "GET",
            url: modalLinkCURI,
            dataType:"html",
            success: function(data,dataType){
                modalLink.html(data);
            }
        });
        return false;
    });


    // トップタイトルSEARCH
    var searchBtn = $('.btn_search');
    var sR = $('#search-results');

    searchBtn.click(function(){
        if( !$(this).hasClass('active') ){
            $(this).addClass('active');
            setTimeout(function(){
                $('.select2-container').addClass('active');
            },300);
        }else{
            // 検索実行
            $.ajax({
                type: "POST",
                url: "/php/sample.php", // データ送信先
                data: $('#topSearch').val(),
                success: function(data,dataType)
                {
                    sR.html(data); // データ挿入
                }
            });
        }
    });


    // DETAIL表示・非表示トグル
    var detBtn = $('.btn_dopen');
    detBtn.click(function(){
        if(!$(this).prev().hasClass('detail-wrap')){
            $(this).prev().slideToggle().toggleClass('open');
        }else{
            $(this).prev().find('.detail-bottom').slideToggle().toggleClass('open');
        }
        if($(this).prev().hasClass('open')){
            $(this).html('<span>CLOSE</span>');
        }else{
            $(this).html('<span>DETAIL</span>');
        }
    });

    // select box
    var select=$('.select-box');
    select.focus(function(){
        $(this).addClass('focus');
    }).change(function(){
        $(this).removeClass('focus').addClass('active');
    }).blur(function(){
        $(this).removeClass('focus');
    });

    // 関与弁護士の選択
    var modalEdit = $('#modal_edit');
    var tabLi = $('#timeline-tab li');

    $(document).on('click','.lawyer-item',function(evt){
        if(!$(this).parent().hasClass('scroll-box')){
            $(this).toggleClass('selected');
        }
    });


    // Edit行追加
    var addSelect = $('#addSelect');
    var addRow = $('#addRow');
    var i = 0;
    // EOF
    var _data = (function () {/*
                  <tr id="swichRow">
                    <th>裁判機関</th>
                    <td>
                      <div class="clear column_2">
                        <input type="text" name="" placeholder="テキストを入力">
                        <select name="" class="select-box">
                          <option value="" disabled selected>公開範囲</option>
                          <option value="公開">公開</option>
                          <option value="非公開">非公開</option>
                        </select>
                      </div>
                      <input type="text" name="" placeholder="裁判機関の関連URLを入力">
                    </td>
                  </tr>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
    addSelect.change(function(){
        if(addSelect.val() == "1" && i == 0){
            addRow.after(_data);
            i = 1;
        }else if( i == 1 ){
            $('#swichRow').remove();
            i = 0
        }
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
    btnRange.on('click',function(evt){
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
        // サイドカレンダー
    var year = $('.side_year_ttl');
    year.on('click',function(){
        $(this).next().slideToggle(200);
        $(this).parent().toggleClass('active');
        return false;
    });

    // 関連サイトの追加
    var addSite = $('#addsite a');
    addSite.click(function(){
        var clone= $(this).parent().prev().clone();
        $(this).parent().before(clone);
    });

    $(document).on('click', function(evt){
        if( !$(evt.target).closest($('#btn_range')).length ){
            $('#btn_range').removeClass('open');
        }
    });


    // 関連ファイルのモーダル
    var btnRF = $('.btn_relatedFile'),
    fileModal = $('#fileModal'),
    asp = 0.9333; // height560 / width600

    btnRF.on('click',function(){
        var fileName =  $(this).attr('data-uri');
        if(fileName.match(/\.pdf$/i)){
            fileModal.html('<object id="fileArea" data="'+fileName+'" type="application/pdf"></object><a class="modal_close">閉じる</a>');
        }else if(fileName.match( /\.jpg$|\.jpeg$|\.png$|\.gif$/i )){
            var image = new Image();
            var width,height,imgAsp;

            image.onload = function(){
              width = image.width;
              height = image.height;
              var filwWH,
              imgAsp = height/width;

              // アスペクト比に対応して計算実行
              if(imgAsp > asp){
                  fileWH = 'width="'+String(560/height*width)+'" height="560" style="margin:0 auto;"'
              }else{
                  fileWH = 'width="600" style="margin:'+String( (560-600/width*height)/2 )+'px auto"'
              }

              // モーダル表示
              fileModal.html('<img src="'+fileName+'" '+fileWH+'><a class="modal_close">閉じる</a>');
            }

            image.src = fileName;
        }
    });


  var $tabs = $('#timeline-tab li'),
      $allTab = $('#all'),
      $selectedTab = $('#selected');
  $(document).on('click','#timeline-tab li:not(.selected)',function(){
        $tabs.removeClass('selected');
        $(this).addClass('selected');
        $allTab.toggle();
        $selectedTab.toggle();
    });
});