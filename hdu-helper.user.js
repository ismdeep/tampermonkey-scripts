// ==UserScript==
// @name         hdu helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ismdeep
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @match        http://acm.hdu.edu.cn/showproblem.php?pid=*
// @grant        none
// ==/UserScript==

function ajax(url,fnSucc){
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }
    else{
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
    }
    oAjax.open("GET",url,true);
    oAjax.send();
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status==200){
                fnSucc(oAjax.responseText);
            }else{
                if(fnfiled){
                    fnField(oAjax.status);
                }
            }
        }
    };
}

(function() {
    'use strict';
    var url = window.location.href;
    url = url.substr(url.indexOf("?pid=")+5).trim();
    var problem_id = url;
    // get current login user
    var html = document.getElementsByTagName('html')[0].innerHTML;
    if (html.indexOf('/userstatus.php?user=') >= 0) {
        // found user
        var userid = html.substr(html.indexOf('/userstatus.php?user=')+21);
        userid = userid.substr(0, userid.indexOf('" style'));
        ajax('/status.php?first=&pid='+problem_id+'&user='+userid+'&lang=0&status=5',function(d){
            d = d.substr(d.indexOf('fixed_table'));
            d = d.substr(d.indexOf('<input type=submit value=Go'));
            if (d.indexOf('Accepted') >= 0) {
                document.getElementsByTagName('h1')[0].innerHTML = '√ ' + document.getElementsByTagName('h1')[0].innerHTML;
            }
        },'text');
    }
})();
