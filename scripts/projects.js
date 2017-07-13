'use strict';

function Project(name) {
  this.title = Project.title;
  this.deployed = Project.deployed;
}

Project.prototype.renderHtml() {
  var $newProject = $('project.template').clone();
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);
}
