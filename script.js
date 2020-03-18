let currentMusic = "";
const displayNowPlaying = function () {
  let np = document.getElementsByClassName("now-playing")
  let nowPlayingFromDOM = np[0].getAttribute("aria-label");
  if (currentMusic != nowPlayingFromDOM) {
    console.log(nowPlayingFromDOM);
    currentMusic = nowPlayingFromDOM;
    chrome.runtime.sendMessage({
      nowPlaying: nowPlayingFromDOM
    });
  }
}
setInterval(displayNowPlaying, 1000);