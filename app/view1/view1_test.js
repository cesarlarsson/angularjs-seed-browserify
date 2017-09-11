/* 'use strict';
require('../app');

describe('myApp.view1 module', function() {
  beforeEach(module('templates'));
  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
}); */

require('./view1.js');

describe('myApp.view1 module', function() {
  beforeEach(module('myApp.view2'));
  beforeEach(module('karma.templates'));

  var a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });


  });