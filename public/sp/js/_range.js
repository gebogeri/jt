$(function(){

/////////////////////////////////
//
// 公開範囲表示切替
//
/////////////////////////////////

    var $range = $('.range');

    $range.on('touchend', function(e){
        if( !$(e.target).closest('.range_content').length ){
            $(this).toggleClass('isOpen');
        }
    });

/////////////////////////////////
//
// チェックした時
//
/////////////////////////////////
    var $radio = $('.range input[type="radio"]'),
        $check = $('.range input[type="checkbox"]');

    // ラジオボタンの設定
    $radio.on('change', function(){
        var $this = $(this).next('label');

        // 詳細設定可のものであればチェックをつける
        if( $this.hasClass('range_content_detail') ){
            if( !$this.closest('.range_content').find('input[type="checkbox"]:checked').length ){
                $this.next().prop('checked', true);
            }

        //それ以外であればチェックをすべて外す
        }else{
            $this.closest('.range_content').find('input[type="checkbox"]').prop('checked', false);
        }

        // タグの文字を変更
        $this.closest('.range').find('span').html($this.text());

    });

    // チェックボックスの設定
    $check.on('change', function(){
        var $container = $(this).closest('.range'),
            count = $container.find('input[type="checkbox"]:checked').length;

            // チェックが有る場合
            if( count > 0 ){
                $container.find('.range_content_detail').prev('input').prop('checked', true);
                $container.find('span').html($container.find('.range_content_detail').text());

            // チェックがない場合
            }else{
                $container.find('input:first-child').prop('checked', true);
                $container.find('span').html($container.find('input:first-child + label').text());
            }

    });

});