'use strict';

(function (module) {
  var projects = [];

  function Project(projectData) {
    this.title = projectData.title;
    this.img = 'images/' + projectData.img,
    this.link = projectData.link;
    this.caption = projectData.caption;
  }

  // responsible for transferring project data to html via Handlebars.
  Project.prototype.toHtml = function() {
    var $newProject = $('#handlebarsTemplate').html();
    var compiled = Handlebars.compile($newProject);
    var html = compiled(this);
    $('#projects').append(html);
  };

  projectData.forEach(function(projectObj) {
    projects.push(new Project(projectObj));
  });

  projects.map(function(project) {
    $('#projects').append(project.toHtml());
  });

  module.Project = Project;
})();
