'use strict';
var app = app || {};

(function(module) {
  const repoView = {};
  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  let render = Handlebars.compile($('#repo-template').html());
  repoView.index = function() {
    ui();

    $('#about ul').append(app.repos.all.map(render));
  };

  module.repoView = repoView;
})(app);
