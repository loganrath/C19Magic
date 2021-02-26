var seconds = 15;

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var message = document.getElementById('message');


start.addEventListener('click', function()
{
  seconds = 15;
  console.log(seconds);

  if(seconds > 0)
  {
    chrome.tabs.query({active : true, currentWindow: true}, function (tabs)
    {

      chrome.runtime.sendMessage({method: "start", tabID: tabs[0].id, seconds: seconds }, function(response)
      {
         message.innerText = "Started";
         message.setAttribute("style", "color:green");
      });

    });
  }
}, false);

stop.addEventListener('click', function()
{

  chrome.tabs.query({active : true, currentWindow: true}, function (tabs)
  {

    chrome.runtime.sendMessage({method: "stop", tabID: tabs[0].id, seconds: seconds }, function(response)
    {
      message.innerText = "Stopped";
      message.setAttribute("style", "color:red");
    });

  });

}, false);
