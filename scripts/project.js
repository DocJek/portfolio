'use strict';

function Project(title, img, link, caption) {
  this.title = title;
  this.img = 'images/' + img,
  this.link = link;
  this.caption = caption;
}

// responsible for rendering projects to webpage
Project.prototype.renderHtml = function() {
  var $templateString = $('#handlebarsTemplate').html();
  var compiled = Handlebars.compile($templateString);
  var html = compiled(this);
  $('#projects').append(html);
};

var projectList = [
  new Project('BusMall', 'busmall.png', 'https://docjek.github.io/busmall', 'Focus Group Data Collecting App'),
];
