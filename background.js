chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let nowPlaying = request.nowPlaying;
  chrome.notifications.create('nowmusic', {
    type: 'basic',
    title: 'Now Playing on Spotify',
    iconUrl:'icon/128x128.png',
    message: nowPlaying,
    silent:true
  });
  chrome.notifications.clear('nowmusic');
  return true;
});