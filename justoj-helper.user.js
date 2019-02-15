// ==UserScript==
// @name         justoj helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ismdeep
// @match        https://oj.ismdeep.com/problems*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var remove_list = document.getElementsByClassName('glyphicon glyphicon-ok');
    var p = remove_list[0].parentNode.parentNode.parentNode;
    for (var i = remove_list.length - 1; i >= 0; i--) {
        p.removeChild(remove_list[i].parentNode.parentNode);
    }
})();
