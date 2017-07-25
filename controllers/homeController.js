'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.initializePage = function (){
    $('.tabContent').show();
  };

  module.homeController = homeController;
})(app);
