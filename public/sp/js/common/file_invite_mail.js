$(function(){

    var setFileInput = $('.imgInput'),
    selfName = $('.nameInput'),
    max= 5, // 最大ファイル数設定
    name_num = [0],
    file_num = [0];

    // ファイルの挿入
    $(document).on('change','.nameInput input[type=file]',function(){
        // ファイル名取得
        var name = $(this)[0].files[0].name;
        var addId = Number($(this).attr('id').slice(-1));

        // クリックした要素を非表示
        $(this).css('display','none');

        if(!$('#upload_files').length){
            selfName.next().prepend('<p id="upload_files">ファイルをアップロードしました</p>');
        }

        name_num.push(addId);
        name_num.sort();

        // 配列からIDを決定
        for(var num = 0;num <= max;){
            if(name_num[num] != num){

                // ファイル名を表示
                selfName.next().append('<p><a rel="file_num_ank0'+ String(addId) +'" class=txt_12>'+ name + '</a></p>');

                selfName.append('<input id="file_num0'+ num +'" type="file" name="related_file\[\]">');

                break;

            }else if(name_num[num] == max){
                // ファイル名を表示
                selfName.next().append('<p><a rel="file_num_ank0'+ String(addId) +'" class=txt_12>'+ name + '</a></p>');
            }
            num++;
        }
    });


    // ファイルの削除
    $(document).on('click','a[rel^="file_num_ank"]',function(){

        // remove_num番目のinput削除
        var remove_num = $('a[rel^="file_num_ank"]').index(this);
        $('.nameInput input:eq('+remove_num+')').remove();
        $('#upload_files').remove();

        // 配列から削除
        var removeId = Number($(this).attr('rel').slice(-1));
        name_num.some(function(v, i){
            if (v==removeId) name_num.splice(i,1);
        });

        console.log(name_num);
        if(name_num.length == max){
            for(var num = 0;num <= max;){
                console.log(name_num[num]);
                console.log(num);
                if(name_num[num] != num){

                    selfName.append('<input id="file_num0'+ num +'" type="file" name="related_file\[\]">');

                    break;

                }
                num++;
            }
        }
        // クリックした要素削除
        $(this).parent().remove();

    });

    // イメージ画像をアップする
    // ファイルの挿入
    $(document).on('change','.imgInput input[type=file]',function(){
        // ファイル名取得
        var name = $(this)[0].files[0].name;
        var addId = Number($(this).attr('id').slice(-1));

        // クリックした要素を非表示
        $(this).css('display','none');

        if(!$('#upload_img').length){
            setFileInput.next().prepend('<p id="upload_img">ファイルをアップロードしました</p>');
        }
        file_num.push(addId);
        file_num.sort();

        // 配列からIDを決定
        for(var num = 0;num <= max;){
            if(file_num[num] != num){

                var file = $(this).prop('files')[0];
                var fr = new FileReader();
                fr.onload = function() {

                    setFileInput.next().append('<div class="clear"><div class="fl"><img src="'+fr.result+'" width="100%"></div><div class="fr"><a rel="img_num_ank0'+ String(addId) +'" class=txt_12>'+ name + '</a></div></div>');
                }
                fr.readAsDataURL(file);

                // ファイル名を表示
                setFileInput.append('<input id="img_num0'+ num +'" type="file" name="related_img\[\]">');

                break;

            }else if(file_num[num] == max){
                var file = $(this).prop('files')[0];
                var fr = new FileReader();
                fr.onload = function() {

                    setFileInput.next().append('<div class="clear"><div class="fl"><img src="'+fr.result+'" width="100%"></div><div class="fr"><a rel="img_num_ank0'+ String(addId) +'" class=txt_12>'+ name + '</a></div></div>');
                }
                fr.readAsDataURL(file);
            }
            num++;
        }
    });


    // ファイルの削除
    $(document).on('click','a[rel^="img_num_ank"]',function(){

        // remove_num番目のinput削除
        var remove_num = $('a[rel^="img_num_ank"]').index(this);
        $('.imgInput input:eq('+remove_num+')').remove();
        $('#upload_img').remove();

        // 配列から削除
        var removeId = Number($(this).attr('rel').slice(-1));
        file_num.some(function(v, i){
            if (v==removeId) file_num.splice(i,1);
        });

        if(file_num.length == max){
            for(var num = 0;num <= max;){
                console.log(file_num[num]);
                console.log(num);
                if(file_num[num] != num){

                    setFileInput.append('<input id="file_num0'+ num +'" type="file" name="related_file\[\]">');

                    break;

                }
                num++;
            }
        }
        // クリックした要素削除
        $(this).parent().parent().remove();

    });


    // projects モーダル
    var modalEdit = $('#modal_edit');
    $(document).on('click','.btn_modalEdit',function(){
        var modalURI = '/invite/mail_modal/';

        // ボタンによって読み込むファイルを変更
        if($(this).hasClass('btn_modalOpen')){ // 最初のページ
            if(modalEdit.hasClass('complete')){
                modalEdit.removeClass('complete');
            }
            modalURI += 'invite.html';
        }else if($(this).hasClass('btn_top')){
            modalURI += 'top.html';
        }else if($(this).hasClass('btn_import')){
            modalURI += 'lawyer.html';
        }else if($(this).hasClass('post-detail')){ // 2ページ目
            modalURI += 'detail.html';
        }else if($(this).hasClass('btn_complete')){ // インポート
            modalURI += 'complete.html'
            // modalEdit.attr('style','display: block; left: 50%; margin-left: -290px; opacity: 1; position: fixed; top: 40px; z-index: 11000;').addClass('complete');
        }else if($(this).hasClass('btn_return')){
            modalURI += 'top.html'
            // modalEdit.attr('style','display: block; left: 50%; margin-left: -290px; opacity: 1; position: fixed; top: 40px; z-index: 11000;').removeClass('complete');
        }

        modal(modalURI,modalEdit);
        return false;

    }).on('click','.modal_back',function(){ //キャンセル、BACKを押した時
        var pId = $(this).parent().parent().attr('id');
        var modalURI = '/invite/mail_modal/';

        if(pId == 'modal_detail'){
            modalURI += 'lawyer.html';
        }else if(pId == 'modal_lawyer'){
            modalURI += 'top.html';
        }

        modal(modalURI,modalEdit);
        return false;

    }).on('click','#modal_edit .scroll-item',function(evt){ // 選択箇所のカラー変更
        if(!$(evt.target).closest('.post-detail').length){
            $(this).toggleClass('selected');
        }
    });

    // モーダル関数
    function modal(modalURI,modalEdit){
        if(modalURI != '/invite/mail_modal/' && modalURI.match(/.html/)){
            $.ajax({
                type: "GET",
                url: modalURI,
                dataType:"html",
                success: function(data,dataType){
                    modalEdit.html(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){}
            });
        }
    }

});
