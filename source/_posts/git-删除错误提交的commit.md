---
title: git 删除错误提交的commit
tags:
  - git
categories: 开发总结
abbrlink: c0c90fc2
subtitle:
catalog: true
header-img:
date: 2017-11-11 17:22:38
---
之所以写这篇blog，是因为在提交hexo的时候不知道哪个地方配置出了问题，在github上commit了几个错误的版本，后来想恢复前面某个正确的配置.
<!-- more -->

## 连接github仓库

	git config --global user.name  "user.name" 
	git config --global user.email "user.email" 
	git init 
	git checkout -b hexo    //因为我的博客源文件放在hexo分支 
	git remote add origin https://github.com/the-sword/the-sword.github.io.git    //连接hexo分支仓库

## 恢复到某个commit
	
	git fetch --all
	git reset --hard <commit_id>
	git push origin HEAD --force
**注：**  < commit_id> 为每次commit的SHA1值. 可以用git log 看到,也可以在页面上commit标签页里找到.

进入github的仓库，会发现在该版commit之后的提交内容都删除了.

## 参考链接
[git 删除错误提交的commit](https://www.douban.com/note/189603387/)