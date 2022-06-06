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
const topPageBox = document.querySelector(".toppage-box");
const topPage = document.querySelector(".toppage");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  // activeにする
  menuToggle.classList.toggle("active");
  topPageBox.classList.toggle("active");
  topPage.classList.toggle("active");
  menu.classList.toggle("active");
  //menu.classList.toggle("active");
});

topPageBox.addEventListener("click", (e) => {
  if (topPageBox.classList.contains("active")) {
    //ここに外側をクリックしたときの処理
    topPageBox.classList.toggle("active");
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  }
});
