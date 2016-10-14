// ファイルの追加(knowledge edit)

$(function(){
    var $doc = $(document),
        $fileAdd = $('#fileAdd'),
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

    $fileAdd.find('input').attr('id','fileNum'+zeroPadding(1,numLength));

    // ファイルの挿入
    $doc.on('change','#fileAdd input[type=file]',function(){

        var $paste = $fileAdd.next('.alertArea');
        $paste.find('.msg').remove();

        // ファイル名取得
        var file = $(this)[0].files[0],
            fileSize = file.size,
            name = file.name,
            addId = Number($(this).attr('id').slice(-numLength));

        if(fileSize > maxFileSize){
            $paste.prepend('<p class="msg">ファイルサイズの上限は1MBです。</p>');
            return;
        }

        // メッセージ
        $paste.prepend('<p class="msg">ファイルをアップロードしました</p>')

        // クリックした要素を非表示
        $(this).css('display','none');

        // インプット番号整序
        fileArray.push(addId);
        fileArray.sort();


        // ファイル名を表示
        var addContent = '<p class="fileDel file"><span class="fileDelBtn" data-delete="'+ zeroPadding(addId,numLength) + '"></span>'+ name + '</p>';
        $paste.append(addContent);

        // 配列からIDを決定
        var arrayLen = fileArray.length - 1;
        if(arrayLen == max){
            $fileAdd.addClass('maxFile');
        }else{
            // ボタン追加
            for(var num = 0;num<=max;num++){
                if(num != fileArray[num]){
                    $fileAdd.append('<input id="fileNum'+ zeroPadding(num,numLength) +'" type="file" name="related_file\[\]">')
                    break;
                }
            }
        }

        return;
    })

    // ファイルの削除
    .on('click','.alertArea .fileDelBtn',function(){

        var $paste = $(this).closest('.alertArea');
        $paste.find('.msg').remove();

        $fileAdd.removeClass('maxFile');

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
            $remove = $('#fileNum'+removeNum);
            $remove.attr('style','').replaceWith($remove.clone());
        }else{

            // inputの削除
            $('#fileNum' + removeNum).remove();

            // 配列にない番号のinput作成
            for(var num = 0;num<=max;num++){
                if(num != fileArray[num]){
                    $fileAdd.next().append('<input type="file" id="fileNum' + removeNum + '" name="related_file[]"');
                    break;
                }
            }
        }


        // クリックした要素削除
        $(this).closest('.fileDel').remove();

        return;

    });


});
