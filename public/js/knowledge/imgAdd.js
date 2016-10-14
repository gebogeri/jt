// ファイルの追加(knowledge edit -- blog)

$(function(){

    var $doc = $(document),
        $imgAdd = $('#imgAdd'),
        max=3, // 最大ファイル数設定
        numLength = String(max).length,
        maxFileSize = Math.pow(1024,2), // 1MBに設定
        fileArray = [0];

    // 数字を3ケタに変換
    var zeroPadding = function(number, digit){
        var numberLength = String(number).length;
        if(digit > numberLength){
            return ( new Array((digit - numberLength) + 1).join(0)) + number ;
        }else{
            return number;
        }
    }

    $imgAdd.find('input').attr('id','imgNum'+zeroPadding(1,numLength));

    // ファイルの挿入
    $doc.on('change','#imgAdd input[type=file]',function(){

        var $paste = $imgAdd.next('.alertImgArea');
        $paste.find('.msg').remove();

        // ファイル名取得
        var file = $(this)[0].files[0],
            fileSize = file.size,
            name = file.name,
            addId = Number($(this).attr('id').slice(-numLength)),
            ext = name.split('.')[name.split('.').length - 1].toLowerCase();


        if(fileSize > maxFileSize){
            $paste.prepend('<p class="msg">ファイルサイズの上限は1MBです。</p>');
            return;
        }else if(ext != 'jpg' && ext != 'jpeg' && ext != 'png' && ext != 'gif'){
            $paste.prepend('<p class="msg">画像ファイル以外はアップロードできません</p>');
            return;
        }

        // メッセージ
        $paste.prepend('<p class="msg">ファイルをアップロードしました</p>')

        // クリックした要素を非表示
        $(this).css('display','none');

        // インプット番号整序
        fileArray.push(addId);
        fileArray.sort();

        // 配列からIDを決定
        var arrayLen = fileArray.length - 1;
        if(arrayLen == max){
                $imgAdd.addClass('maxFile');
        }else{
            // ボタン追加
            for(var num = 0;num<=max;num++){
                if(num != fileArray[num]){
                    $imgAdd.append('<input id="imgNum'+ zeroPadding(num,numLength) +'" type="file" name="image\[\]">')
                    break;
                }
            }
        }

        var fr = new FileReader();
        fr.onload = function() {
            $paste.append('<div class="knowledge_upload_imgAlert_row fileDel"><div class="knowledge_upload_imgAlert_row_head" style="background-image:url('+fr.result+')"></div><p class="file"><span class="fileDelBtn" data-delete="' + zeroPadding(addId,numLength) + '"></span>'+ name + '</p></div>');
        }
        fr.readAsDataURL(file);

        return;
    })

    // ファイルの削除
    .on('click','.alertImgArea .fileDelBtn',function(){

        var $paste = $(this).closest('.alertImgArea');
        $paste.find('.msg').remove();

        $imgAdd.removeClass('maxFile');

        // メッセージ表示
        $paste.prepend('<p class="msg">ファイルを削除しました</p>')

        // input削除
        var removeId = Number($(this).data('delete')),
            removeNum = zeroPadding(removeId,numLength);

        // 配列から削除
        fileArray.some(function(v, i){
            if (v==removeId) fileArray.splice(i,1);
        });

        var arrayLen = fileArray.length;
        if(arrayLen == max){
            $remove = $('#imgNum'+removeNum);
            $remove.attr('style','').replaceWith($remove.clone());
        }else{

            // inputの削除
            $('#imgNum' + removeNum).remove();

            // 配列にない番号のinput作成
            for(var num = 0;num<=max;num++){
                if(num != fileArray[num]){
                    $imgAdd.next().append('<input type="file" id="imgNum' + removeNum + '" name="image\[\]"');
                    break;
                }
            }
        }


        // クリックした要素削除
        $(this).closest('.fileDel').remove();

        return;

    });


});
