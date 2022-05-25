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
const topPage = document.querySelector(".toppage-box");
const menuZ = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  // activeにする
  menuToggle.classList.toggle("active");
  topPage.classList.toggle("active");
  menuZ.classList.toggle("active");
});

// topPage.addEventListener("click", function () {
//   // if (menuToggle.hasClass("active")) {
//   //   menuToggle.removeClass("active");
//   //   topPage.removeClass("active");
//   // }
//   if (menuToggle.hasClass("active")) {
//     menuToggle.classList.toggle("active");
//     topPage.classList.toggle("active");
//   }
// });

// const aa = document.querySelector(".toppage-box.active");

// aa.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("active")) {
//     //ここに外側をクリックしたときの処理
//     menuToggle.classList.remove("active");
//     topPage.classList.remove("active");
//   }
// });
// topPage.addEventListener("click", (e) => {
//   if (!e.target.closest(".toggle")) {
//     //ここに外側をクリックしたときの処理
//     menuToggle.classList.toggle("active");
//     topPage.classList.toggle("active");
//   }
// });

// jQuery(document).ready(function ($) {
//   $(".toppage").click(function () {
//     //ここでnavの部分がactiveクラスを持っているか確認
//     if (menuToggle.hasClass("active")) {
//       $(".toggle").removeClass("active");
//     }
//   });
// });
