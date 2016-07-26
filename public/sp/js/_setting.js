/////////////////////////////////
//
// SETTINGページ
//
/////////////////////////////////

$(function(){
    var $doc = $(document),
        btnEdit = '.btn_edit',
        btnReset = '.btn_reset',
        btnDelete = '.btn_delete',
        emailAdd = '.btn_subAdd',
        emailDelete = '.btn_subDelete',
        $btnAdd = $('.btn_add'),
        $btnLangAdd = $('.setting_item_edit_languageAdd_btn'),
        $userBox = $('#userBox'),
        deleteElem = '.d_elem',
        userCount = 2,
        emailCount = 3,
        max = 10;


    max++;

    $doc.on('touchend', btnEdit, function(){ // 編集フィールドの切り替え
        $(this).fadeToggle().prev().toggle();
        $(this).next().fadeToggle();
    })
    .on('touchend', btnReset, function(){
        var $editBox = $(this).closest('.setting_item_edit');
        $editBox.toggle().prev().fadeToggle().prev().fadeToggle();
    })
    .on('touchend', btnDelete, function(){ // ボックスの削除
        $(this).closest(deleteElem).remove();
    });

    $btnAdd.on('touchend', function(){ // ボックスの追加
        createBox();
    });

    // メールアドレスの追加・削除
    $doc.on('touchend', emailDelete, function(){
        $(this).closest('.setting_item_edit_emailBox').remove();
    }).
    on('touchend', emailAdd, function(){
        createBox($(this));
    });

    // 言語の追加
    var langSelect = `
                                <div class="setting_item_edit_language use">
                                    <select>
                                        <option value="" disabled selected>使用する言語</option>
                                        <option value="">英語</option>
                                        <option value="">日本語</option>
                                    </select>
                                </div><!-- [/ .setting_item_edit_language] -->
                                <div class="setting_item_edit_language level">
                                    <select>
                                        <option value="" disabled selected>言語レベル</option>
                                        <option value="">初級</option>
                                        <option value="">制限付実務</option>
                                        <option value="">一般実務</option>
                                        <option value="">高等実務</option>
                                        <option value="">ネイティブ</option>
                                    </select>
                                </div><!-- [/ .setting_item_edit_language] -->

`;

    $btnLangAdd.on('click',function(){
        $(this).closest('.lang').before(langSelect);
    });

    function createBox(value){
        var o = value || 'default';

        if(o == 'default'){
            // テンプレートリテラル
            var userElem =`
                        <div class="setting d_elem">
                            <h3 class="setting_ttl">ユーザー${ ( '0'+userCount++ ).slice(-2) }<i class="setting_ttl_delete btn_delete"></i></h3>
                            <dl class="setting_item">
                                <dt class="setting_item_ttl">氏名</dt>
                                <dd class="setting_item_display">Kazutochi&nbsp;Kondo</dd><!-- [/ .setting_item_display] -->
                                <dd class="setting_item_display_btn btn_edit"></dd>
                                <dd class="setting_item_edit">
                                    <form action="">
                                        <input type="text" placeholder="姓">
                                        <input type="text" placeholder="名">
                                        <input type="text" placeholder="ミドルネーム">
                                        <div class="setting_item_edit_prof">
                                            <p>プロフィール画像を変更する</p>
                                            <div class="setting_item_edit_prof_file">
                                                <div class="setting_item_edit_prof_file_preview" style="background-image: url(/sp/img/common/icon_profile.jpg);"></div>
                                                <span class="setting_item_edit_prof_file_btn">
                                                    ファイルを参照
                                                    <input type="file">
                                                </span>
                                            </div><!-- [/ . setting_item_edit_prof_file] -->
                                        </div><!-- [/ .setting_item_edit_prof] -->
                                        <div class="setting_item_edit_submit">
                                            <input type="submit" value="保存">
                                            <input type="reset" class="btn_reset" value="キャンセル">
                                        </div>
                                    </form>
                                </dd><!-- [/ .setting_item_edit] -->
                            </dl><!-- [/ .setting_item] -->
                            <dl class="setting_item">
                                <dt class="setting_item_ttl">ユーザーID</dt>
                                <dd class="setting_item_display">近藤&nbsp;和志（コンドウ&nbsp;カズシ）</dd><!-- [/ .setting_item_display] -->
                                <dd class="setting_item_display_btn btn_edit"></dd>
                                <dd class="setting_item_edit">
                                    <form action="">
                                        登録されたユーザーID は、あなたのプロフィールURLへ反映されます
                                        <input type="text">
                                        <span class="setting_item_edit_idError">このIDは使用できません</span>
                                        <div class="setting_item_edit_submit">
                                            <input type="submit" value="保存">
                                            <input type="reset" class="btn_reset" value="キャンセル">
                                        </div>
                                    </form>
                                </dd><!-- [/ .setting_item_edit] -->
                            </dl><!-- [/ .setting_item] -->
                            <dl class="setting_item">
                                <dt class="setting_item_ttl">メールアドレス</dt>
                                <dd class="setting_item_display">
                                    <p>aaa@aaa.com&nbsp;&nbsp;メインで使用</p>
                                    <p>aaa@aaa.com</p>
                                </dd><!-- [/ .setting_item_display] -->
                                <dd class="setting_item_display_btn btn_edit"></dd>
                                <dd class="setting_item_edit">
                                    <form action="">
                                        <input type="text">
                                        <div class="setting_item_edit_submit">
                                            <input type="submit" value=確認メールを送信>
                                            <input type="reset" class="btn_reset" value="キャンセル">
                                        </div>
                                    </form>
                                </dd><!-- [/ .setting_item_edit] -->
                            </dl><!-- [/ .setting_item] -->
                            <dl class="setting_item">
                                <dt class="setting_item_ttl">パスワード</dt>
                                <dd class="setting_item_display">パスワードの最終変更日時は<br>1年以上前です。</dd><!-- [/ .setting_item_display] -->
                                <dd class="setting_item_display_btn btn_edit"></dd>
                            </dl><!-- [/ .setting_item] -->
                        </div><!-- [/ .setting] -->
        `;

            // 要素追加
            if(userCount <= max){
                $userBox.append(userElem);
            }
        }else{
            var formName = o.attr('name');
            var emailElem =`
                                <div class="setting_item_edit_emailBox">
                                    <h4 class="setting_item_edit_emailTtl">
                                        メールアドレス${ ( '0'+emailCount ).slice(-2) }
                                        <span class="setting_item_edit_emailTtl_btn btn_subDelete"></span>
                                    </h4>
                                    <input type="text">
                                    <input type="radio" id="${ formName }${ ( '0'+emailCount ).slice(-2) }" name="${ formName }" value="">
                                    <label for="${ formName }${ ( '0'+emailCount++ ).slice(-2) }" class="setting_item_edit_mainEmail">メインのメールアドレスに設定する</label>
                                    <div class="setting_item_edit_submit">
                                        <input type="submit" value="保存">
                                        <input type="reset" class="btn_reset" value="キャンセル">
                                    </div>
                                </div><!-- [/ .setting_item_edit_emailBox] -->
`;
            if(emailCount <= max){
                o.closest('.setting_item_edit_add').before(emailElem);
            }
        }
    }
});