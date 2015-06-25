// spec.js
describe('Protractor Nav', function() {
	var nav = element(by.css('.nav');
	var navBarOptions = element.all(by.css('.nav-options');

	beforeEach(function(){
		browser.get('http://localhost:8080/')
});

  it('should have a nav bar', function() {
  	expect(navBar.isPresent()).toBe(true)
  });


  it('should have 3 nav options', function() {
  	expect(navBarOptions.count()).toBe(3)
  });


  it('should have final option that says "Messages"', function() {
  	expect(navBarsOptions.last().getText()).toContain('Messages');
  });


   
});