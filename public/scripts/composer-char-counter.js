$(document).ready(function() {
    $("textarea[name*='text']").keyup(function(event){
        let counter = $(this).parent().find(".counter");
        let remaining = 140 - $(this).val().length

        counter.text(remaining)  
    }) 
});