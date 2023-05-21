 <h1>awsome-fe</h1>

前端知识储备，收集博客和文章。 🚀 持续更新...

- [博客](#博客)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
  - [Event Loop](#event-loop)
  - [闭包](#闭包)
  - [原型](#原型)
  - [柯里化](#柯里化)
  - [Web Component](#web-component)
  - [模块化](#模块化)
- [TypeScript](#typescript)
- [Vue](#vue)
- [正则表达式](#正则表达式)
- [Node](#node)
  - [工具使用](#工具使用)
- [安全](#安全)
  - [对称和非对称加密](#对称和非对称加密)
- [Docker](#docker)
- [Nginx](#nginx)
- [Linux](#linux)
  - [基础](#基础)
  - [Shell](#shell)
- [实用工具合集](#实用工具合集)
  - [未分类](#未分类)
  - [在线压缩 / 在线格式化 / 在线 coding](#在线压缩--在线格式化--在线-coding)
  - [表情符号 / 图片 / 素材](#表情符号--图片--素材)

# 博客

- [阮一峰的网络日志](https://www.ruanyifeng.com/blog/javascript/)

- [张鑫旭的个人主页](https://www.zhangxinxu.com/)

- [被删的前端游乐场](https://godbasin.github.io/front-end-playground/)

# HTML

# CSS

# JavaScript

## Event Loop

- [tasks-microtasks-queues-and-schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [JavaScript 运行机制详解：再谈 Event Loop](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- 简述事件循环
  > 事件循环⼜叫做消息循环，是浏览器渲染主线程的⼯作⽅式。
  > 在 Chrome 的源码中，它开启⼀个不会结束的 for 循环，每次循环从消息
  > 队列中取出第⼀个任务执⾏，⽽其他线程只需要在合适的时候将任务加⼊到
  > 队列末尾即可。
  > 过去把消息队列简单分为宏队列和微队列，这种说法⽬前已⽆法满⾜复杂的
  > 浏览器环境，取⽽代之的是⼀种更加灵活多变的处理⽅式。
  > 根据 W3C 官⽅的解释，每个任务有不同的类型，同类型的任务必须在同⼀
  > 个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，
  > 在⼀次事件循环中，由浏览器⾃⾏决定取哪⼀个队列的任务。但浏览器必须
  > 有⼀个微队列，微队列的任务⼀定具有最⾼的优先级，必须优先调度执⾏。

## 闭包

## 原型

## 柯里化

## Web Component

- [Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)

## 模块化

- [CommonJS, AMD, CMD, ES6](https://juejin.cn/post/6844903576309858318)
- [ES6 模块与 CommonJS 模块的差异](https://wangdoc.com/es6/module-loader#es6-%E6%A8%A1%E5%9D%97%E4%B8%8E-commonjs-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)

# TypeScript

# Vue

# 正则表达式
[JS正则表达式](mds/正则/JS正则表达式.md)

# Node

## 工具使用

- 📙 [npx 使用教程](https://www.ruanyifeng.com/blog/2019/02/npx.html)

# 安全

## 对称和非对称加密

- [通俗易懂的对称加密与非对称加密原理浅析](https://juejin.cn/post/6964558725839339533)

# Docker

- [Docker 常用命令](mds/docker/Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md)
- [Docker 容器互访三种方式](https://www.cnblogs.com/shenh/p/9714547.html)
- [Docker 网络:bridge 模式](https://www.cnblogs.com/freeaihub/p/13206077.html)
- [Docker 核心技术与实现原理](https://draveness.me/docker/)

# Nginx

- [一份简单够用的 Nginx Location 配置讲解](https://github.com/mqyqingfeng/Blog/issues/242)

# Linux

## 基础

- 💻 [Redhat 与 Debian 系介绍(Linux 各种发行版本概述)](https://blog.csdn.net/ithomer/article/details/9729933)
- 💻 [Redhat 与 Debian 系介绍(Linux 各种发行版本概述)](https://blog.csdn.net/ithomer/article/details/9729933)
- 💻 [Linux 包管理基础：apt、yum、dnf 和 pkg](https://linux.cn/article-8782-1.html)
- 💻 [Linux 软件包管理快速入门对照：apt、brew、pkg、yum](https://blog.csdn.net/netgc/article/details/118418402)
- 💻 [Linux 中的 shell 和 bash](https://www.cnblogs.com/csnd/p/11807739.html)

## Shell
- [Shell常用命令](mds/linux/Shell常用命令.md)

# 实用工具合集

## 未分类

- 💻️ [多端 UI 测试](https://responsively.app/)
- 📚 [电子书汇总 - 书栈网](https://www.bookstack.cn/explore?cid=18&tab=popular)

## 在线压缩 / 在线格式化 / 在线 coding

- ⚡️ [图片在线压缩 - tinypng](https://tinypng.com/)

- ⚡️ [图片在线压缩 - squoosh](https://squoosh.app/)

- 👨‍💻 [在线编辑代码 - 码上掘金](https://code.juejin.cn/)
- 👨‍💻 [在线学 git](https://learngitbranching.js.org/?locale=zh_CN)

- 👨‍💻 [代码片段生成图片](https://carbon.now.sh/)

- ⚙️ [json 格式化 - json.cn](https://www.json.cn/)

- ⚙️ [格式化工具合集 Html / CSS / JS/ JSON ](https://smalldev.tools/)

## 表情符号 / 图片 / 素材

- 😀 [emoji 中文网](https://www.emojiall.com/zh-hans)

- 🤪 [404 页面素材](https://error404.fun/)
