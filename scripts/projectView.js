'use strict';

var projectView = {};

projectView.handleNavBar = function() {
  $('#projects').fadeIn(2500);
  $('.navbar').on('click', '.tab', function() {
    console.log($(this).data('content'));
    $('.tabContent').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.navbar .tab:first').click()
}

$(document).ready(function() {
  projectView.handleNavBar();
});
