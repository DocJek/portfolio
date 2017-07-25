'use strict';
var app = app || {};

page('/projects', app.projectsController.initializePage);
page('/about', app.aboutController.initializePage);
page('/', app.homeController.initializePage);

page();
