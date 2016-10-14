$(function() {
    $doc = $(document);

    $doc.on('click', '[rel*="jump"]', function() {
        $this = $(this);
        js = $this.data('effect');

        $target = $($this.data('target')),
            get = $this.data('get');

        if ($target.length > 0) {
            $.ajax({
                type: "GET",
                url: get,
                cache: false,
                success: function(html) {
                    $target.html(html);
                }
            });
        }
        return false;
    });
})
