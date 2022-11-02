// ==UserScript==
// @name         简化CSDN界面
// @version      0.1
// @description  移除多余元素
// @author       sslime336
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://avatars.githubusercontent.com/u/97684920?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 删除最上方标题栏
    document.getElementById("csdn-toolbar").remove();

    // 删除基本信息，如发布时间、作者、浏览量等
    document.getElementsByClassName("article-info-box")[0].remove();

    // 删除左栏
    document.getElementsByTagName("aside")[0].remove();

    // 删除底部悬浮框
    document.getElementById("toolBarBox").remove();

    // 删除左侧空白
    document
        .getElementsByClassName("main_father clearfix d-flex justify-content-center")[0]
        .removeAttribute("class");

    // 清除右侧工具条
    document.getElementsByClassName("csdn-side-toolbar ")[0].remove();

    // 清除未折叠代码的"登录后复制"按钮
    let btns = document.getElementsByClassName('hljs-button signin');
    for (let i = 0; i < btns.length; i++) {
        btns[i].remove();
    }

})();
