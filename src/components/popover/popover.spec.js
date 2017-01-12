// *************************************************************************************************
// MdPopover Component
// *************************************************************************************************

describe('MdPopover Component:', function() {

  var $rootScope, $compile, $material;
  var scope, element;

  var injectLocals = function($injector) {
    $rootScope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
    $material = $injector.get('$material');
  };

  beforeEach(function() {
    module(
      'material.components.popover',
      'material.components.tooltip',
      'material.components.button'
    );

    inject(injectLocals);

    scope = $rootScope.$new();
  });

  afterEach(function() {
    element.remove();
    element = undefined;
    scope.$destroy();
    scope = undefined;
  });

  // ***********************************************************************************************
  // Opening
  // ***********************************************************************************************

  describe('Opening:', function() {

    it('should open a POPOVER when using mdVisible', function() {
      scope.isVisible = false;

      buildComponent(
        '<md-button aria-label="Test">' +
          'Test' +
          '<md-popover md-visible="isVisible">' +
            '<md-popover-title>Title</md-popover-title>' +
            '<md-popover-content>Content</md-popover-content>' +
          '</md-popover>' +
        '</md-button>'
      );

      expect(findComponent('popover')).toEqual(null);

      scope.isVisible = true;
      flush();

      expect(findComponent('popover')).not.toEqual(null);
    });

    it('should open a TOOLTIP when using mdVisible', function() {
      scope.isVisible = false;

      buildComponent(
        '<md-button>' +
          'Test' +
          '<md-tooltip md-visible="isVisible">Test</md-tooltip>' +
        '</md-button>'
      );

      expect(findComponent('tooltip')).toEqual(null);

      scope.isVisible = true;
      flush();

      expect(findComponent('tooltip')).not.toEqual(null);
    });

    it('should open a POPOVER when using the mouseenter event', function() {

    });

  });

  // ***********************************************************************************************
  // Utility methods
  // ***********************************************************************************************

  function buildComponent(markup) {
    element = $compile(markup)(scope);
    return element;
  }

  function findComponent(type) {
    return document.querySelector('.md-panel.md-' + type);
  }

  function flush() {
    scope.$apply();
    $material.flushOutstandingAnimations();
  }

});
