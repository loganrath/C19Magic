$( document ).ready(function() {
  if ($("#Marker0Div").length == 0) {
  } else {
    chrome.runtime.sendMessage("play");
    chrome.runtime.sendMessage("notify");
    ClickIt();
  }

function ClickIt(){
	$("#Marker0Div button").click();
}

});
