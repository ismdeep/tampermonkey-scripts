// ==UserScript==
// @name       Hacker News Hide Low Point Posts
// @namespace  https://ismdeep.com
// @version    1.0
// @author     ismdeep <ismdeep@live.com>
// @description Hides posts that are under a specified number of points
// @match      https://news.ycombinator.com
// @match      https://news.ycombinator.com/news*
// @require    https://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

$('tr>td.subtext>span').each(function() {
    var minScore = 100;
    if ($(this).text().indexOf('points') > 0) {
        var score = $(this).text().replace(/[a-z]/gi, '').replace(/ /g, '');
        score = parseInt(score);
        if (!isNaN(score) && score < minScore) {
            $(this).parent().parent().hide();
            $(this).parent().parent().prev().hide();
        }
    }
});
