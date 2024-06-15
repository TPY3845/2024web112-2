function handleInstagram(response) {
  document.getElementById('instagram').innerHTML = '<strong>Instagram 追蹤者：</strong>' + response.count;
}

function handleTwitter(response) {
  document.getElementById('twitter').innerHTML = '<strong>Twitter 追蹤者：</strong>' + response.count;
}

function handleYoutube(response) {
  document.getElementById('youtube').innerHTML = '<strong>Youtube 訂閱者：</strong>' + response.count;
}

function handleWeverse(response) {
  document.getElementById('weverse').innerHTML = '<strong>Weverse 會員數：</strong>' + response.count;
}

(function() {
  var instagramUrl = 'https://api.example.com/instagram?callback=handleInstagram';
  var twitterUrl = 'https://api.example.com/twitter?callback=handleTwitter';
  var youtubeUrl = 'https://api.example.com/youtube?callback=handleYoutube';
  var weverseUrl = 'https://api.example.com/weverse?callback=handleWeverse';

  // Instagram
  var instagramScript = document.createElement('script');
  instagramScript.src = instagramUrl;
  document.body.appendChild(instagramScript);

  // Twitter
  var twitterScript = document.createElement('script');
  twitterScript.src = twitterUrl;
  document.body.appendChild(twitterScript);

  // Youtube
  var youtubeScript = document.createElement('script');
  youtubeScript.src = youtubeUrl;
  document.body.appendChild(youtubeScript);

  // Weverse
  var weverseScript = document.createElement('script');
  weverseScript.src = weverseUrl;
  document.body.appendChild(weverseScript);

  // spider
  var spiderUrl = 'https://api.example.com/spider?callback=handleYoutube';
  var spiderScript = document.createElement('script');
  spiderScript.src = spiderUrl;
  document.body.appendChild(spiderScript);

  // stay
  var stayUrl = 'https://api.example.com/stay?callback=handleYoutube';
  var stayScript = document.createElement('script');
  stayScript.src = stayUrl;
  document.body.appendChild(stayScript);

  // power
  var powerUrl = 'https://api.example.com/power?callback=handleYoutube';
  var powerScript = document.createElement('script');
  powerScript.src = powerUrl;
  document.body.appendChild(powerScript);
   // DAY6
  var DAY6Url = 'https://youtu.be/3Wcw9G_-dVc?si=8SptbvpzbcyPNOBM';
  var DAY6Script = document.createElement('script');
  DAY6Script.src = DAY6Url;
  document.body.appendChild(DAY6Script);
   // 10CM(CM10)
  var CM10Url = 'https://youtu.be/zo3NbtfzQlE?si=xybUMJFIfV0aktzq';
  var CM10Script = document.createElement('script');
  CM10Script.src = CM10Url;
  document.body.appendChild(CM10Script);
   // A1111
  var A1111Url = 'https://youtu.be/n4l3x0WOSEI?si=My8o1gPj3WiBClD-&t=319';
  var A1111Script = document.createElement('script');
  A1111Script.src = A1111Url;
  document.body.appendChild(A1111Script);
})

let zero = document.getElementById("hoshiiiii");
zero.addEventListener("mouseover",function(){
  this.src="https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/l.jpg?raw=true";
});
zero.addEventListener("mouseout",function(){
  this.src="https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/f.jpg?raw=true"
});

let zerooo = document.getElementById("hoshiiiii0");
zerooo.addEventListener("mouseover",function(){
  this.src="  https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/d.jpg?raw=true";
});
zerooo.addEventListener("mouseout",function(){
  this.src="https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/011011.jpg?raw=true"
});

let zero3 = document.getElementById("latte");
zero3.addEventListener("mouseover",function(){
  this.src="  https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/z.jpg?raw=true";
});
zero3.addEventListener("mouseout",function(){
  this.src="https://github.com/TPY3845/2024web112-2/blob/main/Hoshi/c.jpg?raw=true"
});