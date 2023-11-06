/*=========================================================================================
    File Name: app-faq.js
    Description: app-faq
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

'use strict';

$(function () {

  var
    addArticleBtn = $('.add-article button'),
    overlay = $('.body-content-overlay'),
    menuToggle = $('.menu-toggle'),
    sidebarToggle = $('.sidebar-toggle'),
    sidebarLeft = $('.sidebar-left'),
    sidebarMenuList = $('.sidebar-menu-list'),
    faqFilter = $('#faq-search'),
    faqArticleListWrapper = $('.faq-article-list-wrapper'),
    listItemFilter = $('.list-group-filters'),
    noResults = $('.no-results'),
    isRtl = $('html').attr('data-textdirection') === 'rtl';

  // if it is not touch device
  if (!$.app.menu.is_touch_device()) {

    if (sidebarMenuList.length > 0) {
      var sidebarListScrollbar = new PerfectScrollbar(sidebarMenuList[0], {
        theme: 'dark'
      });
    }

    if (faqArticleListWrapper.length > 0) {
      var articleListScrollbar = new PerfectScrollbar(faqArticleListWrapper[0], {
        theme: 'dark'
      });
    }

  }
  // if it is a touch device
  else {
    sidebarMenuList.css('overflow', 'scroll');
    faqArticleListWrapper.css('overflow', 'scroll');
  }

  // Add class active on click of sidebar filters list
  if (listItemFilter.length) {
    listItemFilter.find('a').on('click', function () {
      if (listItemFilter.find('a').hasClass('active')) {
        listItemFilter.find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  // Main menu toggle should hide app menu
  if (menuToggle.length) {
    menuToggle.on('click', function (e) {
      sidebarLeft.removeClass('show');
      overlay.removeClass('show');
    });
  }

  // faq sidebar toggle
  if (sidebarToggle.length) {
    sidebarToggle.on('click', function (e) {
      e.stopPropagation();
      sidebarLeft.toggleClass('show');
      overlay.addClass('show');
    });
  }

  // On Overlay Click
  if (overlay.length) {
    overlay.on('click', function (e) {
      sidebarLeft.removeClass('show');
      overlay.removeClass('show');
    });
  }

  // On add new item button click, clear sidebar-right field fields
  if (addArticleBtn.length) {
    addArticleBtn.on('click', function (e) {

    });
  }

  // Filter article
  if (faqFilter.length) {
    faqFilter.on('keyup', function () {
      var value = $(this).val().toLowerCase();
      if (value !== '') {
        $('.faq-item').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        var tbl_row = $('.faq-item:visible').length; //here tbl_test is table name

        //Check if table has row or not
        if (tbl_row == 0) {
          if (!$(noResults).hasClass('show')) {
            $(noResults).addClass('show');
          }
        } else {
          $(noResults).removeClass('show');
        }
      } else {
        // If filter box is empty
        $('.faq-item').show();
        if ($(noResults).hasClass('show')) {
          $(noResults).removeClass('show');
        }
      }
    });
  }

  // For chat sidebar on small screen
  if ($(window).width() > 992) {
    if (overlay.hasClass('show')) {
      overlay.removeClass('show');
    }
  }
});

$(window).on('resize', function () {
  // remove show classes from sidebar and overlay if size is > 992
  if ($(window).width() > 992) {
    if ($('.body-content-overlay').hasClass('show')) {
      $('.sidebar-left').removeClass('show');
      $('.body-content-overlay').removeClass('show');
      $('.sidebar-faq-modal').modal('hide');
    }
  }
});
