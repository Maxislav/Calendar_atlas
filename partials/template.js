angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/xx.html',
    "<!DOCTYPE html><html><head><title></title></head><body></body></html>"
  );

}]);
