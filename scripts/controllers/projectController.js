'use strict';

var app = app || {};

(function (module){
  const projectController = {};
  projectController.initializePage = function () {
    $('.tabContent').hide();
    $('#projects').fadeIn(1000);
  }
  app.Project.fetchAll();

  module.projectController = projectController;
})(app);
