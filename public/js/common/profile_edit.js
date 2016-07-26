$(function(){
    // Edit行追加
    var addSelect = $('#addSelect');
    var addRow = $('#addRow');
    var i = 0;
    // EOF
    var _data = (function () {/*
                  <h2>詳細情報</h2>
                <table>
                  <tr>
                    <th>依頼者</th>
                    <td>
                      <div class="select-input-box">
                       <input type="text" name="name" value="" placeholder="依頼者名を入力">
                      </div>
                      <input type="text" name="name" value="" placeholder="依頼者の関連URLを入力">
                    </td>
                  </tr>
                  <tr>
                    <th>相手方</th>
                    <td>
                      <div class="select-input-box">
                        <input type="text" name="name" value="" placeholder="相手方の名前を入力">
                      </div>
                      <input type="text" name="name" value="" placeholder="相手方の関連URLを入力">
                    </td>
                  </tr>
                  <tr>
                    <th>案件規模</th>
                    <td>
                      <input type="text" name="name" value="" placeholder="金額を入力" class="horizontal1">

                      <select class="horizontal2" name="">
                        <option value="">円</option>
                        <option value="">ドル</option>
                      </select>

                      <select class="horizontal3" name="">
                        <option value="">金額種類</option>
                        <option value="">金額種類</option>
                      </select>

                    </td>
                  </tr>
                  <tr>
                    <th>役割</th>
                    <td>
                      <select name="" id="" style="width: 220px;">
                        <option value="">テキスト0</option>
                        <option value="">テキスト1</option>
                        <option value="">テキスト2</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>弁護料提案</th>
                    <td>
                      <div class="select-input-box">
                        <input type="text" name="name" value="" placeholder="弁護料提案を入力">
                      </div>
                    </td>
                  </tr>
                </table>
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
        }else if($( this ).val() == 'All Members'){
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

});