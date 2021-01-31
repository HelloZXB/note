---
title: Vue
date: 2020-01-30
tags:
 - vue
categories: 
 - WEB前端
sticky:
 - type: 2
---

:::tip
渐进式JavaScript 框架 [Vue.js](https://cn.vuejs.org/index.html)
:::

<!-- more -->

## Vue中如何给div注册键盘事件

在div注册事件, 注意 **tabindex** 是重点
```js
<div @keyup="renderKeyDown($event)" tabindex="0"></div>

methods: {
  renderKeyDown (e) {
    console.log('e.keyCode' + e.keyCode)
  }
}
```