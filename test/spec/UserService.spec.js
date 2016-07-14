/* globals testUtils */
describe('Service: User', function () {
  'use strict';

  var scope, UserService;

  testUtils().testSetup({
    'moduleName': 'UserModule',
    'translations': {
      'User': {
        'name': {
          'first': 'Luke'
        }
      }
    }
  });

  beforeEach(inject(function ($rootScope, _UserService_) {
    scope = $rootScope;
    UserService = _UserService_;
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should correctly say hello', function () {
    expect(UserService.sayHello()).toEqual('hello Luke');
  });
});
