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
  var innerHTML = "<span><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
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
    updateHelper.currentWord.style.backgroundColor = "transparent";
  }
  
  if (evt.target == updateHelper.currentWord) {
    if (displayTranslation(lineNumber) || displayComment(lineNumber)) {
      return;
    }
  }

  evt.target.style.backgroundColor = "rgba(218,112,214, 0.5)";
  updateHelper.currentWord = evt.target;

  translations = translationsForWord;
  var translation = translations[0];
  var innerHTML = "<span><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
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

function showTitle(ignore) {
  var author = titleElements[0];
  var title = titleElements[1];
  var innerHTML = "<span class=\"author\">" + author + "&nbsp;</span>";
  innerHTML += "<span class=\"title\">" + title + "</span>";
  masthead.innerHTML = innerHTML;
}

// Gets overwritten by actual translations
var translation = {}
var commentary = {}
function displayTranslation(refs) {
  if (translatedSection) {
    for (var i = 0; i < translatedSection.length; i++) {
        translatedSection[i].style.backgroundColor = "";
    }
  }
  translatedSection = null;
  for (var i = 0; i < refs.length; i++) {
    var ref = refs[i];
    translatedSection = document.getElementsByClassName(ref);
    if (translatedSection)
      break;
  }
  if (!translatedSection) {
    return false;
  }
  if (!translation.hasOwnProperty(ref)) {
    return false;
  }
  for (var i = 0; i < translatedSection.length; i++) {
      translatedSection[i].style.backgroundColor = "yellow";
  }
  parallel_translation.innerHTML = atobUTF8(translation[ref]);
  parallel_translation.style.display = "block";
  return true;
}

function hideTranslation() {
  for (var i = 0; i < translatedSection.length; i++) {
      translatedSection[i].style.backgroundColor = "";
  }
  parallel_translation.style.display = "none";
}

function displayComment(line) {
  if (!commentary[line]) {
    return false;
  }
  comment.innerHTML = atobUTF8(commentary[line]);
  comment.style.display = "block";
  return true;
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
