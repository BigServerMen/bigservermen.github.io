var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		events: {
			"onReady": function(event) {
				event.target.setPlaybackQuality("hd1080");
				event.target.playVideo();
			},
			"onStateChange": function(event) {
				if(event.data == YT.PlayerState.ENDED) {
					event.target.seekTo(0);
					event.target.playVideo();
				}
			}
		}
	});
}
