'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));
  
  var scope ={};
  var httpBackend, timeout;
  describe('view2 controller', function(){

    var view2Ctrl;
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      view2Ctrl = $controller('View2Ctrl', {$scope:scope});
      httpBackend =$httpBackend;
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

    it('should update the weather for a specific destination', function() {
      scope.destination =
      {
        city : "Melbourne",
        country: "Australia"
      };

      httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?q="+ scope.destination.city +"&APPID=" + scope.key).respond(
        {
          weather: [{main : 'Rain', detail : 'Light rain'}],
          main : { temp : 288 }
        }
      );
  
      scope.getWeather(scope.destination);
  
      httpBackend.flush();
  
      expect(scope.destination.weather.main).toBe("Rain");
      expect(scope.destination.weather.temp).toBe(15);
    });

  });
});