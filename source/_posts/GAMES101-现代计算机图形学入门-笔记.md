---
title: 'GAMES101: 现代计算机图形学入门-笔记'
tags:
  - Graphics
categories: 学习笔记
abbrlink: a086311e
date: 2020-04-17 15:51:43
---

笔记链接：[GAMES101: 现代计算机图形学入门](https://mubu.com/doc/4JI70_e66BV)

# GAMES101: 现代计算机图形学入门

#### 2020 年春季学期（在线直播）

------

##### 课程介绍

![img](https://sites.cs.ucsb.edu/~lingqi/images/games101.png)

光栅化成像 [实时软阴影 (NVIDIA)]

几何表示 [Adobe Photoshop 中的钢笔工具]

光线传播理论 [光子映射 (Jensen)]

动画与模拟 [流体模拟 (Muller)]

本课程将全面而系统地介绍现代计算机图形学的四大组成部分：（1）光栅化成像，（2）几何表示，（3）光的传播理论，以及（4）动画与模拟。每个方面都会从基础原理出发讲解到实际应用，并介绍前沿的理论研究。通过本课程，你可以学习到计算机图形学背后的数学和物理知识，并锻炼实际的编程能力。

顾名思义，作为入门，本课程会尽可能的覆盖图形学的方方面面，把每一部分的基本概念都尽可能说清楚，让大家对计算机图形学有一个完整的、自上而下的全局把握。全局的理解很重要，学完本课程后，你会了解到图形学不等于 OpenGL，不等于光线追踪，而是一套生成整个虚拟世界的方法。从本课程的标题，大家还可以看到“现代”二字，也就是说，这门课所要给大家介绍的都是现代化的知识，也都是现代图形学工业界需要的图形学基础。

本课程与其它图形学教程还有一个重要的区别，那就是本课程不会讲授 OpenGL，甚至不会提及这个概念。本课程所讲授的内容是图形学背后的原理，而不是如何使用一个特定的图形学 API。在学习完这门课的时候，你一定有能力自己使用 OpenGL 写实时渲染的程序。另外，本课程并不涉及计算机视觉、图像视频处理、深度学习，也不会介绍游戏引擎与三维建模软件的使用。

具体课程内容请参见课程大纲。

------

##### 直播方式

GAMES 虎牙直播间 [webinar.games-cn.org](http://webinar.games-cn.org/)
北京时间周二、周五上午 10 点到 11 点，2020 年 2 月 11 日开始

------

##### 课程需求

【必须】：高等数学（微积分、线性代数）、算法、数据结构
【非必须】：信号处理、数值分析、大学物理（光学）

------

##### 课时安排

【课时】：共安排 22 节课，每节一小时到一小时十五分钟，每周两节
【作业】：共 8 次小作业，1 次大作业，全部是编程任务，会提供代码框架。作业不作强制要求，自愿完成，并通过[课程作业系统](http://www.smartchair.org/GAMES2020Course-YLQ/)提交
【考试】：无考试安排
【其它】：中文授课，英文课件，采用直播互动形式，以轻松愉快为主，每课结束当天会放出录像教师及助教信息

教师：[闫令琪](https://sites.cs.ucsb.edu/~lingqi/index.html)
邮箱：[lingqi@cs.ucsb.edu](mailto:lingqi@cs.ucsb.edu)

助教：刘光哲
邮箱：[lgz17@mails.tsinghua.edu.cn](mailto:lgz17@mails.tsinghua.edu.cn)

助教：史雨宸
邮箱：[syc0412@mail.ustc.edu.cn](mailto:syc0412@mail.ustc.edu.cn)

助教：邓俊辰
邮箱：[1050106988@qq.com](mailto:1050106988@qq.com)

助教：禹鹏
邮箱：[y2505418927@gmail.com](mailto:y2505418927@gmail.com)

助教：郭文鲜
邮箱：[wxguojlu@hotmail.com](mailto:wxguojlu@hotmail.com)

更多助教将根据课程需求持续招募

[课程讨论区 BBS](http://games-cn.org/forums/forum/graphics-intro/)

教材【非必须】：Steve Marschner and Peter Shirley，“Fundamentals of Computer Graphics”，第三版或更新版本。很遗憾中文版应该只有第二版，大家也可以对照着看。不过英文版写得非常好，浅显易懂，所以应该并无太大问题课程大纲与讲义

以下是课程大纲，随着课程进行可能会有所变动。相关的阅读材料会在每节课前给出（章节以英文第四版教材为准）。每节课后，课件将以 PDF 形式放出，课程录像会在 [Bilibili 网站](https://www.bilibili.com/video/av90798049) 更新。

|          | 日期   | 主题                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| 第 1 周  | Feb 11 | **计算机图形学概述** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_01.pdf)] |
|          | Feb 14 | **向量与线性代数** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_02.pdf)] 阅读材料：第 2 章（Miscellaneous Math）；第 5 章（Linear Algebra） |
| 第 2 周  | Feb 18 | **变换（二维与三维）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_03.pdf)] 阅读材料：第 6 章（Transformation Matrices），第 6.1、6.3 节 |
|          | Feb 21 | **变换（模型、视图、投影）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_04.pdf)] [[补充材料](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_04_supp.pdf)] 阅读材料：第 6 章（Transformation Matrices），第 6.2、6.4、6.5 节；第 7 章（Viewing） |
| 第 3 周  | Feb 25 | **光栅化（三角形的离散化）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_05.pdf)] 阅读材料：第 3 章（Raster Images）, 第 3.1、3.2 节 |
|          | Feb 28 | **光栅化（深度测试与抗锯齿）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_06.pdf)] 阅读材料：第 8 章（The Graphics Pipeline）, 第 8.2.3 节；第 9 章（Signal Processing） |
| 第 4 周  | Mar 3  | **着色（光照与基本着色模型）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_07.pdf)] 阅读材料：第 10 章（Surface Shading）, 第 10.1 节 |
|          | Mar 7  | **着色（着色频率、图形管线、纹理映射）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_08.pdf)] 阅读材料：第 10 章（Surface Shading）, 第 10.2 节；第 17 章（Using Graphics Hardware）, 第 17.1 节 |
| 第 5 周  | Mar 10 | **着色（插值、高级纹理映射）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_09.pdf)] 阅读材料：第 11 章（Texture Mapping）, 第 11.1、11.2 节 |
|          | Mar 13 | **几何（基本表示方法）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_10.pdf)] 阅读材料：第 12 章（Data Structures for Graphics），第 12.1 节；第 22 章（Implicit Modeling） |
| 第 6 周  | Mar 17 | **几何（曲线与曲面）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_11.pdf)] 阅读材料：第 15 章（Curves），第 15.1、15.2、15.3、15.6 节 |
|          | Mar 20 | **几何（网格处理）、阴影图** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_12.pdf)] 阅读材料：无 |
| 第 7 周  | Mar 24 | **光线追踪（基本原理）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_13.pdf)] 阅读材料：第 4 章（Ray Tracing） |
|          | Mar 27 | **光线追踪（加速结构）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_14.pdf)] 阅读材料：第 12 章（Data Structures for Graphics），第 12.1、12.2、12.3 节 |
| 第 8 周  | Mar 31 | **光线追踪（辐射度量学、渲染方程与全局光照）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_15.pdf)] 阅读材料：第 18 章（Light），第 18.1、18.2 节 |
|          | Apr 5  | **光线追踪（蒙特卡洛积分与路径追踪）** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_16.pdf)] 阅读材料：无 |
| 第 9 周  | Apr 7  | **材质与外观** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_17.pdf)] 阅读材料：第 24 章（Reflection），第 24.1、24.3 节 |
|          | Apr 10 | **高级光线传播与复杂外观建模** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_18.pdf)] 阅读材料：无 |
| 第 10 周 | Apr 14 | **相机与透镜** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_19.pdf)] 阅读材料：无 |
|          | Apr 17 | **光场、颜色与感知** [[课件](https://sites.cs.ucsb.edu/~lingqi/teaching/resources/GAMES101_Lecture_20.pdf)] 阅读材料：第 19 章（Color） |
| 第 11 周 | Apr 21 | **动画与模拟（基本概念、逆运动学、质点弹簧系统）**           |
|          | Apr 24 | **欧拉视角、拉格朗日视角与物质点法**                         |