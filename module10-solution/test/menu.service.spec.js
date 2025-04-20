describe('MenuService', function () {
    var MenuService, $httpBackend;
    var ApiBasePath = "https://coursera-jhu-default-rtdb.firebaseio.com";
  
    beforeEach(module('common'));
  
    beforeEach(inject(function (_MenuService_, _$httpBackend_) {
      MenuService = _MenuService_;
      $httpBackend = _$httpBackend_;
    }));
  
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  
    it('1) should return menu item if it exists', function () {
      var fakeItem = { name: "Lo Mein", short_name: "L1", categoryShortName: "L"};
      $httpBackend.expectGET(ApiBasePath + "/menu_items/L/menu_items/0.json")
                  .respond(fakeItem);
  
      MenuService.getMenuItem("L1").then(function (response) {
        console.log(fakeItem);
        console.log(response);
        expect(response).toEqual(fakeItem);
      });
  
      $httpBackend.flush();
    });
  
    it('2) should return null if menu item does not exist', function () {
      $httpBackend.expectGET(ApiBasePath + "/menu_items/X/menu_items/99.json")
                  .respond(null);
  
      MenuService.getMenuItem("X99").then(function (response) {
        console.log(response);
        expect(response).toBeNull();
      });
  
      $httpBackend.flush();
    });
  });
  