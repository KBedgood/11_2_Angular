describe('my app', function() {
  beforeEach(module('lecture'));

  describe('user service', function() {
    var userService;
      this.timeout(15000);

    beforeEach(inject(function(_$httpBackend_,API) {
      apiService = API;
      $httpBackend = _$httpBackend_;

      $httpBackend
        .whenGET('http://api.icndb.com/jokes/random/')
        .respond({
          "type": "success",
          "value": {
            "id": 431,
            "joke": "Rules of fighting: 1) Don't bring a knife to a gun fight. 2) Don't bring a gun to a Chuck Norris fight.",
            "categories": []
          }
        });
    }));

    it('should be able to log in a user', function(done) {
      this.timeout(3000);
      var result = apiService.getBlogs();
      result.should.be.a.object;
      result.then.should.be.a.function;


      result
        .then(function(joke) {
          joke.data.value.joke.should.equal("Rules of fighting: 1) Don't bring a knife to a gun fight. 2) Don't bring a gun to a Chuck Norris fight.");
          done();
        },function(){
          done();
        })
        .catch(done);

        $httpBackend.flush();

    });

  });
});