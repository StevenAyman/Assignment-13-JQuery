"use strict";
const aside = $("aside");
const asideWidth = aside.innerWidth();

// To hide and show the aside
$(".icon").click(function () {
  if (aside.css("left") === "-230px") {
    aside.animate({ left: "0" }, 500);

    $(".main-section").css("transform", `translateX(${asideWidth}px)`);
    $(this).css("transform", `translateX(${asideWidth}px)`);
  } else {
    aside.animate({ left: "-230px" }, 500);
    $(".main-section").css("transform", `translateX(${0}px)`);
    $(this).css("transform", `translateX(${0}px)`);
  }
});

// To only hide the aside
$("aside i:first-child").click(function () {
  aside.animate({ left: "-230px" }, 500);
  $(".main-section").css("transform", `translateX(${0}px)`);
  $(".icon").css("transform", `translateX(${0}px)`);
});

// To add event on accordion elements
$("h2").click(function () {
  // Check if the the clicked elements is the active or not
  if (!$(this).next().hasClass("active")) {
    $(".active").slideToggle(1000);
    $(".active").removeClass("active");
    $(this).next().addClass("active").slideDown(1000);
  } else {
    $(".active").slideToggle(1000);
    $(".active").removeClass("active");
  }
});

function timer(date = "2023-4-30") {
  const timeLeft = new Date(date).getTime() - new Date().getTime();
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  $(".card").eq(0).html(`${days} D`);
  $(".card").eq(1).html(`${hours} h`);
  $(".card").eq(2).html(`${minutes} m`);
  $(".card").eq(3).html(`${seconds} s`);
}

setInterval(timer, 1000);
const maxCharacters = 100;
$("textarea").keyup(function () {
  let leftCharacters = maxCharacters - $(this).val().length;
  if (leftCharacters >= 1) {
    $("form p span").text(leftCharacters);
  } else {
    $("form p span").text("your available character finished");
  }
});

$("aside li a").click(function () {
  const clickedElemHref = $(this).attr("href");
  const sectionFromTop = $(clickedElemHref).offset().top;
  $("html, body").animate({ scrollTop: sectionFromTop }, 1500);
});
