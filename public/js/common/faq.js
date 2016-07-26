$(function() {

    // アコーディオン
    var accordion = $(".accordion");
    accordion.each(function () {
        var noTargetAccordion = $(this).siblings(accordion);
        $(this).find(".switch").click(function() {
            $(this).next(".contentWrap").slideToggle();
            $(this).toggleClass("open");
            noTargetAccordion.find(".contentWrap").slideUp();
            noTargetAccordion.find(".switch").removeClass("open");
        });
        $(this).find(".close").click(function() {
            var targetContentWrap = $(this).parent(".contentWrap");
            $(targetContentWrap).slideToggle();
            $(targetContentWrap).prev(".switch").toggleClass("open");
        });
    });

});
