/**
 * Removes iframe in Chrome to prevent two songs from playing
 */
$(document).ready(() => {
  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome) {
    $('#iframeAudio').remove();
  } else {
    $('#playAudio').remove();
  }
});
