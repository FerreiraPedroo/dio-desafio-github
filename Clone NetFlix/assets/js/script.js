let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 't8bBDAemrWI',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}


const closeModal = () => {
  console.log("CLOSE")
  document.getElementById("player-modal").style.display = "none";
  stopVideo()
}
const openModal = () => {
  document.getElementById("player-modal").style.display = "flex";
}
