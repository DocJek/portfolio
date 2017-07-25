'use strict';

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

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

Project.all = [];

Project.loadAll = function() {
  projectData.forEach(function(element) {
    Project.all.push(new Project(element));
  });
};

Project.fetchAll = function() {
  if (localStorage.projectData) {
    var lsproj = JSON.parse(localStorage.projectData);
    Project.loadAll(lsproj);

  } else {
    $.getJSON('data/projectData.json').then(function (data) {
      localStorage.setItem('projectData', JSON.stringify(data));
      Project.fetchAll();
    });
  }
};
