---
title: 腾讯服务器部署Centos+Tomcat+Mysql 
tags:
  - 服务器部署
  - Web
categories: 开发总结
subtitle:
catalog: true
header-img:
abbrlink: b9a5dba
date: 2017-02-23 15:02:20
---
最近在做项目的时候，需要把war包上传到腾讯云服务器，查了一些资料，了解了相关的配置参数以及命令，自己做了一个整合，记录一下，方便以后使用查找。

	环境版本：
		Linux版本: centos6.3x64
		Java版本: jdk1.8.0_121
		Tomcat版本: Tomcat 6.0.48
		Mysql版本: 5.1.73
<!-- more -->
## Java环境安装

[下载地址](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* 将下载好的安装包上传到云服务器/usr/local文件夹
* 安装JDK
    `rpm -ivh jdk-8u121-linux-x64.rpm`
* 验证安装信息
	`java -version`

	![](http://i.imgur.com/WvTr0X5.png)

	注意：
		
	在没有配置环境变量的情况下，可以正常执行java/jacac等命令。因此没有进行环境变量的配置，可能需要用到下面的命令：
		
		#修改系统环境变量文件
		vi /etc/profile
		#添加以下文档
		JAVA_HOME=/usr/java/jdk1.8.0_121
		JRE_HOME=/usr/java/jdk1.8.0_121/jre
		PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
		CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
		export JAVA_HOME JRE_HOME PATH CLASSPATH

	相关vi命令：
		
		esc 退出编辑模式
		:wq 保存并退出
	
## Tomcat安装

[下载地址](http://tomcat.apache.org/download-60.cgi)

* 将Tomcat上传到云服务器/usr/local/文件夹
* 命令解压：

		tar -zxf apache-tomcat-6.0.48.tar.gz
		mv apache-tomcat-6.0.48.tar.gz tomcat

## Mysql安装

* 检测系统是否自带mysql
	`yum list installed | grep mysql`
* 删除系统自带的mysql及其依赖命令
	`yum -y remove mysql-libs.x86_64`
* 安装mysql 服务器命令
	`yum install mysql mysql-server mysql-devel -y`
* 查看是否生成了mysqld服务, 并设置随机启动
	`chkconfig --list |grep mysql`
![](http://shp.qpic.cn/txdiscuz_pic/0/_bbs_qcloud_com_forum_201505_11_235640vpaaff0540iwn6p9.jpg/0)

	数字代码服务器启动级别，off  代表不随机启动mysqld服务，on代表随机启动服务
	我们需要设置mysqld随机启动，执行下面命令进行设置:
	`chkconfig mysqld on` 
	`chkconfig --list |grep mysql`这样的结果代表正常
![](http://shp.qpic.cn/txdiscuz_pic/0/_bbs_qcloud_com_forum_201505_11_235659lylowmds6voocc6m.jpg/0)
* 启动mysqld服务
	`service mysqld start `
	启动后，ps一下，看下进程是否起来, `ps -ef |grep mysql|grep -v grep`
* 停止mysqld服务
	`service mysqld stop`
* 重启mysqld服务
	`service mysqld srestart`
* 命令行测试连接mysql ，后续可以在命令行中直接管理数据库
	`mysql`
	直接执行，yum安装的mysql，本地root密码默认为空
* 设置MySQL的root用户设置密码
		`[root@bogon ~]#  mysql -u root  
		mysql> select user,host,password from mysql.user;  
		+------+-----------+----------+  
		| user | host      | password |  
		+------+-----------+----------+  
		| root | localhost |          |  
		| root | bogon     |          |  
		| root | 127.0.0.1 |          |  
		|      | localhost |          |  
		|      | bogon     |          |  
		+------+-----------+----------+  
		rows in set (0.01 sec)`

	查询用户的密码，都为空，用下面的命令设置root的密码为root

		mysql> set password for root@localhost=password('root');
		mysql> exit;
* 如果本地有数据库的话，可以先导出成.sql文件，上传到服务器中，再导入到数据库中。

		create database mydb1;  //新建一个数据库
		use mydb1;  //进入数据库
		source /usr/local/xx.sql;     //即可导入

## 上传war包

将Web项目上传到tomcat中webApps目录下,重启服务器，进入tomcat/bin目录下，先执行`./shutdown.sh`，在执行`./startup.sh`，此时应该可以访问了。

**Note**：Tomcat中**bin/server.xml** 中的端口要与项目中 **pom.xml**的端口一致。

## 参考链接

1. [mysql入门教程-安装mysql数据库](http://bbs.qcloud.com/thread-5583-1-1.html) 
2. [腾讯云服务器CentOS安装JDK+Tomcat+MySQL详细步骤](http://www.jianshu.com/p/9ce25b075ebb)
3. [在腾讯云服务器centenOS安装Java、Tomcat和mysql](http://www.kuiblog.com/archives/174/)
4. [腾讯云CentOS6.5下安装mysql，并配置好远程访问等权限，途中遇到的问题](http://www.cnblogs.com/yangyabo/p/5301364.html)