'use strict';
var app = app || {};

(function(module) {
  module.aboutController = function (){
    $('.tabContent').hide();
    $('#about').fadeIn(1000);
    console.log(app);
    app.repos.repoPullRequest(app.repoView.index);
  };


})(app);
