---
title: Google等国外网站访问方法
catalog: true
header-img: https://camo.githubusercontent.com/af4cf563b43a022ec902562c91c26521d2ed9dbb/68747470733a2f2f7777772e676f6f676c652e636f6d2f6c6f676f732f646f6f646c65732f323031362f686f6c69646179732d323031362d6461792d332d736f75746865726e2d68656d697370686572652d353138353031313932393035353233322d687032782e676966
tags:
  - 翻墙
categories: 软件资源
abbrlink: 7a245ddb
date: 2017-01-01 23:09:37
---


工作学习中经常需要使用Google搜索，Google学术等，但是由于国内暂时无法访问，会面临很多麻烦。故我根据自己的使用经验，提供如下方法，仅限于学习使用。

<!-- more -->

**更新20190408**

删除Lantern推荐，谷歌上网助手已转为付费，添加谷歌访问助手

--------------------------

## XX-Net

[XX-Net](https://github.com/XX-net/XX-Net)

| 模块 |	GAE_proxy	| X-Tunnel |
| ---------- | --- | --- |
| 联通性	| 依赖IPv6	| 更多通道 |
| 速度	| 流畅	|下载快速，稍微延迟 |
| 安全性	| Google可看到通信内容	| 支持完整https加密 |
| 易用	| 需开启Ipv6，部署服务端，导入证书	| 简单 |
| 兼容性	| 部分网站不支持	| 无问题 |
| 收费	| 免费	| 付费 |

## 修改Hosts
（该方法可能暂时失效）
**更新20170528**

[github链接](https://github.com/googlehosts/hosts)

更改方法：
1. 管理员身份运行记事本，Windows 系统下打开C:\Windows\System32\drivers\etc\hosts文件
2. 打开上述链接，复制网页内容，将其添加到hosts文件中
3. Windows下 点击开始 -> 运行 -> 输入cmd -> 在CMD窗口输入

	> ipconfig /flushdns

*hosts所在文件夹*

- *iPhone（iOS）系统hosts位于 /etc/hosts*
- *Android（安卓）系统hosts位于 /etc/hosts*

## 开个小飞机-shadowsocks
**Android、Windows**：Shadowsocks

**iOS:Surge(收费)、Shadowrocket(收费)、wingy(免费)**

最新下载地址：https://github.com/shadowsocks/shadowsocks-windows/releases


跟上述两个方法相比，该方法可使用的范围更广，只要有ss账号，就可以在Windows、Android、ios等多个平台使用，更加方便。


使用方法：

1. 在上述链接下载对应平台的软件

2. 获取ss账号

    推荐几个ss获取或者购买平台(部分需挂代理)

   > https://free-ss.site/
   >
   > [http://dlercloud.org](http://dlercloud.org/)
   >
   > https://do.freess.today/

3. 以Windows为例，解压文件，打开其中的shadowsocks.exe
4. 出现如下界面，点击添加，填入服务器ip、服务器端口、密码、加密，随后点击确定，具体也可参照上面我的ss填写方式。或者也可以右键ss程序，使用“二维码扫描”扫描二维码，自动填入相关信息。

5. 右键ss程序，先选择“服务器”，再选择“系统代理模式”中的“全局模式”，在“PAC”菜单中选择“使用在线PAC”。此时配置完成，以后可以在系统代理模式中自行切换“PAC模式”或者“全局模式”即可。
6. 现在可以随意访问国外网站了，速度跟你填写的ss服务器有关。

![](https://ae01.alicdn.com/kf/H8bd32b43d01c435f84358c3e193c9cbfg.jpg)

## chrome插件-谷歌上网助手

~~邮箱注册之后可以免费用三天，当然大家可以用匿名邮箱循环注册，不过服务好大家还是买会员充值，也很便宜。~~

该助手已经关闭试用注册，不过速度还是可以的，大家可以买会员充值

下载链接：

1. chrome浏览器或者QQ浏览器应用商店搜索“谷歌上网助手”下载安装即可
2. [官网下载](http://googlehelper.net/)插件包手动安装

![image](http://wx2.sinaimg.cn/large/6e529308gy1froysah7e6j207m094q38.jpg)



------

## chrome插件-谷歌访问助手

[谷歌访问助手 \- Chrome 网上应用店](https://chrome.google.com/webstore/detail/%E8%B0%B7%E6%AD%8C%E8%AE%BF%E9%97%AE%E5%8A%A9%E6%89%8B/gocklaboggjfkolaknpbhddbaopcepfp)

插件可以免费使用谷歌搜索，Gmail以及chrome商店访问，如需访问其他外网，需要设置2345导航页为首页。

[谷歌访问助手破解版](https://github.com/haotian-wang/google-access-helper)

----------

**注：**

**互联网上存在着大量终究不现实的、不客观的，甚至自相矛盾的抹黑当局政府言论，它们背后一般有西方政府或非政府组织资金支持。这些媒体包括但不限于一些港媒、境外网站。**

**希望您能在遇到此类言论和见解时，不要不加思考地、情绪一度被煽动而不能克制地、盲目地相信这些片面或者歪曲事实的东西，而是要事实求是地思考，要摆脱情绪绑架的怪诞思维去理解。**

------

如果存在链接无法访问，可以在下面评论或者Email：1049840395@qq.com