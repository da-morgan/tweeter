const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
];
  

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
       $('#tweet-container').append(html);
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

$(function(){    
    renderTweets(data);
})
