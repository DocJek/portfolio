'use strict';

function Project(projectData) {
  this.title = projectData.title;
  this.img = 'images/' + projectData.img,
  this.link = projectData.link;
  this.caption = projectData.caption;
}

// responsible for rendering projects to webpage
Project.prototype.renderHtml = function() {
  var $newProject = $(project.template).clone();
}
