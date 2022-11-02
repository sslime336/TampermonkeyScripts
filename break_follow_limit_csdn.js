// ==UserScript==
// @name         消除关注博主查看限制
// @version      0.1
// @description  不用关注，展示隐藏内容
// @author       sslime336
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://avatars.githubusercontent.com/u/97684920?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 删除"关注博主查看更多"
    let unfollowedBlock = document
    .getElementsByClassName("hide-article-box hide-article-pos text-center");
    if (unfollowedBlock.length > 0) {
        unfollowedBlock[0].remove();
    }

    document.getElementById("article_content").removeAttribute("style");

})();
