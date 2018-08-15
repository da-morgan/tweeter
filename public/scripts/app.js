
function tweetAgeCalc(tweetData) {
    var currentMs =  new Date().getTime();
    var tweetMs = tweetData.created_at;
    var diff = currentMs - tweetMs
    var days = Math.floor(diff/86400000);
    return days;
}

/*takes in a tweet function and returns
  a tweet <article> element containing 
  the HTML of the tweet
*/
function renderTweets(tweets) {
    tweets.forEach(function(tweet){
       var html = createTweetElement(tweet);
       $('#tweet-container').prepend(html);
    })
}

function createTweetElement(tweetData) {
    let article = $("<article>").attr('id', 'tweet-container');
    let header = $("<header></header>");
    let footer = $("<footer></footer>");
    let img = $(`<img src= ${tweetData.user.avatars.small}>`)
    let nameSpan = $(`<span class="name">${tweetData.user.name}</span>`)
    let uNameSpan = $(`<span class="username">${tweetData.user.handle}</span>`)
    let paragraph = $(`<p>${tweetData.content.text}</p>`)
    let dateTime = $(`<span class="date">${tweetAgeCalc(tweetData)} days ago. </span>`)
    let icons = $(`<span class="icons"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>`)

    icons.appendTo(footer);
    dateTime.appendTo(footer);
    img.appendTo(header);
    uNameSpan.appendTo(header);
    nameSpan.appendTo(header);
    header.appendTo(article);
    paragraph.appendTo(article);
    footer.appendTo(article);

    return article;
}


$(document).ready(function() {   

  //When user submits, posts content to the route with jQuery.
  $('form#new-tweet').on("submit", function(event){
    event.preventDefault();

    if($("form#new-tweet textarea").val() === ""){
      alert("You can't tweet nothing!")
    } else if ($("form#new-tweet textarea").val().length > 140){
      alert("Your tweet must be 140 characters or less")
    } else {
      let serialized = $(this).serialize();
      $.post('/tweets', serialized).done(function(product){
          $("form#new-tweet textarea").val("")
          $("form#new-tweet span").text("140")
          loadTweets();
      });
    }
    
  });

  //Loads tweets through AJAX
  function loadTweets() {
    $.ajax('/tweets', { method: 'GET' }).then(function(data){
      $("article").remove();
      renderTweets(data);
    })
    
  }
  loadTweets();
  
})
