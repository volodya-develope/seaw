$(function() {
  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('open')
  })
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list-active')
  })
})