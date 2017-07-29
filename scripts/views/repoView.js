'use strict';
var app = app || {};

(function(module) {
  const repoView = {};
  const ui = function() {
    $('.tabContent').hide();
    $('#about').fadeIn(1000);
  };

  let render = Handlebars.compile($('#repo-template').html());
  repoView.index = function() {
    ui();

    $('#about ul').append(app.repos.all.map(render));
  };

  module.repoView = repoView;
})(app);
