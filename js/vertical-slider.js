$(function () {
  'use strict';

  var
         newsList = $('.news-headlines'),
    newsListItems = $('.news-headlines li'),
          indexEl = 1;

  newsList.append('<li class="highlight nh-anim"></li>');
  newsListItems.addClass('nh-anim');

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      indexEl = $(this).index() + 1;

      $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
      $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');
    });

  }

  function doWindowResize() {

    $(window).resize(function () {
      $('.selected').trigger('click');
    });

  }

  doClickItem();
  doWindowResize();
  $('.selected').trigger('click');

});