/*
var url = "https://www.ptt.cc/bbs/Gossiping/M.1439891120.A.FE3.html"
var corsproxy = "http://crossorigin.me/"
fetch(corsproxy + url).then(function(resp){
  return resp.text()
}).then(function(resp){
  var doc = document.implementation.createHTMLDocument("example");
  doc.documentElement.innerHTML = resp;
  console.log(resp)
  console.log(doc.getElementById('main-content'))

})
*/

//window.onload = function(){
document.getElementById('file').addEventListener('change', function(e){
  //console.log('hi')
  var reader = new FileReader();
  reader.onload = function(e){
    //console.log(e.target.result)
    parse(e.target.result)
  }.bind(this);
  reader.readAsText(e.target.files[0])
})

//}
  //

function getRandomPushes(n, pushes){
  var indexes = []
  while (indexes.length < n) {
    var rand = Math.floor(Math.random() * (pushes.length))
    if (indexes.indexOf(rand) < 0){
      indexes.push(rand)
    }
  }
  console.log(indexes)

  selectedPushes = []
  for (var i = 0; i < indexes.length; i++){
    selectedPushes[i] = pushes[indexes[i]];
  }
  console.log(selectedPushes)
  return selectedPushes
}

var parse = function(html){
  var doc = document.implementation.createHTMLDocument("example");
  doc.documentElement.innerHTML = html;
  var metas = doc.getElementsByClassName('article-meta-value')
  var author = metas[0].textContent
  var board = metas[1].innerHTML
  var title = metas[2].innerHTML
  var timePublished = metas[3].innerHTML
  var originalLink= doc.getElementsByClassName('fb-like')[0].dataset['href']
  //var allContent = doc.getElementById('main-content').cloneNode(false).textContent;
  var allContent = $('#main-content',doc).clone().children().remove().end().text();
  console.log(doc.getElementById('main-content').childNodes)
  //var allContent = doc.getElementById('main-content').textContent
  var commentsDom = doc.getElementsByClassName('push')
  var comments = []
  for (var i = 0; i < commentsDom.length; i++) {
    var comment = {}
    comment['type'] = commentsDom[i].getElementsByClassName('push-tag')[0].textContent;
    comment['user'] = commentsDom[i].getElementsByClassName('push-userid')[0].textContent;
    comment['content'] = commentsDom[i].getElementsByClassName('push-content')[0].textContent;
    comment['time'] = commentsDom[i].getElementsByClassName('push-ipdatetime')[0].textContent;
    comments.push(comment)
  }
  /*
  console.log(author)
  console.log(board)
  console.log(title)
  console.log(timePublished)
  console.log(allContent)
  console.log(comments)
  */

  template = ""
  
  template += "<h2>網路瘋傳：「 " + title+ "」，網友都驚呆了！</h2>"
  template += "<footnote>本報訊 | " + (new Date()).toLocaleString() + "</footnote><br/><br/>"
  template += "網友 " + author + " 在PTT上PO文表示:「" + allContent.replace(/\n\s*/g, ",").trim() + "」,引起網友熱議。\n\n"
  var pushCount = 5
  var selectedComments = getRandomPushes(5, comments)
  for (var i = 0; i < selectedComments.length; i++) {
    template += "網友 " + selectedComments[i]['user'] + " 認為" + selectedComments[i]['content'] + ", "
  }

  template += "\n\n"
  var selectedComments = getRandomPushes(5, comments)
  for (var i = 0; i < selectedComments.length; i++) {
    template += "網友 " + selectedComments[i]['user'] + " 認為" + selectedComments[i]['content'] + ", "
  }
  template += "<br/><br/>"
  template += "原文出處： <a href='" + originalLink + "'>" + originalLink + "</a>";
  console.log(template)
  document.getElementById("main_article").innerHTML = template.replace(/\n/g, "<br>", "g")
}

parse(examples[0])
