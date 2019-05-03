// var link = document.querySelector(".write-us");
// var popup = document.querySelector(".modal-feedback");
// var close = popup.querySelector(".modal-close");
//
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
// });
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
// });
//
// var maplink = document.querySelector(".index-map");
// var mappopup = document.querySelector(".modal-map");
// var mapclose = mappopup.querySelector(".modal-close");
//
// maplink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mappopup.classList.add("modal-show");
// });
// mapclose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mappopup.classList.remove("modal-show");
// });


var close = document.querySelector(".page-header__button-close");
var open = document.querySelector(".page-header__button-burger");
var siteList = document.querySelector(".site-list");
var userList = document.querySelector(".user-list");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.style.display = "none";
  close.style.display = "block";
  siteList.style.display = "flex";
  userList.style.display = "flex";
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  open.style.display = "block";
  close.style.display = "none";
  siteList.style.display = "none";
  userList.style.display = "none";
});
//
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   userList.style.display = "none";
// });

// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   siteList.style.display = "flex";
// });


//
// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   userList.style.display = "flex";
// });
