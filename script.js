// TOGGLE MENU
$(function() {
  $(".menu__toggle").click(function() {
    $(".menu__items").toggleClass("menu__items--display");
    $(this)
      .find("a")
      .html("<i class='fas fa-bars'></i>");

    if ($(".menu__items").hasClass("menu__items--display")) {
      $(this)
        .find("a")
        .html("<i class='fas fa-times'></i>");
    }
  });
});

// VANILLA JS SWIPER NOW REPLACED WITH SWIPER.JS

// const slider = document.querySelector(".swiper__cards");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });
