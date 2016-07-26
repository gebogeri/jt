$(function(){
    // Edit行追加
    var addSelect = $('#addSelect');
    var addRow = $('#addRow');
    var i = 0;
    // EOF
    var _data = (function () {/*
				<div id="swichRow">
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
			</div>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
    addSelect.change(function(){
        if(addSelect.val() == "2" && i == 0){
            addRow.after(_data);
            i = 1;
        }else if( i == 1 ){
            $('#swichRow').remove();
            i = 0
        }
    });

});