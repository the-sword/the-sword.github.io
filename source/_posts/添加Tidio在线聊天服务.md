---
title: 添加Tidio在线聊天服务
tags:
  - hexo
categories: 软件资源
abbrlink: f8edb900
date: 2020-03-22 10:41:14
---

## 简介

在线聊天算是一个比较成熟的 SaaS 商业应用了，业内产品如 [Tidio](https://www.tidiochat.com/)、 [TalkJS](https://talkjs.com/)、[Intercom](https://www.intercom.com/)、[tawk.to](https://www.tawk.to/) 等，使用体验都很好，交互界面也很干净别致。此次本站选择用Tidio，部署起来很方便：

- 在个人博客这种业务场景中，几乎用不到它的收费功能，可以算是终身免费了。
- Tidio 提供了多种消息回复渠道，包括网页、桌面应用、iOS/Android APP（需要 Google play 服务支持）。
- 除了在线聊天，Tidio 还可以在线发送邮件，以及关联接收 Fackbook 消息。
- 在几款产品的界面风格中，还是 Tidio 看起来更加优雅一些，深得我爱。

![](https://raw.githubusercontent.com/the-sword/figurebed/master/img/20200322104630.png)

## 注册账号

[Tidio官网](https://www.tidio.com/)

注册账号，根据引导填写相关信息；进入控制台，在 **SETTINGS** -> **Developer** -> **Project data** 中获取到 Public Key：

![image-20200322105059255](https://raw.githubusercontent.com/the-sword/figurebed/master/img/image-20200322105059255.png)

## 配置文件

不同的主题有不同的配置写法，但都大同小异。本博客按照[hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody)主题配置。

首先在主题自定义布局中添加如下代码：

```yml
# Tidio online chat
# see: https://www.tidiochat.com
tidio:
  enable: true
  key: # Public_Key
```

然后在`themes\melody\layout\includes\head.pug`文件中加入以下代码：

```pug
if theme.tidio.enable
  script(src="//code.tidio.co/fut0uxnwfp6sbxufi6qqozmfzutuf3nc.js" async)
```

如果想修改Tidio的外观布局，可在**Channel** -> **Live chat** -> **Appearance**中自定义。

## 参考链接

[Hexo 搭建个人博客系列：进阶设置篇 | Yearito's Blog](http://yearito.cn/posts/hexo-advanced-settings.html)

