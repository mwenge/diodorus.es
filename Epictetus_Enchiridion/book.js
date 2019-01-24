var translations = [];
var translatedSection = null;
var current = 0;

function updateScrollPosition() {
  var book = titleElements[0] + titleElements[1];
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log(page)

  var bookmarkedPageFieldName = book + "Page";
  var bookmarkedPage = localStorage.getItem(bookmarkedPageFieldName);
  if (bookmarkedPage == null) {
    localStorage.setItem(bookmarkedPageFieldName, page);
  }

  var pageOfBook = page.replace(".html", "");
  var positionOnPage = pageOfBook + "ScrollPosition";

  var scrollPosition = localStorage.getItem(positionOnPage);
  if (scrollPosition == null) {
    scrollPosition = window.pageYOffset;
    localStorage.setItem(positionOnPage, scrollPosition);
    return;
  }

  if (bookmarkedPage == page) {
    window.scrollTo(0, scrollPosition)
    return;
  }
  window.location = bookmarkedPage;
}

function storeScrollPosition() {
  var book = titleElements[0] + titleElements[1];
  var path = window.location.pathname;
  var page = path.split("/").pop();
  localStorage.setItem(book + "Page", page);

  var pageOfBook = page.replace(".html", "");
  var positionOnPage = pageOfBook + "ScrollPosition";
  scrollPosition = window.pageYOffset;
  localStorage.setItem(positionOnPage, scrollPosition);
}

function showNextOnHelper(evt) {
  current++;
  if (current > translations.length - 1) {
    current = 0;
  }
  var translation = translations[current];
  var innerHTML = "<span class=\"helper\"><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
    + translation[0] + ",</span> " + translation[1] + "</span>";
  helper.innerHTML = innerHTML;
  if (translations.length > 1) {
    var transCount = document.createElement("span");
    transCount.id = 'transCount';
    transCount.textContent = (current + 1) + "/" + translations.length;
    helper.appendChild(transCount);
  }
}

function updateHelper(evt, lineNumber, translationsForWord) {
  if (typeof updateHelper.currentWord === 'object') {
    updateHelper.currentWord.style.textDecoration = "none";
  }
  
  if (evt.target == updateHelper.currentWord) {
    displayTranslation(lineNumber);
    return;
  }

  evt.target.style.textDecoration = "underline red";
  updateHelper.currentWord = evt.target;

  if (typeof updateHelper.previousCommentBubble === 'object' 
      && updateHelper.previousCommentBubble != null) {
    updateHelper.previousCommentBubble.style.display = "none";
  }
  var commentBubble = document.getElementById("indicator-" + lineNumber);
  if (commentBubble != null) {
    commentBubble.style.display = "inline";
  }
  updateHelper.previousCommentBubble = commentBubble;

  showTitle(lineNumber);


  translations = translationsForWord;
  var translation = translations[0];
  var innerHTML = "<span class=\"helper\"><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
    + translation[0] + ",</span> " + translation[1] + "</span>";
  helper.innerHTML = innerHTML;
  helper.style.display = "block";

  if (translations.length > 1) {
    var transCount = document.createElement("span");
    transCount.id = 'transCount';
    transCount.textContent = "1/" + translations.length;
    helper.appendChild(transCount);
  }

  storeScrollPosition();
}

function showTitle(lineNumber) {
  var page = parseInt(parseInt(lineNumber, 10) / 100, 10);
  if (isNaN(page)) {
    return;
  }
  var result = page % 2;
  
  var titleToShow = titleElements[result];
  var innerHTML = "<span class=\"title\">" + titleToShow + "</span>";
  masthead.innerHTML = innerHTML;
}

function displayTranslation(line) {
  if (translatedSection) {
    translatedSection.style.backgroundColor = "";
  }
  translatedSection = document.getElementById(line);
  translatedSection.style.backgroundColor = "yellow";
  parallel_translation.innerHTML = atobUTF8(translation[line]);
  parallel_translation.style.display = "block";
}

function hideTranslation() {
  translatedSection.style.backgroundColor = "";
  parallel_translation.style.display = "none";
}


function displayComment(line) {
  comment.innerHTML = atobUTF8(commentary[line]);
  comment.style.display = "block";
}

function hideComment() {
  comment.style.display = "none";
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

window.onload = updateScrollPosition;

var translation={}
