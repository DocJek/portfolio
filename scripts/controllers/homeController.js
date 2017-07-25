'use strict';
var app = app || {};

(function(module) {
  module.homeController= function (){
    $('section').hide();
    $('.tabContent').fadeIn(1000);
  };


})(app);
