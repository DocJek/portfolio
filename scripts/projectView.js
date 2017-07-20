'use strict';

var projectView = {};

projectView.handleNavBar = function() {
  $('.navbar').on('click', '.tab', function() {
    $('.tabContent').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.navbar .tab:first').click()
}

//
//   $('.main-nav').on('click', '.tab', function() {
//     $('.tab-content').hide();                     // hide everything on the click event
//     $('#' + $(this).data('content')).show();       // then show just what was wanted
//   });
//
//   $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
// };
