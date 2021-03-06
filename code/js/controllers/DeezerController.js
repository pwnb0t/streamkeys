;(function() {
  "use strict";

  var BaseController = require("BaseController");

  var isNew = document.querySelector("#loading_bar") !== null;

  new BaseController({
    siteName: "Deezer",
    play: ".control.control-play",
    pause: ".control.control-pause",
    playNext: ".control.control-next",
    playPrev: ".control.control-prev",
    mute: ".icon-volume-off",
    like: ".player-actions .icon-love",
    dislike: ".player-actions .icon-unlove",
    buttonSwitch: isNew,

    song: ".player-track-title > span",
    artist: ".heading-2-sub span.player-track-link"
  });
})();
