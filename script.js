let currentMusic = "";
let currentArtist = "";

const consoleStyle = "background-color:#1db954;color:#ffffff;font-size:150%;padding:5px;"

const displayNowPlaying = function () {
  let np = document.getElementsByClassName("now-playing")
  if (np[0]) {
    let nowPlayingMusicTitle = np[0].children[1].children[0].innerText;
    let nowPlayingArtistName = np[0].children[1].children[1].innerText;

    if (currentMusic != nowPlayingMusicTitle) {
      console.log(`%c♫ ${nowPlayingMusicTitle} (${nowPlayingArtistName})`,consoleStyle);
      chrome.runtime.sendMessage({
        music: nowPlayingMusicTitle,
        artist: nowPlayingArtistName
      });
      currentMusic = nowPlayingMusicTitle;
      currentArtist = nowPlayingArtistName;
    }
  }
}
setInterval(displayNowPlaying, 1000);