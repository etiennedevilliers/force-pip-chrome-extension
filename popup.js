document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('firePIP');
  btn.addEventListener('click', function() {

    chrome.tabs.executeScript(null, {
        code: "document.getElementsByTagName(\"video\")[0].requestPictureInPicture()"
    })
  }, false);
}, false);