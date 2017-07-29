'use strict';

var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.repoPullRequest = function(callback) {
    $.ajax(
      {
        url: 'https://api.github.com/users/docjek/repos',
        method: 'GET',
        headers: {
          Authorization: `token ${githubToken}`
        }
      })
      .then(
        function (data) {
          repos.all = data.map(repo => ({
            name: repo.name,
            description: repo.description,
            created: repo.created_at,
          }));
          callback();
        }
      );
  };

  module.repos = repos;
})(app);
