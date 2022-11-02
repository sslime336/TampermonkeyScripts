// ==UserScript==
// @name         使能CSDN代码块编辑
// @version      0.1
// @description  Enable code select & copy from CSDN
// @author       sslime336
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://avatars.githubusercontent.com/u/97684920?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 使能非登录状态编辑代码
    let codeBlocks = document.querySelectorAll("code");
    codeBlocks.forEach(c => {
        c.contentEditable = true;
    });

    // 删除"登录后复制代码"
    let requireLoginBtnOnCodes = document.getElementsByClassName("hljs-button signin");
    for (let i = 0; i < requireLoginBtnOnCodes.length; i++) {
        requireLoginBtnOnCodes[i].remove();
    }

})();
