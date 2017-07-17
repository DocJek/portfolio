'use strict';

var projects = [];

function Project(projectData) {
  this.title = projectData.title;
  this.img = 'images/' + projectData.img,
  this.link = projectData.link;
  this.caption = projectData.caption;
}

// responsible for transferring project data to html
Project.prototype.toHtml = function() {
  var $newProject = $('article.projects').clone();
  $newProject.removeClass('projects');
  $newProject.find('h1').text(this.title);
  $newProject.find('a').attr('href', this.link).attr('target', '_blank');
  $newProject.find('img').attr('src', this.img);
  $newProject.find('footer').text(this.caption);
  $newProject.append('<hr>');
  return $newProject;
};

projectData.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#test').append(project.toHtml());
});
