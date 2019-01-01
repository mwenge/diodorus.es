var translations = [];
var current = 0;
var forceDisplayOfTitleOnScroll = false;

function showNextOnHelper(evt) {
  current++;
  if (current > translations.length - 1) {
    current = 0;
  }
  var translation = translations[current];
  var innerHTML = "<span class=\"translation\"><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
    + translation[0] + ",</span> " + translation[1] + "</span>";
  helper.innerHTML = innerHTML;
  if (translations.length > 1) {
    var transCount = document.createElement("span");
    transCount.id = 'transCount';
    transCount.textContent = (current + 1) + "/" + translations.length;
    helper.appendChild(transCount);
  }
}

function updateHelper(evt, translationsForWord) {
  if (typeof updateHelper.currentWord === 'object') {
    updateHelper.currentWord.style.textDecoration = "none";
  }
  evt.target.style.textDecoration = "underline red";
  updateHelper.currentWord = evt.target;

  var lastChild = evt.target.parentNode.lastChild.previousSibling;
  if (lastChild.className == "line-number") {
    var lineNumber = lastChild.textContent;
    showTitle(lineNumber);
  }


  translations = translationsForWord;
  var translation = translations[0];
  var innerHTML = "<span class=\"translation\"><span style='font-weight: bold; font-family:\"GFS Didot\"'>"
    + translation[0] + ",</span> " + translation[1] + "</span>";
  helper.innerHTML = innerHTML;
  helper.style.display = "block";

  if (translations.length > 1) {
    var transCount = document.createElement("span");
    transCount.id = 'transCount';
    transCount.textContent = "1/" + translations.length;
    helper.appendChild(transCount);
  }
}

function showTitle(lineNumber) {
  var page = parseInt(parseInt(lineNumber, 10) / 100, 10);
  if (isNaN(page)) {
    return;
  }
  var result = page % 2;
  console.log(page, lineNumber, result);
  
  var titleToShow = titleElements[result];
  var innerHTML = "<span class=\"title\">" + titleToShow + "</span>";
  masthead.innerHTML = innerHTML;
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
