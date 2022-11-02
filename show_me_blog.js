// ==UserScript==
// @name         煎鱼博客查看全文
// @version      0.1
// @description  不用微信扫码即可查看全文
// @author       sslime336
// @match        https://eddycjy.com/posts/*
// @icon         https://avatars.githubusercontent.com/u/97684920?v=4
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 删除"点击阅读全文"按钮即 div
    let readMoreBlock = document.getElementById('read-more-wrap');
    if (readMoreBlock != null) {
        readMoreBlock.remove();
    }

    // 解除文章隐藏属性
    let article = document.getElementById('articles');
    article.getAttributeNode('style').value = "position: relative; height: 2593.97px;";

    // 删除评论区
    let commentBlock = document.getElementById('comments');
    commentBlock.remove();
})();
