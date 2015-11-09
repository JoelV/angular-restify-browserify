require('angular');
require('angular-ui-router/release/angular-ui-router.js');


angular.module('w2w', ['ui.router'])
  .config(require('./states'))
  ;