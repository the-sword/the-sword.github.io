---
title: Linux学习笔记
tags:
  - Linux
categories: 学习笔记
abbrlink: b30ceb9f
subtitle:
catalog: true
top_img: https://source.unsplash.com/random/1366*768
header-img: https://www.linuxinsider.com/article_images/story_graphics_xlarge/xl-2017-linux-1.jpg
date: 2016-11-22 22:29:22
---
Linux学习笔记，不定期更新

<!-- more -->
<img src="http://www.extremetech.com/wp-content/uploads/2012/01/linux.jpg" />
## Linux简介

### 服务器版本redhat（部分收费）CentOS（完全免费）

### 学习方法

​Linux严格区分大小写

​Linux中所有内容以文件形式保存，包括硬件，即一切皆文件

​Linux不靠扩展名区分文件类型，靠权限来分，但默认可以有压缩包，二进制软件包，网页文件，脚本文件，配置文件的区分。

​windows下的软件不能再linux下直接安装和运行

### 字符界面的优势

```
1.资源占用少

2.减少被攻击和出错的可能性

2虚拟机的安装

```

## 分区

### 系统分区与格式化

逻辑分区：

### 分区之分区设备文件名与挂载

分区>格式化>起设备名>分配盘符

硬件设备文件名：如/dev/sda1:第一块scsi硬盘或者sata硬盘的第一个分区

linux中树形结构，/代表根目录

主分区只可以用1.2.3.4表示，但逻辑分区不能用这四个数字表示

挂载：给分区分配盘符的过程

必须分区：
/根分区
swap分区：交换分区，内存2倍，超过4gb内存的可以跟内存一样大即可，实验室环境下可不超过2gb
推荐分区：
/boot分区：启动分区，200MB

### Linux系统安装

​可以安装basic 服务器

### XShell安装和使用

## 命令基本格式与文件处理命令

### 命令格式

[root@localhost ~]#

```
root：当前登录用户

localhost：主机名

~：当前所在目录 #：超级用户的提示符，普通用户的提示符是$

```

root用户的根目录是/root，普通用户

pwd：显示当前的位置

命令 [选项] ［参数]

查询目录中的文件 ls

ls -l显示详细信息，

例如dr-xr-xr-x. 5 root root 1024 7月 15 19:26 boot

其中形如-rw-r–r–（一共有九位）的解释如下：

(>) -文件类型（其中-文件，d目录，l软链接文件）（r读 w写 x执行）

​ rw- 代表u所有者

​ r– 代表g所属组

​ r– 代表o其他人

其中5：引用计数

root：所有者

root：所属组

1024：字节大小

### 目录处理命令

创建目录mkdir -p [目录名]
-p：递归创建（上级目录不存在而想1要在创建子目录）
切换目录 cd：cd ~和cd进入当前目录
cd ..上一级目录
cd -上一次访问目录
cd .进入目录

crtl+L快捷清屏/tab键补全

相对路径：cd ../usr/local/src/参照当前目录
绝对路径：cd /etc/从根目录下开始查找

删除空目录：rmdir [目录名]
删除文件和目录：rm -rf [目录名]

复制命令：cp [选项] [原文件或目录] [目标目录]
-r 复制目录
-p 连带文件属性复制
-d 若源文件是链接文件，则复制链接属性
-a 相当于 -pdr（和源文件一模一样，包括属性等）
ll=ls -l
剪切或改名命令：mv [原文件或目录] [目标目录]

### 常用目录作用：

“/“ 根目录。

```
Linux系统的最高级目录。

```

“/bin” 命令保存目录。

```
存放着如"cp"、"ls"、"cat"等命令(普通用户就可以读取的命令)。

```

“/boot” 启动目录。

```
主要存放启动Linux系统所必需的文件，包括内核文件、启动菜单配置文件等，
当计算机启动时，这些文件会首先被加载。

```

“/dev” 设备文件保存目录。

```
这里主要存放与设备（包括外设）有关的文件
(unix和linux系统均把设备当成文件)。
想连线打印机吗？系统就是从这个目录开始工作的。
另外还有一些包括磁盘驱动、USB驱动等都放在这个目录。

```

“/etc” 配置文件保存目录。

```
举个例子：你安装了samba这个套件，当你想要修改samba配置文件的时候，
你会发现这些配置文件就在/etc/samba目录下。

```

“/home” 普通用户的家目录。

```
比如说有个用户叫liu，那他的家目录就是/home/liu，
并且用户的个人数据如桌面文件等都存放在这里。

```

“/lib” 系统库保存目录。

```
这个目录里存放着系统最基本的动态连接库，
几乎所有的应用程序都须用这些共享库。

```

“/lost+found”

```
这个目录一般情况下是空的，
当系统非法关机后,如果你丢失了一些文件，在这里能找回来
用来存放fsck过程中部分修复的文件的。

```

“/media” 挂载目录。

```
光盘等存储设备默认挂载点。

```

“/misc” 挂载目录。

```
磁带机等设备的挂载点。

```

“/mnt” 系统挂载目录。

