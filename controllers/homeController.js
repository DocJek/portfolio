'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.initializePage = function (){
    $('#projects').show();
    $('#about').show();
  };

  module.homeController = homeController;
})(app);
