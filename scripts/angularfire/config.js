angular.module('firebase.config', [])
  .constant('FBURL', 'https://glowing-torch-4513.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook'])

  .constant('loginRedirectPath', '/login');