```
系统提供这个目录是让用户临时挂接别的文件系统
如U盘、移动硬盘等。

```

“/net” 网络目录挂载点。

```
/net 是使用自动挂载(automount)时挂载网络目录的标准挂载点。

```

“/opt”

```
/opt 目录可以理解为安装可选程序的地方。

```

“/proc” 内存文件目录。

```
目录中保存的是内存的过载点。

```

“/root” 超级用户(root)的家目录。

```
里面存放根用户(root用户)的数据、文件等。

```

“/sbin” 命令保存目录。

```
s就是super user的意思，也就是说这里存放的是root管理员使用的命令程序。

```

“/sys” 内存文件目录。

```
目录中保存的是内存的过载点。

```

“/tmp” 临时文件目录。

```
这个目录是存放一些临时文件的地方。
有些linux系统会定期自动对这个目录进行清理，
因此，千万不要把重要的数据放在这里。

```

“/usr” 系统软件资源目录。

```
主要存放安装的软件、系统共用的文件、内核源码等。
一般我们会将自己需要的软件安装到"/usr/local"目录下。

```

“/var” 系统相关文档内容存放目录。

```
动态文件或数据存放目录，默认日志文件都存放在这个目录下("/var/log/")，
一般建议把此目录单独划分一个分区。

```

### 链接命令：ln

硬链接\软链接

软链接：类似与windows的快捷方式

## 文件搜索命令

### 文件搜索命令locate

locate 文件名 在后台数据库按文件名搜索，搜索速度更快

​/var/lib/mlocate #locate命令所搜索的后台数据库

​updatedb 更新数据库，否则新建文件有时候locate会搜不到

​locate命令会遵循/etc/updatedb.conf配置文件的配置进行搜索

### 命令搜索命令whereis与which

whereis ls，会弹出命令所在目录，帮助文档等

​which 文件名 命令所在位置及别名

PATH环境变量 ：定义的是系统搜索命令的路径

```
[root@localhost ~]# echo $PATH

/usr/lib/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin

```

### 文件搜索命令find

功能多但是参数多且复杂

find 搜索范围 搜索条件

例如：[root@localhost ~]# find / -name install.log

```
/root/install.log

```

此命令耗费资源会较大

```
*   匹配任意内容

？   匹配任意一个字符

[]  匹配任意一个中括号内的字符

```

### 搜索字符串命令grep

grep [选项] 字符串 文件名 #在文件中搜索符合条件额字符串

## 帮助命令

### 帮助命令

帮助命令：man 命令 #获取指定命令的帮助
man ls即可跳到ls的帮助文档（man的级别：1-9个级别）

查看命令拥有那个级别的帮助：man -f 命令

```
相当于whatis   命令

```

举例：man -5 passwd
查看和命令有关的所有帮助

man -k 命令 相当于 apropos 命令

例如：apropos passwd

### 其他帮助命令

命令 –help
shell内部命令帮助：

help shell内部命令 #获取shell内部命令的帮助

如whereis cd：确定是否是shell内部命令，不包含bin/可执行文件，cd即为shell内部命令

help cd：获取内部命令的帮助
详细命令帮助info：

info 命令

​ -回车：进入资本主页面（带有*号标记）

```
-u：进入上层页面
-n:进入下一个帮助小节
-p:进入上一个帮助小节
-q:退出

```

## 压缩命令

### 压缩命令1

.zip .gz .bz2 .tar.gz .tar.bz2

```
1.zip   压缩文件名  源文件：压缩文件
    zip  -r  压缩文件名  源文件：压缩目录

    linux压缩包用红颜色标示

    解压缩     unzip  压缩文件

2. .gz格式压缩

    .gz解压缩

3.  .bz2格式压缩

    .bz2格式解压缩
4.  .tar.gz

5.  .tar.bz2

```

## 关机与重启命令

## 其他常见命令

### 挂载命令

linux默认不支持NTFS文件系统，需要添加驱动包

### 用户登录查看命令

w查看当前登录用户
last lastlog等多种命令

## shell基础

### shell概述

类似命令与二进制之间的翻译器，命令解释器或者说是操作界面

shell主要语法类型bource和c两种，linux大多数用的是bource

### 脚本执行方式

1.echo输出命令

```
echo -e 支持反斜杠命令

```

2.第一个脚本

```
bash  xxx.sh
chmod  xxx.sh         ./xxx.sh

```

3.bash的基本功能

### 命令别名与快捷键 alias查看别名

```
alias  命令=“别名”临时生效，重启恢复，若想永久要写入环境变量配置文件vi ~/.bashrc

删除别名：unalias

```

[![linux快捷键](http://i.imgur.com/2oqE48D.png)](http://i.imgur.com/2oqE48D.png)

### 历史命令

[![img](http://i.imgur.com/Kyoume6.png)](http://i.imgur.com/Kyoume6.png)

### 输出重定向

[![img](http://i.imgur.com/w9WSIij.png)](http://i.imgur.com/w9WSIij.png)

[![img](http://i.imgur.com/Zy0zOzH.png)](http://i.imgur.com/Zy0zOzH.png)

