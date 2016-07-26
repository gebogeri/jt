$(function(){

    var setFileInput = $('.imgInput'),
    selfName = $('.nameInput'),
    max=2, // 最大ファイル数設定
    numLength = String(max).length;
    name_num = [0],
    file_num = [0];

    // 数字を3ケタに変換
    var zeroPadding = function(number, digit){
        var numberLength = String(number).length;
        if(digit > numberLength){
            return ( new Array((digit - numberLength) + 1).join(0)) + number ;
        }else{
            return number;
        }
    }

    setFileInput.find('input').attr('id','img_num'+zeroPadding(1,numLength));
    selfName.find('input').attr('id','file_num'+zeroPadding(1,numLength));

    // ファイルの挿入
    $(document).on('change','.nameInput input[type=file]',function(){
        // ファイル名取得
        var name = $(this)[0].files[0].name;
        var addId = Number($(this).attr('id').slice(-numLength));

        // クリックした要素を非表示
        $(this).css('display','none');

        name_num.push(addId);
        name_num.sort();

        // 配列からIDを決定
        for(var num = 0;num <= max;){
            if(name_num[num] != num){

                // ファイル名を表示
                selfName.next().append('<p><a rel="file_num_ank'+ zeroPadding(addId,numLength) +'" class=txt_12><span class="close"></span><span>'+ name + '</span></a></p>');

                selfName.append('<input id="file_num'+ zeroPadding(num,numLength) +'" type="file" name="related_file\[\]">');

                break;

            }else if(name_num[num] == max){
                // ファイル名を表示
                selfName.addClass('maxFile').next().append('<p><a rel="file_num_ank'+ zeroPadding(addId,numLength) +'" class=txt_12><span class="close"></span><span>'+ name + '</span></a></p>');
            }
            num++;
        }
    });


    // ファイルの削除
    $(document).on('click','a[rel^="file_num_ank"] .close',function(){

        // remove_num番目のinput削除
        var remove_num = $('a[rel^="file_num_ank"]').index($(this).parent());
        $('.nameInput input:eq('+remove_num+')').remove();

        // 配列から削除
        var removeId = Number($(this).parent().attr('rel').slice(-numLength));
        name_num.some(function(v, i){
            if (v==removeId) name_num.splice(i,1);
        });

        if(name_num.length == max){
            for(var num = 0;num <= max;){
                if(name_num[num] != num){

                    selfName.removeClass('maxFile').append('<input id="file_num'+ zeroPadding(num,numLength) +'" type="file" name="related_file\[\]">');

                    break;

                }
                num++;
            }
        }
        // クリックした要素削除
        $(this).parent().parent().remove();

    });


    // イメージ画像をアップする
    // ファイルの挿入
    $(document).on('change','.imgInput input[type=file]',function(){
        // ファイル名取得
        var name = $(this)[0].files[0].name;
        var addId = Number($(this).attr('id').slice(-numLength));

        // クリックした要素を非表示
        $(this).css('display','none');

        file_num.push(addId);
        file_num.sort();

        // 配列からIDを決定
        for(var num = 0;num <= max;){
            if(file_num[num] != num){

                var file = $(this).prop('files')[0];
                var fr = new FileReader();
                fr.onload = function() {

                    setFileInput.next().append('<div class="tr"><div class="th"><img src="'+fr.result+'" width="100%"></div><div class="td"><a rel="img_num_ank'+ zeroPadding(addId,numLength) +'" class=txt_12><span class="close"></span><span>'+ name + '</span></a></div></div>');
                }
                fr.readAsDataURL(file);

                // ファイル名を表示
                setFileInput.append('<input id="img_num'+ zeroPadding(num,numLength) +'" type="file" name="related_img\[\]">');

                break;

            }else if(file_num[num] == max){
                var file = $(this).prop('files')[0];
                var fr = new FileReader();
                fr.onload = function() {

                    setFileInput.addClass('maxFile').next().append('<div class="tr"><div class="th"><img src="'+fr.result+'" width="100%"></div><div class="td"><a rel="img_num_ank'+ zeroPadding(addId,numLength) +'" class=txt_12><span class="close"></span><span>'+ name + '</span></a></div></div>');
                }
                fr.readAsDataURL(file);
            }
            num++;
        }
    });


    // ファイルの削除
    $(document).on('click','a[rel^="img_num_ank"] .close',function(){

        // remove_num番目のinput削除
        var remove_num = $('a[rel^="img_num_ank"]').index($(this).parent());
        $('.imgInput input:eq('+remove_num+')').remove();
        $('#upload_img').remove();

        // 配列から削除
        var removeId = Number($(this).parent().attr('rel').slice(-numLength));
        file_num.some(function(v, i){
            if (v==removeId) file_num.splice(i,1);
        });

        if(file_num.length == max){
            for(var num = 0;num <= max;){
                if(file_num[num] != num){
                    setFileInput.removeClass('maxFile').append('<input id="file_num'+ zeroPadding(num,numLength) +'" type="file" name="related_file\[\]">');

                    break;
                }
                num++;
            }
        }
        // クリックした要素削除
        $(this).parent().parent().parent().remove();

    });

    // projects モーダル
    var modalEdit = $('#modal_edit');
    $(document).on('click','.btn_modalEdit',function(){
        var modalURI = '/knowledge/myfile/projects/edit/modal/';

        // ボタンによって読み込むファイルを変更
         if($(this).hasClass('btn_modalOpen')){ // 最初のページ
            if(modalEdit.hasClass('complete')){
                modalEdit.removeClass('complete');
            }
            modalURI += 'top.html';
            modalEdit.addClass("modal-top");
        }
        else if($(this).hasClass('lawyer-item')){
            modalURI += 'lawyer.html';
        }else if($(this).hasClass('post-detail')){ // 2ページ目
            modalURI += 'detail.html';
        }else if($(this).hasClass('btn_import')){ // インポート
            modalURI += 'complete.html'
            modalEdit.attr('style','display: block; left: 50%; margin-left: -310px; opacity: 1; position: fixed; top: 168px; z-index: 11000;').addClass('complete');
        }else if($(this).hasClass('btn_return')){
            modalURI += 'top.html'
            modalEdit.attr('style','display: block; left: 50%; margin-left: -340px; opacity: 1; position: fixed; top: 40px; z-index: 11000;').removeClass('complete');
        }

        modal(modalURI,modalEdit);
        return false;

    }).on('click','.modal_back',function(){ //キャンセル、BACKを押した時
        var pId = $(this).parent().parent().attr('id');
        var modalURI = '/knowledge/myfile/projects/edit/modal/';

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
        if(modalURI != '/knowledge/myfile/projects/edit/modal/' && modalURI.match(/.html/)){
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
