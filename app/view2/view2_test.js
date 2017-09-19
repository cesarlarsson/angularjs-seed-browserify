'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));
  
  var scope ={};
  describe('view2 controller', function(){

    var view2Ctrl;
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      view2Ctrl = $controller('View2Ctrl', {$scope:scope});
    }));
   
    
    it('should ....', inject(function($controller) {
      //spec body
      expect(view2Ctrl).toBeDefined();
    }));
    
    it("check view title",function(){
      
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Destination Admin");

    });

    it('should add 2 destionations to the destinations list', function(){
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestination= {
        city: "London",
        country: "England"
      }

      scope.addDestination();
      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");

    });

  });
});