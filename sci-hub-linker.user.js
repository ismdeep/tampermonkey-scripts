// ==UserScript==
// @name         SCI HUB Linker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://link.springer.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML = "<a href=\"https://sci-hub.tw/"+window.location+"\" target=\"_blank\">sci-hub.tw</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href=\"https://sci-hub.se/"+window.location+"\" target=\"_blank\">sci-hub.se</a>" + document.body.innerHTML;
})();
