$(function(){
    // 編集スイッチ
    $(document).on('touchend', '.btn_cencel', function() {
        var content = $(this).closest(".edit_area");
        content.stop().hide();
        content.prev(".normal_area").stop().fadeIn();
        return false;
    });

    $('.btn_edit').on('touchend',function(){
        var content = $(this).closest('.normal_area');
        content.stop().hide();
        content.next('.edit_area').stop().fadeIn();
        return false;
    });

    $('.delete_account').on('click',function(){
        $(this).closest('.form_table').remove();
    });


    // 画像アップロード
        var imgView = $('#imgView'),
        selfInput = $('#imgProf');

        selfInput.change(function(){
            var file = $(this).prop('files')[0],
            fileRdr = new FileReader(),
            selfImg = imgView.find('.imgView');

            if(!this.files.length && 0 < selfImg.size()){
                selfImg.remove();
                return;
            } else {
                if(file.type.match('image.*')){
                    if(!(0 < selfImg.size())){
                        imgView.append('<img alt="" class="imgView">');
                    }
                    var prevElm = imgView.find('.imgView');
                    fileRdr.onload = function() {
                        prevElm.attr('src', fileRdr.result);
                    }
                    fileRdr.readAsDataURL(file);
                } else {
                    if(0 < selfImg.size()){
                        selfImg.remove();
                        return;
                    }
                }
            }
        });
        var editArea = $('.editArea');
        var addCount = 2;
        $('#mailAddress_add').on('touchend',function(){
            var addCountD = addCount - 1;
            var html = '<div class="edit_block">';
            html += '<div class="dt">メールアドレス' + ("0"+addCount).slice(-2) + '<span class="btn_delete_mail"></span></div>';
            html += '<input type="text" name="メールアドレス'+ ("0"+addCount).slice(-2) +'" placeholder="メールアドレスを入力">';
            html += '<input type="radio" name="mainEmail'+ ("0"+addCountD).slice(-2) +'" id="Email'+ ("0"+addCountD).slice(-2) +'" class="input_radio" value="'+ ("0"+addCountD).slice(-2) +'"><label for="Email'+ ("0"+addCountD).slice(-2) +'">メインのメールアドレスに設定する</label>';
            html += '<ul class="list_settingBtn">';
            html += '<li><input type="submit" name="" value="保存"></li>';
            html += '<li><input type="reset" name="" value="キャンセル" class="btn_cencel"></li>';
            html += '</ul>';
            html += '</div><!-- /edit_block -->';
            addCount++;
            $(this).prev().append(html);
        });
        $(document).on('touchend','.btn_delete_mail',function(){
            $(this).closest('.edit_block').remove();
        });

    // メールアドレス追加
    var btnMailBlock = $('.mail_block + .btn_add');
    btnMailBlock.on('touchend',function(){
        var target = $(this).prev('.mail_block'),
        dataID = target.data('no'),
        mailCount = parseInt(target.data('count')),
        mailNum = ("0" + mailCount).slice(-2);

        if(mailCount < 100){
            var mailHtml = '<div class="dt mt10">メールアドレス'+mailNum+'</div><input type="text" name="" placeholder="メールアドレスを入力"><input type="radio" name="mailEdit'+dataID+'" id="Email'+dataID+'-'+mailNum+'" class="input_radio" value="'+mailNum+'"><label for="Email'+dataID+'-'+mailNum+'">メインのメールアドレスに設定する</label>';
            target.append(mailHtml);
            target.data('count',++mailCount);
       }
    });

    var langAddHtml = (function () {/*
                          <div class="select-box mb5">
                            <select name="" id="">
                                <option disabled selected>使用する言語</option>
                                <option value="">日本語</option>
                                <option value="">英語</option>
                                <option value="">投稿タグ候補</option>
                                <option value="">投稿タグ候補</option>
                                <option value="">投稿タグ候補</option>
                            </select>
                            <span class="btn_arrow"></span>
                          </div>
                          <div class="select-box mb10">
                            <select name="" id="">
                                <option disabled selected>言語レベル</option>
                                <option value="">初級</option>
                                <option value="">制限付実務</option>
                                <option value="">一般実務</option>
                                <option value="">高等実務</option>
                                <option value="">ネイティブ</option>
                            </select>
                            <span class="btn_arrow"></span>
                          </div>
    */}).toString().replace(/(\n)/g, '').split('*')[1];
    var btnLangBlock = $('#langEdit + .btn_add');

    btnLangBlock.on('click',function(){
        $('#langEdit').append(langAddHtml);
    });

    // アカウント追加
    $("#btn_add_account").on("touchend", function() {
        $("#add_account_area").slideToggle();
    });

    $('p.pop_up').on('touchend',function(){
        $(this).toggleClass('active');
    });
    $(window).on('scroll',function(){
        $('.pop_up').removeClass('active');
    });

    $(document).on('focus','.select-box',function(){
        if($(this).find('select').hasClass('active')){
            $(this).find('select').addClass('focus');
        }
    }).on('change', '.select-box select',function(){
        $(this).addClass('active').removeClass('focus');
    });

    $('a[rel*=leanModal]').leanModal({
        top: 0,                     // モーダルウィンドウの縦位置を指定
        overlay : 0.9,               // 背面の透明度
        closeButton: ".modal_close"  // 閉じるボタンのCSS classを指定
    });

});