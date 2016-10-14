$(function(){
    var $btn = $('a[rel*="file"]'),
        $target = $('#modalFile .modal_file_content'),
        imgExtList = [];

    $btn.on('click', function(){
        $('.modal_file_content_data').remove();

        var data = $(this).data('get'),
            ext = data.split('.')[data.split('.').length - 1].toLowerCase();

        if(ext == 'pdf'){
            $target.prepend('<object class="modal_file_content_data" data="'+ data +'" type="application/pdf"></object>');
        }else if(ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif'){
            var img = new Image();

            img.src = data;

            var w = img.width*100,  // 幅
                h = img.height*100; // 高さ


            var meta = ' src="'+ data+ '"';
            if(w > 620 || h > 600){
                if(w - h < 20){ // 620/600
                    var rate = 600 / h;
                    w *= rate;
                    meta += ' width="' + w + '" height="600"';
                }
            }

            $target.prepend('<img class="modal_file_content_data"' + meta + '>');
        }

        return;

    });
});