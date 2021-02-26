var polling = false;
var seconds = 10;
var tabID = 0;
chrome.browserAction.setBadgeText({text: ""});

function poll()
{
	if(polling == true)
	{
		chrome.tabs.reload(tabID, callback);
		chrome.browserAction.setBadgeText({text: "on"});
		setTimeout(poll, 10000);
	}
};


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if (request =="play") {
		var myAudio = new Audio(chrome.runtime.getURL("sound.mp3"));
		myAudio.play();
		tabID = request.tabID;
		chrome.browserAction.setBadgeText({text: ""});
		polling = false;
		}

	if (request=="notify") {
		chrome.notifications.create({title: "C19 Alert -- Appointment Available", message: "There is an appointment available", iconUrl: "icon.png", type: "basic"})
	}


	if (request=="notifydate") {
		chrome.notifications.create({title: "Specific Date Available", message: "There is an appointment available", iconUrl: "icon.png", type: "basic"})
	}

 if (request.method == "start")
    {
    	seconds =  request.seconds;
    	tabID =  request.tabID;
       	polling = true;
		poll();
    }

    if (request.method == "stop")
    {
    	seconds =  request.seconds;
    	tabID =  request.tabID;
			chrome.browserAction.setBadgeText({text: ""});
    	polling = false;
    }

});

function callback() {
    if (chrome.runtime.lastError)
    {
        console.log(chrome.runtime.lastError.message);
        polling = false;
    }
    else
    {

    }
}
