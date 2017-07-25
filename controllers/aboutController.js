'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.initializePage = function (){
    $('.tab-content').hide();
    $('#about').fadeIn(1000);
  };

  module.aboutController = aboutController;
})(app);
