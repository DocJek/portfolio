'use strict';
var app = app || {};

(function(module) {
  module.aboutController = function (){
    $('.tabContent').hide();
    $('#about').fadeIn(1000);
  };


})(app);
