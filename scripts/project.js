'use strict';

function Project(title, img, link, caption) {
  this.title = title;
  this.img = 'images/' + img,
  this.link = link;
  this.caption = caption;
}

// responsible for rendering projects to webpage
Project.prototype.renderHtml = function() {
  var $templateStr = $('#handlebarsTemplate').html();
  var compiledString = Handlebars.compile($templateStr);
  var printToDom = compiled(this);
  $('#projects').append(printToDom);
};
