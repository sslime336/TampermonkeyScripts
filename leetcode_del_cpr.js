// ==UserScript==
// @name         消除复制LeetCode题解后版权信息
// @version      0.1
// @description  方便复制代码只是为了调试理解思路，严禁滥用！
// @author       sslime336
// @match        https://leetcode.cn/problems/*
// @icon         https://avatars.githubusercontent.com/u/97684920?v=4
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    document.addEventListener('copy', function (event) {
        let clipboardData = event.clipboardData || window.clipboardData;
        // 如果未复制或者未剪切，则return出去
        if (!clipboardData) { return; }
        // Selection 对象，表示用户选择的文本范围或光标的当前位置。
        //     声明一个变量接收 -- 用户输入的剪切或者复制的文本转化为字符串
        let text = window.getSelection().toString();
        if (text) {
            // 如果文本存在，首先取消文本的默认事件
            event.preventDefault();
            // 通过调用常clipboardData对象的 setData(format, data) 方法；来设置相关文本

            // setData(format, data);参数
            // format
            // 一个DOMString 表示要添加到 drag object的拖动数据的类型。
            // data
            // 一个 DOMString表示要添加到 drag object的数据。
            for (let i = 0; i < 3; i++) {
                clipboardData.setData('text/plain', text.subString(0, text.lastIndexOf('\n')));
            }
        }
    })

})();
