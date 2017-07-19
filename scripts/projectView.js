'use strict';

var projectView = {};

projectView.handleNavBar = function() {
  $('.navbar').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.navbar .tab:first').click()
}
