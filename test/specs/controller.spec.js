describe('Testing header', function() {
  beforeEach(module('lecture'));

  describe('controller testing', function() {
    var userService;

    beforeEach(inject(function($controller) {
      loginCtrl = $controller('HeaderController');
      
    }));

    it('should test controller', function(done) {
      loginCtrl.getName().should.equal('Jake');
      done();
    });

  });
});