'use strict';
var app = app || {};

page('/projects', app.projectController);
page('/about', app.aboutController);
page('/', app.homeController);

page();
