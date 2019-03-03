// ==UserScript==
// @name         hdu helper2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ismdeep
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @match        http://acm.hdu.edu.cn/listproblem.php?vol=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var con = document.getElementsByTagName('tr');
    for (var i = con.length - 1; i >= 0; i--) {
        if (con[i].innerHTML.indexOf('showproblem.php?pid=') >= 0) {
            let flag = false;
            try{
                if (parseInt(con[i].lastChild.firstElementChild.innerHTML) < 500) {
                    flag = true;
                }
            }catch(e){}
            try{
                if (con[i].innerHTML.indexOf('images/ac.gif') >= 0) {
                    flag = true;
                }
            }catch(e){}
            if (flag) {
                con[i].remove();
            }
        }
    }
})();
