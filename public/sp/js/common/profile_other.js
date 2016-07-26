$(function(){
  var btnAllow = $('.lawyer-item .btn_ohter_allow'),
  btnRej = $('.lawyer-item .btn_ohter_reject');

  btnAllow.on('click',function(){
    compReq($(this));
    return false;
  });
  btnRej.on('click',function(){
    compReq($(this));
    return false;
  });

  function compReq(a){
    var b = a.closest('.lawyer-item');
    b.addClass('complete');
    setTimeout(function(){
      b.remove();
    },200);
  }
});