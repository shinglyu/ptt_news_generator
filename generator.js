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
    console.log('hi')
    var reader = new FileReader();
    reader.onload = function(e){
      console.log(e.target.result)
      parse(e.target.result)
    }.bind(this);
    reader.readAsText(e.target.files[0])
  })

//}

var parse = function(html){
  var doc = document.implementation.createHTMLDocument("example");
  doc.documentElement.innerHTML = html;
  var metas = doc.getElementsByClassName('article-meta-value')
  var author = metas[0].textContent
  var board = metas[1].innerHTML
  var title = metas[2].innerHTML
  var timePublished = metas[3].innerHTML
  var mainContent = doc.getElementById('main-content').childNodes[4].textContent
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
  console.log(author)
  console.log(board)
  console.log(title)
  console.log(timePublished)
  console.log(mainContent)
  console.log(comments)

  template = "網友 " + author + " 在PTT上PO文表示:「" + mainContent.replace(/\n\s*\n/g, ",", "g").trim() + "」,引起網友熱議。\n\n"
  for (var i = 0; i < 5; i++) {
    template += "網友 " + comments[i]['user'] + " 認為" + comments[i]['content'] + ", "
  }
  console.log(template)
  document.getElementById("main_article").innerHTML = template.replace("\n", "<br>", "g")
}
