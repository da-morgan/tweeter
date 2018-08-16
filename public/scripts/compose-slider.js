$(document).ready(function() {

    $("nav #compose-button").click(function() {
        $("main .new-tweet").slideToggle(400, function(){
            $("textarea[name*='text']").focus();
        })
    })
})
