$(document).ready(function() {
    $("textarea[name*='text']").keyup(function(event){
        let counter = $(this).siblings(".counter");
        let remaining = 140 - $(this).val().length

        if(remaining > 0) {
            counter.removeClass("negative")
            counter.text(remaining)  
        } else {
            counter.addClass("negative")
            counter.text(remaining)
        }
    }) 
});