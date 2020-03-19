chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let music = request.music;
  let artist = request.artist;
  let notificationName = 'nowplaying'+music+artist;
  chrome.notifications.create(notificationName, {
    type: 'basic',
    title: `${music} (${artist})`,
    iconUrl:'icon/128x128.png',
    message: 'Now Playing on Spotify',
    silent:true
  });
  chrome.notifications.clear(notificationName);
  return true;
});