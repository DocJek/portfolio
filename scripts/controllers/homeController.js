'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.initializePage = function (){
    $('.tabContent').fadeIn(1000);
  };

  module.homeController = homeController;
})(app);
