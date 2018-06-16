---
title: MySQL server has gone away
tags:
  - 数据库
  - 错误集锦
categories: 开发总结
abbrlink: 2ecaa025
subtitle:
catalog: true
top_img: https://source.unsplash.com/random/1366*768
header-img: /img/default.jpg
date: 2016-11-11 22:29:22
---

MySQL数据库出现`MySQL server has gone away`错误一般是sql语句太大导致的，可以更改MySQL的相关配置文件进行解决。
<!-- more -->
**解决办法**：

找到MySQL的配置文件my.ini(其路径一般为C:\ProgramData\MySQL\MySQL Server 5.7\my.ini)，在配置文件更改`max_allowed_packet=10M`中的数值，按照需求更改；添加`wait_timeout=2880000`和`interactive_timeout = 2880000`。

更改配置文件之后一定要**重启MySQL服务**，重新导入sql文件即可。

## 参考文献

[2006 - MySQL server has gone away 问题解决方法](http://www.cnblogs.com/bisonjob/archive/2009/08/18/1548611.html)