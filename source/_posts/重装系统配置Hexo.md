---
title: 重装系统配置Hexo
tags:
  - Hexo
categories: 软件资源
subtitle:
catalog: true
header-img:
abbrlink: 78db2b53
date: 2017-06-06 15:18:23
---
记录重装系统后恢复Hexo方法.
<!-- more -->
1. 安装git
2. 安装Node.js
3. 在本地新建the-sword.github.io文件夹(这是我的github.io的名字，这样是为了查找方便)
4. 使用命令安装Hexo

	右键选择**Git Bash Here**，弹出**Git Bash**窗口；执行命令：
	
	    npm install -g hexo-cli
	    hexo init
5.  连接github仓库

		git config --global user.name  "user.name"
		git config --global user.email "user.email"
		git init
		git checkout -b hexo	//因为我的博客源文件放在hexo分支
		git remote add origin https://github.com/the-sword/the-sword.github.io.git	//连接hexo分支仓库
6. 使用仓库文件覆盖本地文件

		git fetch --all
		git reset --hard origin/hexo	//因为我的博客源文件放在hexo分支
		git pull
7. 此时记得删除.deploy_git文件夹，否则博客会丢失图标

8. 随后即可使用hexo相关命令，修改本地文件后，push到hexo分支即可用travis-ci工具自动更新博客。

**注**：

直接使用git clone命令把博客源文件复制到本地，修改文件后也可以使用travis-ci工具自动更新博客(该方法同样需要删除.deploy_git文件夹)。但是这样因为无法使用hexo命令，md文件的格式和某些元素无法自动生成，需要自己手动编辑，所以才有了这篇文章。
