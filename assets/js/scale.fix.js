"use strict";

const metas = document.getElementsByTagName("meta");

function updateViewportContent(content) {
  console.log(content);
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = content;
    }
  }
}

function initialize() {
  updateViewportContent(
    "width=device-width, minimum-scale=1.0, maximum-scale=1.0"
  );
}

function gestureStart() {
  updateViewportContent(
    "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
  );
}

if (navigator.userAgent.match(/iPhone/i)) {
  initialize();
  document.addEventListener("touchstart", gestureStart, false);
  document.addEventListener("touchend", initialize, false);
}
