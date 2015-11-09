function states($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./components/home/home.view.html')
    });
}

module.exports = states;