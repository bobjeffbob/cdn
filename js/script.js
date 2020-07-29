angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
}).controller('WidthDemoCtrl', function($mdDialog) {
  var ctrl = this;
  ctrl.menuHref = "https://material.io/archive/guidelines/components/menus.html#menus-specs";

  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .textContent('You clicked the menu item at index ' + index)
        .ok('Nice')
    );
  };
});

//ripple
"use strict";
[].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('click', e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;
        el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
});


/**
Copyright 2020 Google LLC. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be found
in the LICENSE file at http://material.angularjs.org/HEAD/license.
**/