'use strict';

describe('GitClone controllers', function() {

  describe('GitUserCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('gitcloneApp'));
    beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/users').respond([{login: 'a1',
      id: '25',
      avatar_url: 'http://test'},
      {login: 'a1',
      id: '25',
      avatar_url: 'this is a magic line of words.'}]);

      scope = $rootScope.$new();
      ctrl = $controller('GitUserCtrl', {$scope:scope});
    }));

    it('should return list of "users"', function() {
      expect(scope.users).toBeUndefined();
      $httpBackend.flush();

      expect(scope.users.length).toBe(2);

    });
  });
});


















