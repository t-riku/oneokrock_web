// 音量
const upButton = document.querySelector(".up-btn");
const muteButton = document.querySelector(".mute-btn");
const videoVolume = document.querySelector(".videoVolume");

muteButton.addEventListener("click", function () {
  muteButton.classList.toggle("muted");
  upButton.classList.toggle("muted");
  videoVolume.muted = false;
});

upButton.addEventListener("click", function () {
  muteButton.classList.toggle("muted");
  upButton.classList.toggle("muted");
  videoVolume.muted = true;
});

// ハンバーガーメニュー
const menuToggle = document.querySelector(".toggle");
const topPage = document.querySelector(".toppage");

menuToggle.addEventListener("click", function () {
  // activeにする
  menuToggle.classList.toggle("active");
  topPage.classList.toggle("active");
});
