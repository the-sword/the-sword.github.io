---
title: 'GAMES101: 现代计算机图形学入门-笔记'
tags:
  - Graphics
categories: 学习笔记
abbrlink: a086311e
date: 2020-04-17 15:51:43
---

笔记链接：[GAMES101: 现代计算机图形学入门-幕布链接](https://mubu.com/doc/4JI70_e66BV)

2020 年春季学期（在线直播），课程录像会在 [Bilibili 网站](https://www.bilibili.com/video/av90798049) 更新。

![img](https://sites.cs.ucsb.edu/~lingqi/images/games101.png)

光栅化成像 [实时软阴影 (NVIDIA)]

几何表示 [Adobe Photoshop 中的钢笔工具]

光线传播理论 [光子映射 (Jensen)]

动画与模拟 [流体模拟 (Muller)]

本课程将全面而系统地介绍现代计算机图形学的四大组成部分：（1）光栅化成像，（2）几何表示，（3）光的传播理论，以及（4）动画与模拟。每个方面都会从基础原理出发讲解到实际应用，并介绍前沿的理论研究。通过本课程，你可以学习到计算机图形学背后的数学和物理知识，并锻炼实际的编程能力。

顾名思义，作为入门，本课程会尽可能的覆盖图形学的方方面面，把每一部分的基本概念都尽可能说清楚，让大家对计算机图形学有一个完整的、自上而下的全局把握。全局的理解很重要，学完本课程后，你会了解到图形学不等于 OpenGL，不等于光线追踪，而是一套生成整个虚拟世界的方法。从本课程的标题，大家还可以看到“现代”二字，也就是说，这门课所要给大家介绍的都是现代化的知识，也都是现代图形学工业界需要的图形学基础。

本课程与其它图形学教程还有一个重要的区别，那就是本课程不会讲授 OpenGL，甚至不会提及这个概念。本课程所讲授的内容是图形学背后的原理，而不是如何使用一个特定的图形学 API。在学习完这门课的时候，你一定有能力自己使用 OpenGL 写实时渲染的程序。另外，本课程并不涉及计算机视觉、图像视频处理、深度学习，也不会介绍游戏引擎与三维建模软件的使用。

具体课程内容请参见课程大纲。

# 1. 第一讲-什么是图形学

## 1.1. 是什么

## 1.2. 应用

    - video game-画面好不好 在图形学里面就看亮不亮 全局光照
    - movie-特效（最常见的图形学应用）
    - Animations-渲染、模拟
    - design-模拟碰撞、曲面造型、渲染 ，工业设计和家装设计等
    - visualization
    - VR
    - digital illustration
    - simulation
    - GUI

## 1.3. 为什么

![img](https://img.mubu.com/document_image/1a8b8727-0bae-41dd-a355-50fb7287fa37-1269577.jpg)

![img](https://img.mubu.com/document_image/1cfe6186-5bb4-409e-ba73-b4434ecd0a9e-1269577.jpg)

## 1.4. Course topic

### 1.4.1. Rasterization

![img](https://img.mubu.com/document_image/5ce591a5-cc7e-40e6-bc1b-bf49a1da2018-1269577.jpg)

### 1.4.2. Curves and meshes

![img](https://img.mubu.com/document_image/febee5a0-e338-47f3-bd0e-f350f72fcc29-1269577.jpg)

### 1.4.3. Ray tracing

![img](https://img.mubu.com/document_image/4ac902d5-d33a-448c-b294-86ceb4a40a64-1269577.jpg)

### 1.4.4. Animation/Simulation

![img](https://img.mubu.com/document_image/f0c95c9b-9bea-48b4-86df-98132eec0658-1269577.jpg)

## 1.5. 图形学与视觉的区别

![img](https://img.mubu.com/document_image/e2f114d0-e399-4b16-9518-96595e158c96-1269577.jpg)

# 2. 第二讲-向量与线性代数

## 2.1. 图形学的依赖

    - 基础数学、基础物理、信号处理、数值分析、美学

## 2.2. 向量

### 2.2.1. 向量的归一化

### 2.2.2. 和

### 2.2.3. cartesian coordinates

便于表示及计算长度，图形学中默认向量为列向量或用转置写成行向量
![img](https://img.mubu.com/document_image/355997ea-d91c-4efb-81a2-3323456770cc-1269577.jpg)

### 2.2.4. 乘

#### 2.2.4.1. 点乘

        - 结果为标量，在图形学中可以用来计算向量之间的夹角

 ![img](https://img.mubu.com/document_image/6267814f-a1e0-42b1-9ba8-601f7af723af-1269577.jpg)

       - 满足交换律、分配律、结合律
    
        - 笛卡尔坐标系下的点乘

![img](https://img.mubu.com/document_image/d42658e3-40c2-4703-ad35-7b70e070ef1c-1269577.jpg)

        - 在图形学中的应用
    
          - 在图形学中可以用来计算向量之间的夹角
          - 一个向量在另一个向量上的投影

#### 2.2.4.2. Cross product

        - 升维
    
        - 在构建坐标系中很有用 ，a x b得到的向量 垂直于a、b
    
        - 应用
    
          - 判定左和右
    
          - 判断内和外

![img](https://img.mubu.com/document_image/52d65ccf-045b-4765-a483-1b2865e670c3-1269577.jpg)

      - 正交坐标系

## 2.3. 矩阵

    - 结合律 分配律
    - 向量为特殊的m*1矩阵

# 3. 第三讲-transform

## 3.1. why

    - modeling
    - viewing

## 3.2. 2d变换

### 3.2.1. scale缩放（均匀与非均匀缩放）

### 3.2.2. reflection 镜像操作

### 3.2.3. shear matrix 切片矩阵

![img](https://img.mubu.com/document_image/7a0a7bbc-831c-400c-88c0-0f233360e0d0-1269577.jpg)

### 3.2.4. rotation matrix

### 3.2.5. linear transform = matrices

![img](https://img.mubu.com/document_image/3dd49da0-554d-4f10-becf-ec2de8f27d0a-1269577.jpg)

## 3.3. homogeneous coordinates

### 3.3.1. why

#### 对于translation变换 发现无法用矩阵的形式表示，必须加上平移的操作，因为平移不是线性变换. 但是我们又不想将其当作是一种特殊的变换，因此寻求一种新的统一的方式

![img](https://img.mubu.com/document_image/10e78d85-7ed9-45e2-8bfa-4701b05f0fe3-1269577.jpg)

### 3.3.2. solution：

homogeneous coordinates

![img](https://img.mubu.com/document_image/2f5108da-45f8-477d-b5af-b31724a6821f-1269577.jpg)

![img](https://img.mubu.com/document_image/820293ad-563b-4cb1-a914-64844f523dee-1269577.jpg)

2d point 和 2d vector区别对待 是考虑到向量的平移不变性point + point 为这两个点的中点

### 3.3.3. affine transformation

![](https://img.mubu.com/document_image/ceeede9a-570a-438d-bcac-e4c85ce8ddad-1269577.jpg)

任何放射变换都可以用齐次坐标表示只有在二维仿射变换下最后一行才为001，其他有不同的情况

## 3.4. inverse transform

## 3.5. composite transform变换的组合

变换的顺序是很重要的，例如先平移后旋转、先旋转后平移是不一样

![](https://img.mubu.com/document_image/5752ae82-583c-40a5-8730-bacdbe9c3242-1269577.jpg)

![](https://img.mubu.com/document_image/bddfb937-8f3a-4866-a97d-61bf3afbaeb9-1269577.jpg)

## 3.6. decomposing complex transform

![](https://img.mubu.com/document_image/6510d372-10a2-4854-9947-23f55c1b5c85-1269577.jpg)

## 3.7. 3D transformations（包括部分第四讲内容）

### 3.7.1. 三维的变换也是先应用线性变换后应用平移变换

![](https://img.mubu.com/document_image/4e70545f-9751-4d98-aa95-634c30d89dbb-1269577.jpg)

![](https://img.mubu.com/document_image/25563ae6-174d-4cda-89ef-85aade52b6cc-1269577.jpg)


### 3.7.2. 三维的缩放和平移 旋转

#### 3.7.2.1. 缩放和平移

![](https://img.mubu.com/document_image/91404e78-c139-4e55-a456-d90504e3c8de-1269577.jpg)

#### 3.7.2.2. 3D旋转

注意观察绕y轴的旋转矩阵 、循环对称的性质。这是因为二位平面定义时，逆时针实际是在三维从z正向看，因此3维绕y旋转，逆时针实际是z向x转，但是旋转矩阵的行列对应关系是x向z转，取逆（转置）就得到了

![](https://img.mubu.com/document_image/d45240f4-590f-47fc-b21d-0d0ea4810d5c-1269577.jpg)

##### 3.7.2.2.1. 欧拉角

用欧拉角的形式来将任意旋转矩阵分解为绕xyz轴的旋转组合

![](https://img.mubu.com/document_image/ec08d822-8368-4b23-9319-68b337ab584e-1269577.jpg)

##### 3.7.2.2.2. Rodrigues' rotation formula

1. 绕任意轴，先将轴的起点平移到原点 旋转，在平移回去 2.N，在计算向量叉乘的时候，用矩阵的表示方式
   ![](https://img.mubu.com/document_image/f87263b9-f838-45d5-a829-f102749074c1-1269577.jpg)

2. 证明
3. 四元数目的是为了方便旋转的差值计算

## 3.8. 补充内容

![](https://img.mubu.com/document_image/e19b5ac9-fa4f-43e2-909c-5d26c14a45a9-1269577.jpg)

旋转矩阵的逆等于旋转矩阵的转置，我们逆等于它的转置的矩阵称之为正交矩阵

# 4. 第四讲-transformation Cont.

## 4.1. viewing transformation

### 4.1.1. view / camera transformation

#### 4.1.1.1. MVP

![img](https://img.mubu.com/document_image/80e88580-5e1a-4537-b76b-a68940b27d5f-1269577.jpg)

#### 4.1.1.2. 相机的定义，如何做view transformation

![img](https://img.mubu.com/document_image/38c54e73-cdb0-4587-a4c6-2eec09915534-1269577.jpg)

#### 4.1.1.3. key observation 

当相机与物体之间不存在相对运动时候，照片是一样的，因此可以定义一个坐标系。简化操作，这里是右手坐标系

![img](https://img.mubu.com/document_image/9466dfdb-ad97-48c7-89cb-7735d740186f-1269577.jpg)

#### 4.1.1.4. 将任意位置摆放的相机转为标准的摆放

![img](https://img.mubu.com/document_image/98f6e313-5e25-4313-a13e-48465bbfa133-1269577.jpg)

#### 4.1.1.5. 数学表达

![img](https://img.mubu.com/document_image/e52bbd32-0202-4f5f-865e-95126a1ee728-1269577.jpg)

        - 这里是先平移再旋转
        - 假如将任意轴旋转到某个标准轴，如001，会很难，那么将001旋转到任意轴，会简单很多，因此这里用了逆的概念
        - 旋转矩阵是正交矩阵，因此它的逆等于它的转置

#### 4.1.1.6. summary

这里物体随着相机一块运动

![img](https://img.mubu.com/document_image/1e71eb73-8753-4173-9861-76855a0fab2b-1269577.jpg)

### 4.1.2. projection transformation

#### 4.1.2.1. 二者差别

![img](https://img.mubu.com/document_image/2396b55d-f5f2-4d79-8b7f-8cb1b1179605-1269577.jpg)

#### 4.1.2.2. orthographic projection

##### 4.1.2.2.1. 简单的理解

![img](https://img.mubu.com/document_image/9594fc38-b413-48b4-8714-0b0e310a362c-1269577.jpg)

##### 4.1.2.2.2. 方向的通用定义

这里f(far)<n(near)，因为我们是看向-z方向，使得near和far并不直观，这也就是在OpenGL的API中使用左手坐标系的原因，看起来更直观。

![img](https://img.mubu.com/document_image/dac29c36-4cd7-41be-b934-883abbf6fd71-1269577.jpg)

![img](https://img.mubu.com/document_image/9661458c-4728-4f93-87f3-60aa4e6ec7a7-1269577.jpg)

##### 4.1.2.2.3. transformation matrix。这里2是因为缩放到（-1，1）之间，长度为2

![img](https://img.mubu.com/document_image/0d788042-683b-4337-bee0-38c7a12a7663-1269577.jpg)

#### 4.1.2.3. perspective projection

近大远小，图形学中应用最广泛的投影，平行线会相较于一点

##### 4.1.2.3.1. 回忆知识点！！！

![img](https://img.mubu.com/document_image/87a35fd3-ee6b-4103-b19e-7148c15a3557-1269577.jpg)

![img](https://img.mubu.com/document_image/5b4a420c-0fd5-48c8-b811-813a192b479d-1269577.jpg)

##### 4.1.2.3.2. 怎么做透视投影，拆分思路？规定近平面四个点不变，原平面z值不变

![img](https://img.mubu.com/document_image/77e38933-c62c-4780-b380-9b29904b679f-1269577.jpg)

          - 将投影squish为正视。注意这里用到了上面说的两个不变条件

![img](https://img.mubu.com/document_image/e7bdaddf-6de8-4204-951e-2c46584d7251-1269577.jpg)

![img](https://img.mubu.com/document_image/cb0b023d-e2c5-4a72-935b-7d7736b2024e-1269577.jpg)

![img](https://img.mubu.com/document_image/9e834fef-fb26-4e03-9e3a-371553e8780f-1269577.jpg)

![img](https://img.mubu.com/document_image/4c5e2463-677b-4325-a588-61ae49f1e1ad-1269577.jpg)

![img](https://img.mubu.com/document_image/11f81969-397a-45ac-b723-341f84b1f412-1269577.jpg)

![img](https://img.mubu.com/document_image/c3a5b1aa-0943-4d10-b25e-2c540b875bfe-1269577.jpg)

![img](https://img.mubu.com/document_image/a5e05ae1-a91e-4f23-9ebc-189bc79413ac-1269577.jpg)

          - Do orthographic projection (Mortho) to finish

![img](https://img.mubu.com/document_image/6eaf924c-6df8-4962-ac65-f49fd65894a1-1269577.jpg)

        - 对于near和far平面 他们的z成什么样一种变化，变小 大还是不变，根据计算的投影矩阵得到是变小

# 5. 第五讲-光栅化rasterization 1（triangles）

## 5.1. 透视投影

### 5.1.1. 近平面：长宽比/垂直可视角度

![img](https://img.mubu.com/document_image/0a9a0049-359e-4ca0-9706-2e8b0a041979-1269577.jpg)

### 5.1.2. fovY与l、r、b、t关系

![img](https://img.mubu.com/document_image/1192fd5a-2002-4e83-9195-de6ef2ac347e-1269577.jpg)

### 5.1.3. MVP之后 需要将canonical cube to screen-光栅化

#### 5.1.3.1. 定义屏幕空间

#### 5.1.3.2. 变换到xy平面

![img](https://img.mubu.com/document_image/8b23a7e1-bb41-4d3c-b7f4-d10245959ed8-1269577.jpg)

#### 5.1.3.3. rasterizing triangles into pixels

##### 5.1.3.3.1. 显示设备

![img](https://img.mubu.com/document_image/fdab3b9d-dc80-4bbf-b81d-52ba3ee7c804-1269577.jpg)

![img](https://img.mubu.com/document_image/6d476f21-9de4-40a9-816d-871cd3c1d952-1269577.jpg)

##### 5.1.3.3.2. Rasterization: Drawing to Raster Displays

1. mesh
       - Polygon Meshes多边形网格
       - triangle meshes-why

![img](https://img.mubu.com/document_image/3709acb4-3594-440f-b752-74c2bd9582f3-1269577.jpg)

2.  triangle 与屏幕像素之间的关系

![img](https://img.mubu.com/document_image/d5fe1729-4bc9-41ed-b6dc-d02bd4b3a35a-1269577.jpg)

            - a simple approach：sampling
    
              - Rasterization As 2D Sampling

  ![img](https://img.mubu.com/document_image/1e663176-cb1d-4d68-aac6-e57662d674b1-1269577.jpg)

              - Sample If Each Pixel Center Is Inside Triangle

  ![img](https://img.mubu.com/document_image/606614f0-7de0-4958-aee7-40ddb475f052-1269577.jpg)

              - 要注意的是，像素是i，j表示，但是像素的中心是在i+0.5,j+0.5的

  ![img](https://img.mubu.com/document_image/7d834056-5fcd-49d6-8b7a-03af7a4af79e-1269577.jpg)

              - 接下就是判断点是否在三角形内部：某一顺逆时针方向上的向量叉乘

  ![img](https://img.mubu.com/document_image/8cc5c94c-efb5-4d9a-a195-49652d86110f-1269577.jpg)

              - 这样全部的便利，似乎很慢，因此改进型
    
                - 包围盒AABB

![img](https://img.mubu.com/document_image/42b21f55-0d0f-45dc-8a87-0e50992fa56e-1269577.jpg)

                - Incremental Triangle Traversal (Faster?)

![img](https://img.mubu.com/document_image/cd25c50e-9049-4f26-9281-74ca815fff37-1269577.jpg)

##### 5.1.3.3.3. Rasterization on Real Displays

          - Jaggies锯齿问题 走样

![img](https://img.mubu.com/document_image/4b6931e1-9458-4756-9774-ecfa5f22964a-1269577.jpg)

# 6. 第六讲-光栅化2（反走样和z-缓冲Antialiasing and z-buffering）

## 6.1. Antialiasing

## 6.2. Sampling theory

### 6.2.1. 回忆内容

像素中心是否在三角形内部，但是这样得到的结果存在锯齿，学名走样

### 6.2.2. 采样理论

#### 6.2.2.1. 采样在图形学中广泛存在，采样可以发生在不同的位置、时间

![img](https://img.mubu.com/document_image/630afaa1-a2b0-433a-af7e-f08ab8916ce9-1269577.jpg)

##### 6.2.2.1.1. 采样产生的问题也是广泛存在的

1. 锯齿

![img](https://img.mubu.com/document_image/be7f45b9-c4d4-40d1-9a41-9642ce9a4c84-1269577.jpg)

2. 图片中的摩尔纹

![img](https://img.mubu.com/document_image/73fc5a98-59b8-41ae-8a84-0930b1138689-1269577.jpg)

3. Wagon Wheel Illusion (False Motion)

![img](https://img.mubu.com/document_image/a503c57f-c1e3-40d7-af01-ef5d661010bb-1269577.jpg)

4. 总结

![img](https://img.mubu.com/document_image/e2d78d4f-3093-4b5e-8e95-ceace80333be-1269577.jpg)

#### 6.2.2.2. Antialiasing Idea: Blurring (Pre-Filtering) Before Sampling，即先模糊再采样，反之不行

##### 6.2.2.2.1. 反采样原理

1. Rasterization: Point Sampling in Space

![img](https://img.mubu.com/document_image/cea84e1e-efe0-43d3-818d-39c29720b89e-1269577.jpg)

2. Rasterization: Antialiased Sampling

![img](https://img.mubu.com/document_image/17cd8abd-16e5-4162-8284-98e80a5ad501-1269577.jpg)

3. 二者对比

![img](https://img.mubu.com/document_image/40f9ac87-9b06-4ecf-ad9e-a2b309d03339-1269577.jpg)

![img](https://img.mubu.com/document_image/a36273a9-9b99-482e-adc4-81c970055108-1269577.jpg)

##### 6.2.2.2.2. 为什么欠采样会引入走样 / 为什么 pre-filtering then sampling can do antialiasing

1. 相关知识：

           - 频域Frequency Domain
       
             - 频率f 周期T

  ![img](https://img.mubu.com/document_image/327eec5d-f4f7-40c8-8e09-80378821682a-1269577.jpg)

              - Fourier Transform（任一周期性函数都是正弦/余弦函数得线性组合）

  ![img](https://img.mubu.com/document_image/c695d60b-3a5d-4852-8400-08afd4a2c343-1269577.jpg)

              - Fourier Transform Decomposes A Signal Into Frequencies傅里叶变换将信号分解成频率，注意时域与频域之间得变换

  ![img](https://img.mubu.com/document_image/5feab733-3bfc-4618-ab40-4b56ad00d08b-1269577.jpg)

              - Higher Frequencies Need Faster Sampling

  ![img](https://img.mubu.com/document_image/5a7e5fd5-6e2b-4d1a-a2bb-749434c49fc9-1269577.jpg)

              - Undersampling Creates Frequency Aliases（两种不同频率得函数 得到了同一个采样结果，这就是走样）

  ![img](https://img.mubu.com/document_image/65dd7d20-c934-427e-a32f-984f434c98ec-1269577.jpg)

            - Filtering（= Getting rid of certain frequency contents）
    
              - Visualizing Image Frequency Content （注意观察）时域图片经过傅里叶变换得到频域图

  ![img](https://img.mubu.com/document_image/26c09729-87f4-4833-9700-dcbc5ba1eec7-1269577.jpg)

                - 观察一：频谱图包含低频（中心定义为最低频区域）、高频信息（周围定义为高频），也就是从中心到周围越来越高，包含的信息用亮度来表示，这个图中就是说图片中低频信息很多
                - 观察二：水平/竖直高亮条：在分析信号得时候，认为信号是周期性重复出现得，而对于照片来讲，我们将其水平和竖直周期性延拓，那么边界得位置会发生剧烈得变化，产生高频信息
    
              - Filter Out Low Frequencies Only (Edges)，只保留得边界信息

  ![img](https://img.mubu.com/document_image/6f205f5e-bd96-4705-8b47-5970c455d2d5-1269577.jpg)

              - Filter Out High Frequencies (Blur) 低通之后丢失边界信息 变得模糊

  ![img](https://img.mubu.com/document_image/682d5b34-1f62-4d2d-9ec1-8222775a16ef-1269577.jpg)

              - 带通滤波
    
                - Filter Out Low and High Frequencies

![img](https://img.mubu.com/document_image/668501f5-abc5-4f0b-8168-6c46ea5d8db6-1269577.jpg)

                - Filter Out Low and High Frequencies

![img](https://img.mubu.com/document_image/580c4942-5bb3-4c75-b220-31dea20c85ad-1269577.jpg)

            - Filtering = Convolution(= Averaging)
    
              - Convolution 滑动窗口

  ![img](https://img.mubu.com/document_image/1f3853fe-cd88-4127-95c7-384e27c18925-1269577.jpg)

              - Convolution Theorem时域卷积=频域乘积，时域乘积=频域卷积。两种时域卷积得方式

  ![img](https://img.mubu.com/document_image/e1a57d39-fee7-41c8-92b9-970d82dd322b-1269577.jpg)

  ![img](https://img.mubu.com/document_image/e32f5e99-8262-4f06-bb6e-99d9ae68fd68-1269577.jpg)

              - Box Filter

  ![img](https://img.mubu.com/document_image/a34d6721-d4fc-4da1-a683-b8051973fc23-1269577.jpg)

              - Box Function = “Low Pass” Filter

  ![img](https://img.mubu.com/document_image/e556fec4-50d3-4093-a1c1-4e322416f708-1269577.jpg)

              - Wider Filter Kernel = Lower Frequencies 更大得卷积核 更模糊

  ![img](https://img.mubu.com/document_image/479e5727-134b-4f72-8277-56b09e26d0cf-1269577.jpg)

            - Sampling = Repeating Frequency Contents
    
              - Sampling = Repeating Frequency Contents

  ![img](https://img.mubu.com/document_image/2e55c6eb-440b-459b-a0f3-802f3e359930-1269577.jpg)

                - 用频率得角度去看采样，同时时域采样等于频域得周期性延拓
    
              - Aliasing = Mixed Frequency Contents

  ![img](https://img.mubu.com/document_image/df90cef2-3744-4c8e-a268-1c85a28b6ff2-1269577.jpg)

                - 对于冲激函数，频域间隔等于时域间隔得倒数，因此越稀疏，采样间隔越宽，再频域则越窄，导致走样

##### 6.2.2.2.3. Antialiasing in practice

1. How Can We Reduce Aliasing Error?

![img](https://img.mubu.com/document_image/2e36a849-ab90-42b9-8341-314d308808be-1269577.jpg)

2. Antialiasing = Limiting, then repeating

![img](https://img.mubu.com/document_image/35980651-75d2-456a-939f-7499abaf8c06-1269577.jpg)

3. Regular Sampling

![img](https://img.mubu.com/document_image/f6d41012-b24d-4df8-b497-93df0ed9ae96-1269577.jpg)

4. Antialiased Sampling

![img](https://img.mubu.com/document_image/9139c13f-46c3-4aea-8a4f-0ec500709549-1269577.jpg)

5. A Practical Pre-Filter

![img](https://img.mubu.com/document_image/a88e5687-942f-4278-9e79-1b163e8580fd-1269577.jpg)

![img](https://img.mubu.com/document_image/02f19ffd-5cff-4c47-8295-ebe8d806cf27-1269577.jpg)

##### 6.2.2.2.4. Antialiasing By Supersampling(MSAA)

1. Point Sampling: One Sample Per Pixel

![img](https://img.mubu.com/document_image/a6cee472-eea9-487b-a13b-63c3fcaa6929-1269577.jpg)

2. Supersampling

![img](https://img.mubu.com/document_image/54545c11-a33d-45bf-a985-e4c625e00c0d-1269577.jpg)

            - step1：Take NxN samples in each pixel

![img](https://img.mubu.com/document_image/cd292507-ee0c-4933-938c-d15c05855676-1269577.jpg)

            - Step 2：Average the NxN samples “inside” each pixel.

![img](https://img.mubu.com/document_image/eb2c0437-867b-47ca-b59f-973a981214f0-1269577.jpg)

            - Result

![img](https://img.mubu.com/document_image/71425276-0958-4b13-ad12-6b120c5962fc-1269577.jpg)

![img](https://img.mubu.com/document_image/5492e046-5900-492e-b869-441a4484bccf-1269577.jpg)

            - attention：这只是对反走样得近似，第一步是对信号得模糊，supersample只是得到近似三角形得覆盖，并没有增加分辨率

#### 6.2.2.3. 总结：

![img](https://img.mubu.com/document_image/41437745-f1ae-4069-9d28-73a761e5bdb6-1269577.jpg)

## 6.3. visibility / occlusion（第七讲视频）-- Z-Buffering

### 6.3.1. Painter’s Algorithm画家算法（特指油画）

![img](https://img.mubu.com/document_image/4db64559-cfc5-4312-ab31-3a6cafedcc9c-1269577.jpg)

![img](https://img.mubu.com/document_image/79d7fb43-0ae4-4082-832f-f56c57713e0a-1269577.jpg)

### 6.3.2. Z-buffer 注意这里的frame buffer 和depth buffer的作用。并且有一个假设z是正值；是对像素的排序，而不是对三角形的远近排序

![img](https://img.mubu.com/document_image/d4a319e9-2c5f-4c45-808a-e3846759ff8d-1269577.jpg)

### 6.3.3. z-buffer的例子

![img](https://img.mubu.com/document_image/4bd25235-7fd4-4aae-a370-42e897ac38ad-1269577.jpg)

### 6.3.4. z-buffer算法；每轮绘制都有深度计算的更新

![img](https://img.mubu.com/document_image/6a062b6c-03d5-4528-ac55-ac0ffe15fa55-1269577.jpg)

![img](https://img.mubu.com/document_image/8260429e-64fa-4175-8409-644f81d6cdf0-1269577.jpg)

### 6.3.5. z-buffer复杂度

#### 6.3.5.1. Complexity

1. O(n) for n triangles (assuming constant coverage)
2. How is it possible to sort n triangles in linear time?: 因为每次只比较记录一次最小值，不用排序

#### 6.3.5.2. Drawing triangles in different orders? ：与顺序无关

#### 6.3.5.3. Most important visibility algorithm

Implemented in hardware for all GPUs

#### 6.3.5.4. 在MSAA中 需要对每一个supersample得到的采样点都做Z-buffer

# 7. 第七讲-Shading 1 (Illumination, Shading and Graphics Pipeline)

## 7.1. 前面只是总结，引子

![img](https://img.mubu.com/document_image/8167f879-08cc-4d2b-8bca-4bd39de14132-1269577.jpg)

## 7.2. Shading：definition

### 7.2.1. The darkening（明暗） or coloring of an illustration or diagram with parallel lines or a block of color.

### 7.2.2. The process of applying a material to an object.

## 7.3. A Simple Shading Model (Blinn-Phong Reflectance Model)

### 7.3.1. Perceptual Observations高光，漫反射，环境光

![img](https://img.mubu.com/document_image/a4e9f0a9-0209-4f92-a9ec-a5fafc13816e-1269577.jpg)

### 7.3.2. Shading is Local很关键的一个点，局部局部

![img](https://img.mubu.com/document_image/3bd43e40-8951-4e27-8e0b-0d85e46c5e3d-1269577.jpg)

为什么l向量不从光源出发？不引入光源结构的前提下，只从着色点出发，简化模型，但是这也存在局限性，如右图

### 7.3.3. Diffuse Reflection

#### 7.3.3.1. Light is scattered uniformly in all directions均匀性

![img](https://img.mubu.com/document_image/4e760a13-4459-48c9-abaf-6b9e823bdb64-1269577.jpg)

#### 7.3.3.2. But how much light (energy) is received? 考虑的是单位面积接收到的能量，其实四季的变化的原因就在于获取不同季节内获得的太阳能量的多少。

![img](https://img.mubu.com/document_image/863ff036-356d-4c22-887b-2aa0384097e4-1269577.jpg)

#### 7.3.3.3. Light Falloff，同时也要考虑到光的衰减。点光源某一时刻集中于一个球壳上，考虑到能量守恒，必然导致越大的球壳上 某一点越衰减。

![img](https://img.mubu.com/document_image/61eab0f4-9863-418d-96e6-a2b588edcfc1-1269577.jpg)

#### 7.3.3.4. Lambertian (Diffuse) Shading：kd漫反射能量吸收系数，与视角向量无关

![img](https://img.mubu.com/document_image/6b72f883-a298-48c5-bcfb-061774023d8f-1269577.jpg)

![img](https://img.mubu.com/document_image/82702f20-1ea7-41e0-a1d9-5cd5afa64f24-1269577.jpg)

#### 7.3.3.5. 问题：不考虑观测点到着色点的距离吗？

这个地方需要用到辐射亮度学的知识，先这样!!!

# 8. 第八讲-Shading 2 (Shading, Pipeline and Texture Mapping)

## 8.1. Blinn-Phong reflectance model

### 8.1.1. Specular

#### 8.1.1.1. Intensity depends on view direction

![img](https://img.mubu.com/document_image/f6c9d68b-d0ee-43a5-91f3-b7f2bd5f6eae-1269577.jpg)

#### 8.1.1.2. V和R之间的关系不便求解，因此提出用半程向量来衡量，同时类比漫反射的式子

![img](https://img.mubu.com/document_image/2d86aa2e-3618-4358-85f4-fd341a2f8930-1269577.jpg)

![img](https://img.mubu.com/document_image/7be2bc33-f859-4946-9dc4-a9961e704d41-1269577.jpg)

#### 8.1.1.3. 效果图

![img](https://img.mubu.com/document_image/23174045-1d26-4bb1-9930-77eeeab926da-1269577.jpg)


### 8.1.2. ambient terms 

#### 8.1.2.1. Shading that does not depend on anything，任一着色点接收环境光的相同的

![](https://img.mubu.com/document_image/d110c175-a0c7-421c-ab4e-77256e5163e6-1269577.jpg)

### 8.1.3. 问题：磨砂材质是否完全没有高光？不一定，需要看磨砂的程度

## 8.2. Shading frequencies 

### 8.2.1. What caused the shading difference?

![](https://img.mubu.com/document_image/4cbdaad8-dd44-4f11-a1cd-d40fb36c3a1e-1269577.jpg)

#### 8.2.1.1. 左：Shade each triangle (flat shading)

对一个三角形或者四边形面片，用面法向着一个色

![](https://img.mubu.com/document_image/32fb2b23-c32d-40e7-84e4-b5f8356ac6ae-1269577.jpg)

#### 8.2.1.2. 中：Shade each vertex (Gouraud shading) 

对面片的顶点法向着色，在三角形内部着色

![](https://img.mubu.com/document_image/6a34fc48-c82b-4512-959b-40439804269a-1269577.jpg)

#### 8.2.1.3. 右：Shade each pixel (Phong shading)

每个像素着色，这里注意着色频率和着色模型的区别

![](https://img.mubu.com/document_image/eba5de57-b731-4e67-bdfc-26cc804d382a-1269577.jpg)

### 8.2.2. Shading Frequency: Face, Vertex or Pixel：很难说那个更好，在面足够多时，也可以达到很好的着色效果

![](https://img.mubu.com/document_image/5c636d60-3586-4dfa-9be9-ee2992fc72dc-1269577.jpg)

### 8.2.3. Defining Per-Vertex Normal Vectors（跟之前项目采样之后的操作很相似）

![](https://img.mubu.com/document_image/070c7410-34b1-4b0b-bdbb-4d7927f4a181-1269577.jpg)

### 8.2.4. Defining Per-Pixel Normal Vectors

![](https://img.mubu.com/document_image/e476004f-f312-434c-8077-2f0738cd6a37-1269577.jpg)

## 8.3. Graphics pipeline

### 8.3.1. Graphics Pipeline 

![](https://img.mubu.com/document_image/e01ba619-494a-4201-9f86-46651f76c435-1269577.jpg)

![](https://img.mubu.com/document_image/922a1762-722a-4abd-b5af-4dd44ff81742-1269577.jpg)

![](https://img.mubu.com/document_image/12902246-e6aa-4dfa-903e-c816d4d6463e-1269577.jpg)

![](https://img.mubu.com/document_image/92f5122a-8fe6-475c-afe5-9d246d0f64a7-1269577.jpg)

![](https://img.mubu.com/document_image/76a6e38a-ccfe-4515-846d-6a7f49e03357-1269577.jpg)

![](https://img.mubu.com/document_image/0fcd62e6-4662-4309-aa89-5834052d24d8-1269577.jpg)

### 8.3.2. shading和texture maping这块最关键的是顶点着色（vertex shader，vertex processing阶段）还是像素着色（fragment shader，fragement processing阶段）

### 8.3.3. Shader Programs 

![](https://img.mubu.com/document_image/d8e31741-5546-40b9-9f70-301e69b723b2-1269577.jpg)

![](https://img.mubu.com/document_image/13b4780f-c85c-4698-ae91-c514fb696fb6-1269577.jpg)

1. Program vertex and fragment processing stages
2. Describe operation on a single vertex (or fragment)

## 8.4. Texture Mapping纹理映射

### 8.4.1. Different Colors at Different Places?观察球和地板，共用一套相同的反射模型，但是可以呈现不同的图案颜色，在物体不同位置定义不同属性，这就引出纹理映射

![](https://img.mubu.com/document_image/468940c4-63a3-4383-944b-15a83f04ea6b-1269577.jpg)

### 8.4.2. surfaces are 2D任意一个三维物体表面其实是二维的。定义在哪？定义在物体表面，简历表面和一张图的对应关系

![](https://img.mubu.com/document_image/3509af90-1dd0-464b-99f9-9963b531f62f-1269577.jpg)

#### 8.4.2.1. Texture Applied to Surface

![](https://img.mubu.com/document_image/73699934-d31a-40bd-95f2-ff74dc07798b-1269577.jpg)

#### 8.4.2.2. Visualization of Texture Coordinates

![](https://img.mubu.com/document_image/b7ae13a0-b576-4f81-a3ca-4bc0c7a1e2e9-1269577.jpg)

#### 8.4.2.3. Texture Applied to Surface

![](https://img.mubu.com/document_image/2c405a60-8685-4fcf-bc31-808d7b8acae3-1269577.jpg)

#### 8.4.2.4. Textures applied to surfaces

![](https://img.mubu.com/document_image/e4c0bf19-25f9-448c-8fe5-7b2b7d041b61-1269577.jpg)

#### 8.4.2.5. Visualization of texture coordinates

![](https://img.mubu.com/document_image/da19ff92-fb9d-486e-a4b7-e3b67c8f7a8a-1269577.jpg)

#### 8.4.2.6. Textures can be used multiple times!

![](https://img.mubu.com/document_image/1486b733-4fc0-464a-a8f9-ff8893f3d97b-1269577.jpg)


# 9. 第九讲-Shading 3 (Texture Mapping cont.)

## 9.1. Barycentric coordinates (Interpolation Across Triangles:)

### 9.1.1. Interpolation Across Triangles

#### 9.1.1.1. Why do we want to interpolate?

        - Specify values at vertices
        - Obtain smoothly varying values across triangles

#### 9.1.1.2. What do we want to interpolate?

        - Texture coordinates, colors, normal vectors, …

#### 9.1.1.3. How do we interpolate?

        - Barycentric coordinates

### 9.1.2. Barycentric Coordinates,这里的三个系数是重心坐标

![img](https://img.mubu.com/document_image/eb467dab-a12b-4b8d-9036-066660068307-1269577.jpg)

![img](https://img.mubu.com/document_image/d72c1339-4d61-460d-8c3e-31ab6a7bdf88-1269577.jpg)

### 9.1.3. Geometric viewpoint — proportional areas用面积占比的方式计算重心坐标

![img](https://img.mubu.com/document_image/1d600f1b-0830-48f4-9275-ce43d1d847ad-1269577.jpg)

![img](https://img.mubu.com/document_image/4c154796-242a-4faa-a102-2f47b4de588c-1269577.jpg)

### 9.1.4. Using Barycentric Coordinates

![img](https://img.mubu.com/document_image/ceffa8b8-3946-4d98-ae0b-97734c0813a9-1269577.jpg)

注意在投影变换下，三维空间下的重心坐标和投影之后的二维计算得到的重心坐标是不一样的，因此对于三维空间中的属性，需要先在三维中做插值，再投影到二维中去运用，这也就是重心坐标的局限性。

## 9.2. Texture queries

### 9.2.1. Simple Texture Mapping: Diffuse Color

![img](https://img.mubu.com/document_image/42bdef85-0fda-4cfc-83d3-ea34a8af9f60-1269577.jpg)

### 9.2.2. texture中的问题：

#### 9.2.2.1. Texture Magnification (What if the texture is too small?)

##### 9.2.2.1.1. Texture Magnification - Easy Case纹理分辨率较低

![img](https://img.mubu.com/document_image/0d5ebf9c-748f-4748-b7dc-920b54a4c54a-1269577.jpg)

          - nearest：此时 会映射到纹理的非整数位置，此时利用round算法映射为整数，即多个像素映射到同一个整型texel，锯齿状
    
          - 双线性插值Bilinear Interpolation：Bilinear interpolation usually gives pretty good results at reasonable costs

![img](https://img.mubu.com/document_image/3920f0d6-fab9-4284-a9c5-f68d675e69bb-1269577.jpg)

          - bicubic插值

#### 9.2.2.2. Texture Magnification (hard case) (What if the texture is too large?)

##### 9.2.2.2.1. 会产生更为严重的问题，越远处，一个像素覆盖的纹素越多，也就是会

##### 9.2.2.2.2. Point Sampling Textures — Problem

![img](https://img.mubu.com/document_image/762b7be3-85cd-4dba-bbcf-516f2e7cc994-1269577.jpg)

##### 9.2.2.2.3. Screen Pixel “Footprint” in Texture

![img](https://img.mubu.com/document_image/8a68cf56-6551-425b-8628-bda86c68f6ec-1269577.jpg)

##### 9.2.2.2.4. Will Supersampling Do Antialiasing?-最原始的想法 做supersample，但是这样耗费资源较大

![img](https://img.mubu.com/document_image/f9a9e615-65b2-4a00-9ceb-b4876f4cfafa-1269577.jpg)

##### 9.2.2.2.5. Antialiasing — Supersampling？

![img](https://img.mubu.com/document_image/7d484e68-2207-4445-a87d-b2b4451cf0f3-1269577.jpg)

##### 9.2.2.2.6. Point Query vs. (Avg.) Range Query构想：是否可以从前面的点查询转为范围查询

![img](https://img.mubu.com/document_image/176e6d0d-05f0-4325-8b6f-5be60ecc6cdc-1269577.jpg)

![img](https://img.mubu.com/document_image/02235b2a-6405-499c-a24e-0b094f3cc50b-1269577.jpg)

#### 9.2.2.3. Mipmap - Allowing (fast, approx., square) range queries：估计值，因此是不准确的；只能做近似正方形的查询，在渲染之前把不同level的纹理都生成出来

##### 9.2.2.3.1. Mipmap (L. Williams 83)

![img](https://img.mubu.com/document_image/cfd216fa-b860-400a-b999-26c09644cba8-1269577.jpg)

![img](https://img.mubu.com/document_image/6a646c66-7e56-4638-a98f-d28aadd70b28-1269577.jpg)

          - What is the storage overhead of a mipmap?：根据上面的图可以看到，后一张纹理是前一张的四分之一，利用等比数列的公式可以计算得到 总存储量只多了三分之一

##### 9.2.2.3.2. Computing Mipmap Level D

![img](https://img.mubu.com/document_image/2a59191c-0a4f-4fb7-85fb-b8be52920a1a-1269577.jpg)

![img](https://img.mubu.com/document_image/1bfdc62d-4e42-4480-8448-ed6d6b1cae31-1269577.jpg)

![img](https://img.mubu.com/document_image/bfe76a22-07eb-48a3-887b-0eb025b5429e-1269577.jpg)

##### 9.2.2.3.3. Visualization of Mipmap Level

![img](https://img.mubu.com/document_image/20b61772-e162-40ad-b677-62818ac41d51-1269577.jpg)

##### 9.2.2.3.4. Trilinear Interpolation

![img](https://img.mubu.com/document_image/b5714558-6d97-4aa5-8186-773c5cc67759-1269577.jpg)

##### 9.2.2.3.5. Visualization of Mipmap Level

![img](https://img.mubu.com/document_image/22b27cb7-58b0-479f-bfb6-88e4c50b5b7e-1269577.jpg)

##### 9.2.2.3.6. Mipmap Limitations可以看到在最后的mipmap中，会出现很大的模糊，mipmap只能做正方块范围查询，做平均值，三线性插值也会不准

![img](https://img.mubu.com/document_image/fd329038-2c15-4f0c-a485-136c9453d495-1269577.jpg)

#### 9.2.2.4. Anisotropic Filtering各向异性过滤

![img](https://img.mubu.com/document_image/93e21460-d982-4b98-94f3-8aa5dd91a670-1269577.jpg)

##### 9.2.2.4.1. Irregular Pixel Footprint in Texture

![img](https://img.mubu.com/document_image/9983fe13-c8c0-4f07-8d2d-a3161eac69d1-1269577.jpg)

##### 9.2.2.4.2. Anisotropic Filtering

![img](https://img.mubu.com/document_image/1303284f-f353-4d0d-97d0-69b5e0121b8a-1269577.jpg)

开销增加三倍，在不同方向上表现不同

## 9.3. Applications of textures

### 9.3.1. Many, Many Uses for Texturing

![img](https://img.mubu.com/document_image/68a3e2a7-1d76-43ee-9ffa-1d0515087b00-1269577.jpg)

### 9.3.2. Environment Map用纹理描述环境图

![img](https://img.mubu.com/document_image/2a4164dd-2d8b-46e3-918e-d9fdc35359db-1269577.jpg)

### 9.3.3. Environmental Lighting

![img](https://img.mubu.com/document_image/3cc2ab12-525b-404b-be6f-eba5e108b4e5-1269577.jpg)

### 9.3.4. Spherical Environment Map

![img](https://img.mubu.com/document_image/1954c701-fe48-44eb-ab4a-4e970ac495e0-1269577.jpg)

#### 9.3.4.1. Spherical Map — Problem看最上面发现不是均匀的描述

![img](https://img.mubu.com/document_image/da4ce633-4f73-4950-8a92-72f996493480-1269577.jpg)

#### 9.3.4.2. Cube Map从球壳上做球面投影到立方体上

![img](https://img.mubu.com/document_image/e594c1cc-bb94-4360-97ff-9d51d5420e85-1269577.jpg)

### 9.3.5. textures can affect shading凹凸贴图（法向贴图）

#### 9.3.5.1. 并不一定代表颜色

        - ![img](https://img.mubu.com/document_image/8afee1f8-fad3-4938-bec5-22d0fdee1248-1269577.jpg)

##### 9.3.5.1.1. Bump Mapping

![img](https://img.mubu.com/document_image/50b3503e-1e28-40ef-8825-b6a52b02b1a2-1269577.jpg)

##### 9.3.5.1.2. How to perturb the normal (in flatland)

![img](https://img.mubu.com/document_image/293faa8e-a562-4feb-bbe7-cffe05df625f-1269577.jpg)

##### 9.3.5.1.3. How to perturb the normal (in 3D)

![img](https://img.mubu.com/document_image/f60e910a-0230-4f9c-905c-5d2ea82e5c95-1269577.jpg)

#### 9.3.5.2. Displacement mapping — a more advanced approach

![img](https://img.mubu.com/document_image/3c335d45-9d29-466f-b23a-f271c4d086ae-1269577.jpg)

#### 9.3.5.3. 3D Procedural Noise + Solid Modeling

![img](https://img.mubu.com/document_image/6e427887-bc33-4929-a183-480a5f1d9e42-1269577.jpg)

#### 9.3.5.4. Provide Precomputed Shading

![img](https://img.mubu.com/document_image/4087ddd8-7365-468c-ad79-1b398fdcd358-1269577.jpg)

#### 9.3.5.5. 3D Textures and Volume Rendering

![img](https://img.mubu.com/document_image/a731fe1c-3a1c-40b9-9463-5460b265c219-1269577.jpg)

# 10. 第十讲-Geometry 1 - Introduction

## 10.1. Examples of geometry

![img](https://img.mubu.com/document_image/324ccaab-4d6c-4648-bb39-ab7eac34c60a-1269577.jpg)

## 10.2. Various representations of geometry

### 10.2.1. 表达

![img](https://img.mubu.com/document_image/cbeda33f-89d3-4a0a-93a8-d6eb7dc8c028-1269577.jpg)

### 10.2.2. “Implicit” Representations of Geometry

#### 10.2.2.1. 不告诉具体的位置 只告诉满足的某种关系，很难去找到所有的点的具体 位置，但是可以很方便的判断点是否在在surface内外

![img](https://img.mubu.com/document_image/ed5f9dea-0cae-401e-b6bb-0e32b35292fa-1269577.jpg)

#### 10.2.2.2. Implicit Surface – Sampling Can Be Hard

![img](https://img.mubu.com/document_image/ee2b34f5-72c9-4d38-91bf-b7fafecab1f9-1269577.jpg)

#### 10.2.2.3. Implicit Surface – Inside/Outside Tests Easy

![img](https://img.mubu.com/document_image/ba238e4a-1505-4e54-be1f-2968e011ec5d-1269577.jpg)

### 10.2.3. “Explicit” Representations of Geometry

![img](https://img.mubu.com/document_image/231304a7-6987-485c-a595-15cf2e664dde-1269577.jpg)

#### 10.2.3.1. Explicit Surface – Sampling Is Easy

![img](https://img.mubu.com/document_image/57a9423d-29d9-44e3-8a82-6ef68f7c9d7c-1269577.jpg)

#### 10.2.3.2. Explicit Surface – Inside/Outside Test Hard

![img](https://img.mubu.com/document_image/7745947e-0d03-4d6b-bb6a-03ee5db56b7b-1269577.jpg)

### 10.2.4. No “Best” Representation – Geometry is Hard!根据需要选择合适的表达方式

![img](https://img.mubu.com/document_image/375a3bbf-f604-4f12-b5d7-c9fbf0076044-1269577.jpg)

### 10.2.5. More Implicit Representations in Computer Graphics

![img](https://img.mubu.com/document_image/9a91ef19-a2e2-4766-affc-02c4f47607b7-1269577.jpg)

#### 10.2.5.1. Algebraic Surfaces (Implicit)

![img](https://img.mubu.com/document_image/573ce1f7-5fd7-4ffc-9c52-2d9127bdcf9c-1269577.jpg)

#### 10.2.5.2. Constructive Solid Geometry (Implicit) - CSG

![img](https://img.mubu.com/document_image/640d7d68-495c-4924-9468-f5d14134d93b-1269577.jpg)

#### 10.2.5.3. Distance Functions (Implicit)

![img](https://img.mubu.com/document_image/f81bf2a5-ff8f-4c8a-9d18-8d8cc080b5c3-1269577.jpg)

![img](https://img.mubu.com/document_image/6a4e8619-0721-44ba-8dc6-bf0217e1c4fb-1269577.jpg)

如果直接对图形blend，会发现如第一行的第三个结果 黑灰中，若想得到黑白一半的情况，则需要用有向距离函数

#### 10.2.5.4. Blending Distance Functions (Implicit)

![img](https://img.mubu.com/document_image/df3b7fe5-d39d-40e8-8cbb-74674bb8699c-1269577.jpg)

#### 10.2.5.5. Level Set Methods (Also implicit)水平集，注意与distance function的差别

![img](https://img.mubu.com/document_image/facfda0c-daa7-4c85-94a1-6bbf87b19006-1269577.jpg)

##### 10.2.5.5.1. Level Sets from Medical Data (CT, MRI, etc.)

![img](https://img.mubu.com/document_image/7f6617d0-4ef8-41b3-b8c2-1c9efc9ed331-1269577.jpg)

##### 10.2.5.5.2. Level Sets in Physical Simulation

![img](https://img.mubu.com/document_image/d91275e6-d959-414e-a311-80eb20b44193-1269577.jpg)

#### 10.2.5.6. Fractals (Implicit)

![img](https://img.mubu.com/document_image/9df657ea-d4c7-404e-99ed-175380a7dd3e-1269577.jpg)

#### 10.2.5.7. Implicit Representations - Pros & Cons

![img](https://img.mubu.com/document_image/8b5af32e-ac03-47af-bf3e-ae6b908eaa8c-1269577.jpg)

# 11. Lecture 11 Geometry 2 (Curves and Surfaces)

## 11.1. Explicit Representations

### 11.1.1. Many Explicit Representations in Graphics

![img](https://img.mubu.com/document_image/6c20a479-91a3-4053-8de5-982a9a468747-1269577.jpg)

### 11.1.2. Point Cloud (Explicit)

![img](https://img.mubu.com/document_image/def77000-3e2d-4f8f-ae29-1255eda5b07a-1269577.jpg)

### 11.1.3. Polygon Mesh (Explicit)

![img](https://img.mubu.com/document_image/b0c9f7eb-f0d0-46c6-ab91-92344dff8678-1269577.jpg)

### 11.1.4. The Wavefront Object File (.obj) Format

![img](https://img.mubu.com/document_image/b22d19f3-5760-4f3f-a432-44286ffa07f7-1269577.jpg)

## 11.2. Curves

![img](https://img.mubu.com/document_image/5a65b71d-35b2-43f6-9115-ba4d62d0c19a-1269577.jpg)

### 11.2.1. -Bezier curves 贝塞尔曲线

#### 11.2.1.1. Defining Cubic Bézier Curve With Tangents：1.起点和终点；2.起始方向必须过p0p1,终止方向必须过p2p3看，其他的控制点则不强制性通过

![img](https://img.mubu.com/document_image/e8dc0416-5ac5-411a-8ae0-10a65cf88ea1-1269577.jpg)

#### 11.2.1.2. Evaluating Bézier Curves -De Casteljau’s algorithm ：动态展示http://acko.net/

##### 11.2.1.2.1. Bézier Curves – de Casteljau Algorithm：把所有t时间的点都画出来 连起来就是贝塞尔曲线

![img](https://img.mubu.com/document_image/63f17e50-f517-4038-9d57-ac1bd9e4ae84-1269577.jpg)

#### 11.2.1.3. Evaluating Bézier Curves - Algebraic Formula

##### 11.2.1.3.1. de Casteljau algorithm gives a pyramid of coefficients

![img](https://img.mubu.com/document_image/f2061a51-bd75-4c89-a928-50b3796c6b29-1269577.jpg)

##### 11.2.1.3.2. Example: quadratic Bézier curve from three points

![img](https://img.mubu.com/document_image/9419cf87-5b7a-47f9-b927-a98eba55f245-1269577.jpg)

##### 11.2.1.3.3. Bézier Curve – General Algebraic Formula

![img](https://img.mubu.com/document_image/765c4b61-0f6a-4b77-ac5c-c7965ad61541-1269577.jpg)

##### 11.2.1.3.4. Bézier Curve – Algebraic Formula: Example

![img](https://img.mubu.com/document_image/d2be665a-80af-45ad-81c5-62c8f252a2ed-1269577.jpg)

##### 11.2.1.3.5. Cubic Bézier Basis Functions

![img](https://img.mubu.com/document_image/a4f90e69-9ac7-4e50-a1dc-3579e3b7925c-1269577.jpg)

##### 11.2.1.3.6. Properties of Bézier Curves

![img](https://img.mubu.com/document_image/70cc59b3-6f0f-4746-b5f9-bccde5aebf36-1269577.jpg)

          - BTW: What’s a Convex Hull

![img](https://img.mubu.com/document_image/fb32af0f-1bed-4115-b942-9b7983279cd9-1269577.jpg)

#### 11.2.1.4. Piecewise Bézier Curves

##### 11.2.1.4.1. Higher-Order Bézier Curves?

![img](https://img.mubu.com/document_image/e931f4f3-96df-4c5b-90f4-953afb5bfcfb-1269577.jpg)

![img](https://img.mubu.com/document_image/81c920e1-1b18-446d-9736-12e1a35e2b25-1269577.jpg)

##### 11.2.1.4.2. Demo – Piecewise Cubic Bézier Curve：两段曲线之间用终止和起始向量一致来控制，长度一样 方向相反

![img](https://img.mubu.com/document_image/36e8385b-796c-4f99-8019-43d0dd646d99-1269577.jpg)

##### 11.2.1.4.3. Continuity

![img](https://img.mubu.com/document_image/3b9eb008-5328-4abf-9e94-80a7e003fec1-1269577.jpg)

![img](https://img.mubu.com/document_image/cf4d7edf-994b-4250-a365-4e169b62bdb2-1269577.jpg)

![img](https://img.mubu.com/document_image/7421556b-3b5f-480f-a413-b9d25e979a0f-1269577.jpg)

### 11.2.2. Other types of splines

#### 11.2.2.1. Spline样条

![img](https://img.mubu.com/document_image/9d918067-da54-4377-accc-f9e93387645b-1269577.jpg)

#### 11.2.2.2. B-splines, etc.

![img](https://img.mubu.com/document_image/6ec83e94-0a3e-4ab6-add5-01fec80b55da-1269577.jpg)

## 11.3. Surfaces

### 11.3.1. -Bezier surfaces

#### 11.3.1.1. Extend Bézier curves to surfaces

![img](https://img.mubu.com/document_image/66a40c6c-fc6f-49ce-998c-2b24624f064d-1269577.jpg)

#### 11.3.1.2. Bicubic Bézier Surface Patch

![img](https://img.mubu.com/document_image/926bd6ce-80ab-4079-832f-a0fdbd3231c4-1269577.jpg)

#### 11.3.1.3. Visualizing Bicubic Bézier Surface Patch [http://acko.net](http://acko.net/)

![img](https://img.mubu.com/document_image/921c3366-39ba-4133-8acb-28b71ef8331e-1269577.jpg)

#### 11.3.1.4. Evaluating Bézier Surfaces

##### 11.3.1.4.1. Evaluating Surface Position For Parameters (u,v)

![img](https://img.mubu.com/document_image/f58d3a92-336e-4690-b2e1-7676eba0bf24-1269577.jpg)

##### 11.3.1.4.2. Method: Separable 1D de Casteljau Algorithm

![img](https://img.mubu.com/document_image/5aac25d9-a5b0-4433-8b7a-96afb74bfedb-1269577.jpg)

##### 11.3.1.4.3. Method: Separable 1D de Casteljau Algorithm

![img](https://img.mubu.com/document_image/25a80bf7-14f6-4aae-beff-56aca981af40-1269577.jpg)

### 11.3.2. -Triangles & quads

#### 11.3.2.1. -Subdivision, simplification, regularization

![img](https://img.mubu.com/document_image/84dd4eac-1537-4e9a-a13c-ed5cd3cad1d2-1269577.jpg)

# 12. Lecture 12:Geometry 3

## 12.1. Turing Award Winners

![img](https://img.mubu.com/document_image/f132927a-d29b-4f5b-b113-71795476ab3f-1269577.jpg)

![img](https://img.mubu.com/document_image/f1732e53-fd9e-4b86-a54c-ac4251ae80d5-1269577.jpg)

## 12.2. Mesh Operations: Geometry Processing

![img](https://img.mubu.com/document_image/f48d91af-6e17-4336-b84c-351da895924d-1269577.jpg)

### 12.2.1. Mesh Subdivision (upsampling)

![img](https://img.mubu.com/document_image/a3987c17-5e38-4f1f-9879-e7dd19e82d87-1269577.jpg)

#### 12.2.1.1. Loop subdivision（Loop ：family name，不是循环）

![img](https://img.mubu.com/document_image/a0668546-f3d0-4dcb-b475-32632ce339c0-1269577.jpg)

##### 12.2.1.1.1. first：Split each triangle into four

![img](https://img.mubu.com/document_image/767913c1-3ad2-4984-b4b9-234629d8f471-1269577.jpg)

##### 12.2.1.1.2. second：Assign new vertex positions according to weights ，New / old vertices updated differently

![img](https://img.mubu.com/document_image/62892575-00ae-4ba8-8c0b-b4100dc1ceb0-1269577.jpg)

          - Loop Subdivision — Update
    
            - new vertices，以其中的一个新生成的白点为例

![img](https://img.mubu.com/document_image/5724ccd0-b5a0-46b2-abd0-8a87b70af236-1269577.jpg)

            - old vertices (e.g. degree 6 vertices here):degree即为某个点连了几条边，度越高，直观的理解就是多参考邻域的信息

![img](https://img.mubu.com/document_image/eb79b6fb-5456-4e55-9645-a25409699048-1269577.jpg)

##### 12.2.1.1.3. Loop Subdivision Results

![img](https://img.mubu.com/document_image/1bde9acc-3de1-48bf-81ff-cb19946719d2-1269577.jpg)

#### 12.2.1.2. Catmull-Clark Subdivision (General Mesh)

##### 12.2.1.2.1. why？

因为Loop subdivision只能用于三角形的面片，因此需要提出一个更一般的情况
    

##### 12.2.1.2.2. 一些基本的定义

quad face四边形面 Non-quad face非四边形面；奇异点：只要是度不等于4的点；每一次分解先在每一个面添加一个点，再在边上添加一个点，最后连接新的点。在每一个subdivision之后，每一个非四边形面新增两个奇异点，非四边形面消失

![img](https://img.mubu.com/document_image/cf082d07-134b-448a-b67f-41535f0d7cf6-1269577.jpg)

![img](https://img.mubu.com/document_image/6925abdb-6e5f-4d55-b3a2-89e7c04d04f3-1269577.jpg)

![img](https://img.mubu.com/document_image/9bc5edcd-a5b9-49e3-bfeb-9de56075f410-1269577.jpg)

##### 12.2.1.2.3. 顶点更新规则

![img](https://img.mubu.com/document_image/80d8108a-5133-4da9-8266-fd803c61a980-1269577.jpg)

##### 12.2.1.2.4. Convergence: Overall Shape and Creases

![img](https://img.mubu.com/document_image/38e4f25f-00a3-4cca-a03e-484e404b9886-1269577.jpg)

### 12.2.2. Mesh Simplification (downsampling)：reduce number of mesh elements while maintaining the overall shape

![img](https://img.mubu.com/document_image/e8d61bfa-b808-426e-b434-699a9993a169-1269577.jpg)

#### 12.2.2.1. how？

##### 12.2.2.1.1. collapsing An edge边坍缩

          - Suppose we simplify a mesh using edge collapsing

![img](https://img.mubu.com/document_image/f53a8e91-d0bd-474a-8a28-441123cb736d-1269577.jpg)

          - 引入一个概念：Quadric Error Metrics（二次误差度量）

![img](https://img.mubu.com/document_image/83b063d0-2f29-4996-90c4-edc5bee50a77-1269577.jpg)

            - • How much geometric error is introduced by simplification?
            - • Not a good idea to perform local averaging of vertices (上图左)：这种情况下新简化的三角形（蓝色表示）无法表征原始面片（灰色表示）
            - Quadric error: new vertex should minimize its sum of square distance (L2 distance) to previously related triangle planes!（上图右）
    
          - Quadric Error of Edge Collapse

![img](https://img.mubu.com/document_image/579ca4a5-4e05-450f-bf23-0461ea9b1d49-1269577.jpg)

          - Simplification via Quadric Error

![img](https://img.mubu.com/document_image/f5f4902d-74d0-45df-adc1-1668043ae146-1269577.jpg)

          - result：对于平的地方 坍缩会多一点

![img](https://img.mubu.com/document_image/be89c221-9a69-416f-bf5b-93bea15a135f-1269577.jpg)

### 12.2.3. Mesh Regularization (same #triangles)大小三角形更均匀一些

![img](https://img.mubu.com/document_image/08bb45d5-1fe8-42ab-820b-12167da9fcc6-1269577.jpg)

## 12.3. Shadow Mapping

### 12.3.1. an image-space algorithm

#### 12.3.1.1. no knowledge of scene’s geometry during shadow computation在做shadow mapping的时候不需要知道场景几何信息

#### 12.3.1.2. must deal with aliasing artifacts会产生走样现象

### 12.3.2. key idea：the points NOT in shadow must be seen both by the light and by the camera

### 12.3.3. 操作步骤：

#### 12.3.3.1. pass 1：Render from Light

        - Depth image from light source 从光源看场景，得到所看到点的深度图

![img](https://img.mubu.com/document_image/6925854a-f70c-4fd6-b0b8-16ce3463a2de-1269577.jpg)

#### 12.3.3.2. pass 2a:Render from Eye

![img](https://img.mubu.com/document_image/17d6d186-e456-43ac-95a8-4892a560ae63-1269577.jpg)

#### 12.3.3.3. Pass 2B: Project to light

![img](https://img.mubu.com/document_image/848c208e-3118-43c6-a840-90ad467e58d0-1269577.jpg)

![img](https://img.mubu.com/document_image/c8eb0473-b125-4c32-842c-c083c888ddec-1269577.jpg)

### 12.3.4. 可视化

![img](https://img.mubu.com/document_image/b2e4852d-8d45-4211-a7a6-928944940055-1269577.jpg)

### 12.3.5. 很多知名的渲染技术用的就是shadow mapping

### 12.3.6. Basic shadowing technique for early animations (Toy Story, etc.) and in EVERY 3D video game

![img](https://img.mubu.com/document_image/efd90b06-ac97-4ef0-a075-4a51bdbbff79-1269577.jpg)

### 12.3.7. Problems with shadow maps

#### 12.3.7.1. Hard shadows (point lights only) ，软阴影看起来就比较自然些。硬阴影，即为那些完全看不到光的，软阴影为那些部分可见的。后续有人也做了软阴影

![img](https://img.mubu.com/document_image/aea6bd36-c116-4318-b8d2-c1580c3a545f-1269577.jpg)

Quality depends on shadow map resolution (general problem with image-based techniques)

Involves equality comparison of floating point depth values means issues of scale, bias, tolerance

# 13. Lecture 13: Ray Tracing 1 (Whitted-Style Ray Tracing)

## 13.1. Why Ray Tracing?

### 13.1.1. Rasterization couldn’t handle global effects well

![img](https://img.mubu.com/document_image/b95cf918-cc2d-420f-ad40-3c589d3bbd35-1269577.jpg)

### 13.1.2. Rasterization is fast, but quality is relatively low

![img](https://img.mubu.com/document_image/cb8ff908-9efb-4a40-abff-08dfa29e2877-1269577.jpg)

### 13.1.3. Ray tracing is accurate, but is very slow

![img](https://img.mubu.com/document_image/92d98945-cf0b-409a-8ab4-5c35b9b0206e-1269577.jpg)

## 13.2. Basic Ray-Tracing Algorithm

### 13.2.1. Light Rays（Three ideas about light rays）

1. Light travels in straight lines (though this is wrong)
2. Light rays do not “collide” with each other if they cross (though this is still wrong)
3. Light rays travel from the light sources to the eye (but the physics is invariant under path reversal - reciprocity可逆性).

### 13.2.2. Ray Casting，简单的光线投射模型，还是认为光源只反射一次

#### 13.2.2.1. Appel 1968 - Ray casting

![img](https://img.mubu.com/document_image/79e34106-7ff7-4376-9de6-74563cbb93b1-1269577.jpg)

        - \1. Generate an image by casting one ray per pixel ，首先从视角或者相机对屏幕的每个像素发出一条光线
        - \2. Check for shadows by sending a ray to the light 根据第一步得到的点在连接光源，看该点是否在阴影内，若不在又能被视角看到 则投射到屏幕上

#### 13.2.2.2. Ray Casting - Generating Eye Rays

这里注意从eye point投射的光线跟场景的交点，只关注最近的相交点

![img](https://img.mubu.com/document_image/7609acab-194c-43ee-aa74-b69b30074cd8-1269577.jpg)

#### 13.2.2.3. Ray Casting - Shading Pixels (Local Only) 

从相交点连接光源，判断是否光源可见，若不在阴影内，则计算局部shading得到像素颜色

![img](https://img.mubu.com/document_image/91f2df1e-79b1-4581-9302-354226de7e73-1269577.jpg)

### 13.2.3. Recursive (Whitted-Style) Ray Tracing递归，完美反射和折射，多次计算光线传播方向

#### 13.2.3.1. introduction

![img](https://img.mubu.com/document_image/ef855568-533e-439c-84d5-5735f751b9e9-1269577.jpg)

#### 13.2.3.2. Recursive Ray Tracing ，注意这里的反射和折射，在昨晚shadow rays判断之后 会把可见的着色（红圈处）都加到pixel上面

![img](https://img.mubu.com/document_image/377f8302-b0f2-4d6f-b945-85acdb5e836a-1269577.jpg)

#### 13.2.3.3. 技术问题：

##### 13.2.3.3.1. Ray-Surface Intersection

1. Ray Equation

![img](https://img.mubu.com/document_image/2b79dc2b-afb3-44ed-acd7-388007095893-1269577.jpg)

2. Ray Intersection With Sphere ，注意这里的t要是正值

![img](https://img.mubu.com/document_image/4d2ff49c-1c1c-4392-a9f6-16c67d0eafb2-1269577.jpg)

![img](https://img.mubu.com/document_image/25e9d21d-2505-4915-b194-46d940ed519f-1269577.jpg)

3. Ray Intersection With Implicit Surface

![img](https://img.mubu.com/document_image/c3b5134a-ec92-495c-aeae-f326da621387-1269577.jpg)

4. Ray Intersection With Triangle Mesh

![img](https://img.mubu.com/document_image/ee0102c0-586e-4d09-a353-fd1aebed18aa-1269577.jpg)

            - Why?
    
              - • Rendering: visibility, shadows, lighting …
              - • Geometry: inside/outside test ：这里一般情况，假如射线在内部，交点奇数，外部偶数
    
            - How to compute? Let’s break this down:
    
              - • Simple idea: just intersect ray with each triangle
    
                - 解法一：Ray-plane and then inside

![img](https://img.mubu.com/document_image/1c835afa-240f-4b5a-a3ea-70a4650cb78b-1269577.jpg)

![img](https://img.mubu.com/document_image/fb6d38db-1a83-4eb0-84c4-25384e9a7634-1269577.jpg)

![img](https://img.mubu.com/document_image/21741664-4370-480e-b023-01036a7f6e0f-1269577.jpg)

                  - Plane Equation

  ![img](https://img.mubu.com/document_image/6cc8df13-bf1e-4d92-93e0-b04e5877db0e-1269577.jpg)

                  - Ray Intersection With Plane

  ![img](https://img.mubu.com/document_image/56459594-1472-40aa-b2db-38c1d2c32195-1269577.jpg)

                  - 判断inside or not：向量叉乘
    
                - 解法二：Möller Trumbore Algorithm ，注意这里t b1 b2的隐藏条件

![img](https://img.mubu.com/document_image/bac327d6-e482-48da-8966-acbcbdf9f44b-1269577.jpg)

              - • Simple, but slow (acceleration?)
    
                - Accelerating Ray-Surface Intersection
    
                  - Ray Tracing – Performance Challenges

  ![img](https://img.mubu.com/document_image/df90ff00-71fd-4afc-87a1-9830825d1947-1269577.jpg)

                - Bounding Volumes
    
                  - Bounding Volumes

  ![img](https://img.mubu.com/document_image/fc72d87c-9ceb-44ff-8a27-aa55cd898fdd-1269577.jpg)

                  - Ray-Intersection With Box

  ![img](https://img.mubu.com/document_image/dbcff5b3-673b-4d1d-ad8e-2d37174c00a2-1269577.jpg)

                  - Ray Intersection with Axis-Aligned Box

  ![img](https://img.mubu.com/document_image/e1f8935b-4626-4132-a018-a9584334c88d-1269577.jpg)

  ![img](https://img.mubu.com/document_image/368e47ec-23f2-4c69-bf8d-e11041eaa02c-1269577.jpg)

  ![img](https://img.mubu.com/document_image/704ca734-7afe-4416-b4b5-906b22cbcf18-1269577.jpg)

                  - Why Axis-Aligned?

  ![img](https://img.mubu.com/document_image/0173513a-f882-47fe-9881-4d6463983604-1269577.jpg)

              - • Note: can have 0, 1 intersections (ignoring multiple intersections)

# 14. Lecture 14: Ray Tracing 2(Acceleration & Radiometry)

## 14.1. Using AABBs to accelerate ray tracing

### 14.1.1. Uniform Spatial Partitions (Grids)

#### 14.1.1.1. Preprocess – Build Acceleration Grid

![img](https://img.mubu.com/document_image/f522ca0b-ebd6-4b5e-bed6-851f19b30a88-1269577.jpg)

        - 这里对于直线的下一个格子寻找，对于该直线，下一个格子的位置要么是右，要么是上

#### 14.1.1.2. problem

##### 14.1.1.2.1. Grid Resolution?

![img](https://img.mubu.com/document_image/ab0900d1-e3d3-4534-a768-1196754e541d-1269577.jpg)

![img](https://img.mubu.com/document_image/cb6976a2-d1f6-45c5-b3ad-02b5b2bf65ec-1269577.jpg)

![img](https://img.mubu.com/document_image/1ed418ea-00d4-4e08-8f0e-d2c859259a9e-1269577.jpg)

##### 14.1.1.2.2. uniform

![img](https://img.mubu.com/document_image/b6facfbf-9166-4a8a-b8e3-fea11205d9a8-1269577.jpg)

          - 对于第二个场景，很多非均匀物体，对于其寻找求交会很慢

### 14.1.2. Spatial partitions

直观的想法，是不是在稀疏的地方不需要那么密的格子

#### 14.1.2.1. Spatial Partitioning Examples

![img](https://img.mubu.com/document_image/75795599-645a-41eb-ad47-9f1c57674fbf-1269577.jpg)

        - 八叉树，跟纬度有关系，在一维下是二叉树，二维如图四叉树，三维下是八叉树，以此类推，更高纬度更多，显然不太好用
        - kd-tree，跟八叉树类似，但是每次只沿着轴向分两块，xy或者xyz交替划分，达到均匀，横平竖直
        - bsp-tree：纬度问题以及不是横平竖直的分割

#### 14.1.2.2. KD-Tree Pre-Processing （这一步骤在光线追踪之前），这里是简化表示，其实每次分割之后，左右都要继续分割，这里只显示每次只分割一半

![img](https://img.mubu.com/document_image/5ee30818-f399-46e0-9ec3-914bb98a3c54-1269577.jpg)

#### 14.1.2.3. Data Structure for KD-Trees ，注意分割方向xyz轴依次，分割不一定是均分，结点包含两个子结点，中间结点不存储物体，只存在叶节点中

![img](https://img.mubu.com/document_image/54b868ef-5a12-41c1-8c71-588a0605d031-1269577.jpg)

#### 14.1.2.4. Traversing a KD-Tree

![img](https://img.mubu.com/document_image/61968fae-2c1b-487f-8e51-465fe8013613-1269577.jpg)

#### 14.1.2.5. kd-tree存在的问题

        - aabb与物体的求交判断
        - 物体可能存在与多个aabb中

### 14.1.3. Object Partitions & Bounding Volume Hierarchy (BVH)

#### 14.1.3.1. Bounding Volume Hierarchy (BVH) ，以物体分割为导向，而不是空间分割

![img](https://img.mubu.com/document_image/be57e146-f0a0-4413-821c-673663fc5f80-1269577.jpg)

#### 14.1.3.2. Summary: Building BVHs

![img](https://img.mubu.com/document_image/1f4680ce-2da5-4e61-9a3b-adfa4d40d2cb-1269577.jpg)

#### 14.1.3.3. Building BVHs 启发式的分割算法，其中第二个目的是让分割的两部分面片数量接近系统，搜索深度相近，快速选择算法

![img](https://img.mubu.com/document_image/91f8306b-5dff-46ae-8b09-0e12e8ab3b32-1269577.jpg)

#### 14.1.3.4. Data Structure for BVHs

![img](https://img.mubu.com/document_image/78614f12-402b-4b50-bd02-30a737266846-1269577.jpg)

#### 14.1.3.5. BVH Traversal

![img](https://img.mubu.com/document_image/2e3318ea-44f1-4b50-a4ef-ba095205053e-1269577.jpg)

#### 14.1.3.6. Spatial vs Object Partitions

![img](https://img.mubu.com/document_image/9850115b-86bb-4dd7-adc4-ff5294f3955e-1269577.jpg)

## 14.2. Basic radiometry (辐射度量学)

### 14.2.1. Radiometry — Motivation，主要解决blin-phong模型中的问题，毕竟连单位都没有 ，可以精确地给实际的光下一些物理量的定义

![img](https://img.mubu.com/document_image/b045ad7e-11d2-4e74-b9c9-92586fba4e47-1269577.jpg)

### 14.2.2. Radiometry：新术语，辐射通量、辐射强度、辐射度、辐射，这里不考虑光的时间属性

![img](https://img.mubu.com/document_image/8eec30ee-7fc9-403c-9a7b-159bf6aacab7-1269577.jpg)

### 14.2.3. Radiant Energy and Flux (Power)

#### 14.2.3.1. Radiant Energy and Flux (Power) ，注意辐射能量和单位时间内的能量Radiant flux (power)区别，在光学中描述功率用lum描述，也就是描述光有多亮

![img](https://img.mubu.com/document_image/cc670ce3-e171-4ed1-bc4d-d6d23427d13c-1269577.jpg)

#### 14.2.3.2. Flux – #photons flowing through a sensor in unit time

![img](https://img.mubu.com/document_image/8f5c61c3-b537-417d-aed2-eb4254477a28-1269577.jpg)

#### 14.2.3.3. Important Light Measurements of Interest ,左：光发出的能量；中：表面接收到的光辐射度；右：光传输过程的辐射

![img](https://img.mubu.com/document_image/edb1260c-0ae7-4df1-8427-372b128f914c-1269577.jpg)

### 14.2.4. Radiant Intensity

#### 14.2.4.1. Radiant Intensity ：立体角，candela是标准单位

![img](https://img.mubu.com/document_image/2d9eb299-69d1-4831-984d-6618a8f69ff1-1269577.jpg)

#### 14.2.4.2. Angles and Solid Angles ，类比思想

![img](https://img.mubu.com/document_image/ff5a079a-4778-4639-842a-f49fe8586d12-1269577.jpg)

#### 14.2.4.3. Differential Solid Angles 微分立体角

![img](https://img.mubu.com/document_image/13198b01-b010-47bd-98c3-80a8192e7e8a-1269577.jpg)

![img](https://img.mubu.com/document_image/85034118-41b9-4aac-a098-9fdfa89fefc5-1269577.jpg)

##### 14.2.4.3.1. w as a direction vector ,在光度量中，用w表示一个方向，其实可以theta 和 phi表示

![img](https://img.mubu.com/document_image/b075a627-9c80-4cca-bb24-d23e0e272d67-1269577.jpg)

#### 14.2.4.4. Isotropic Point Source 各向同性点源

![img](https://img.mubu.com/document_image/96ba85dc-f378-4f5e-be08-3948ea261645-1269577.jpg)

#### 14.2.4.5. Modern LED Light

![img](https://img.mubu.com/document_image/33c71e9f-dcd3-4624-8ab1-e3ececf82be2-1269577.jpg)

# 15. Lecture 15:Ray Tracing 3 (Light Transport & Global Illumination)

## 15.1. Radiometry cont.

### 15.1.1. Reviewing Concepts

![img](https://img.mubu.com/document_image/45a42ae3-757b-41df-85b6-2611c5adac92-1269577.jpg)


        后面的概念中，图形学中，说能量的话一般都指的是unit time，不考虑总得能量。尤其是注意这几个概念的区分

### 15.1.2. Differential Solid Angles 微分立体角

![](https://img.mubu.com/document_image/71847e3e-89ff-4410-a53f-d0a30c75b084-1269577.jpg)

### 15.1.3. Irradiance

#### 15.1.3.1. Irradiance，注意该处的unit area，必须是与光线垂直的方向，该处是省略了cos theta

![](https://img.mubu.com/document_image/60bc5a9e-e5a0-48a7-8171-9a7318fa5f09-1269577.jpg)

##### 15.1.3.1.1. Lambert’s Cosine Law 

  ![](https://img.mubu.com/document_image/3cec2592-db66-438e-ab1d-6ffeb93a7723-1269577.jpg)

#### 15.1.3.2. Why Do We Have Seasons? 

![](https://img.mubu.com/document_image/ea4caa79-5ea0-4a68-a895-0a4efdbcc59d-1269577.jpg)

#### 15.1.3.3. Correction: Irradiance Falloff，注意衰减的是谁，这里不是intensity，因为intensity在传播过程中是不变得。根据intensity的概念，单位立体角，随着r的增加，相应的对应的A也会增大，故intensity不变

![](https://img.mubu.com/document_image/c6312157-b340-46fa-bb2c-0d7392acabc0-1269577.jpg)

### 15.1.4. Radiance

#### 15.1.4.1. Radiance，描述光传播中的性质

![](https://img.mubu.com/document_image/62385ff6-c87a-4ced-a64a-8069c87f2dc7-1269577.jpg)

#### 15.1.4.2. Radiance-definition

![](https://img.mubu.com/document_image/5a853d88-a616-4104-99cc-6fc9cc17cee4-1269577.jpg)

![](https://img.mubu.com/document_image/d5293c1c-367a-4a42-a49f-fd5e009efa63-1269577.jpg)

#### 15.1.4.3. Incident Radiance ，联系radiance与irradiance，从w方向上过来的光线打到dA上获得的能量，dw Cos theta是法向上的投影； Irradiance per solid angle ，radiance具有方向性

![](https://img.mubu.com/document_image/67b08643-ed16-44de-b7e6-8e6c76d761f9-1269577.jpg)

#### 15.1.4.4. Exiting Radiance，联系intensity与radiance之间的关系，从面dA往一个方向w发出的intensity， Intensity per projected unit area

![](https://img.mubu.com/document_image/978102bd-0704-4c08-975d-74d74d0eeba5-1269577.jpg)

#### 15.1.4.5. Irradiance vs. Radiance 

![](https://img.mubu.com/document_image/6d038dcc-249a-46aa-b199-69c57a2e5a93-1269577.jpg)

## 15.2. Light transport （Bidirectional Reflectance Distribution Function (BRDF)双向反射分布函数）

### 15.2.1. Reflection at a Point： radiance-》irradiance-》radiance

![](https://img.mubu.com/document_image/c3680896-76a8-4308-ba58-286d71749aa0-1269577.jpg)

### 15.2.2. BRDF，从任意一个w入射方向上得到的irradiance是如何分配到各个立体角上的

![](https://img.mubu.com/document_image/dc1cef55-e1f8-4f05-9674-ea36425f09ce-1269577.jpg)

### 15.2.3. The reflection equation

#### 15.2.3.1. The Reflection Equation 对某一个着色点，所有光照（不仅仅包含光源，还包括由点出射的radiance）对观测光线的贡献。任何点的出射radiance都有可能作为其他点的入射radiance。

![](https://img.mubu.com/document_image/c25a70c8-195d-424a-85bc-d8344ea7b37a-1269577.jpg)

#### 15.2.3.2. Challenge: Recursive Equation 

![](https://img.mubu.com/document_image/29256aa1-146c-4690-a068-7cbaab47aabf-1269577.jpg)

### 15.2.4. The rendering equation

#### 15.2.4.1. The Rendering Equation ，加了自发光项

![](https://img.mubu.com/document_image/96005ff8-846c-4939-a168-3f21a62eb3e1-1269577.jpg)

### 15.2.5. Global illumination：Understanding the rendering equation

#### 15.2.5.1. Reflection Equation 

![](https://img.mubu.com/document_image/680b6224-30f1-4a91-bebd-5bfab88fb44e-1269577.jpg)

#### 15.2.5.2. Reflection Equation 

![](https://img.mubu.com/document_image/b6cfd0a8-d6fe-46d2-9d0c-a8e36b99c0c7-1269577.jpg)

#### 15.2.5.3. Reflection Equation 

![](https://img.mubu.com/document_image/c97e381d-75e4-4511-9338-5c347543c81c-1269577.jpg)

#### 15.2.5.4. Rendering Equation 

![](https://img.mubu.com/document_image/8d4a2691-bd9c-444d-9e35-6d033229682e-1269577.jpg)

#### 15.2.5.5. Rendering Equation (Kajiya 86) 

![](https://img.mubu.com/document_image/6d48544f-31c5-4b46-a0f4-da4e377dcc21-1269577.jpg)

#### 15.2.5.6. Rendering Equation as Integral Equation

![](https://img.mubu.com/document_image/25f64529-d45a-4523-a6ba-19438480f01c-1269577.jpg)

#### 15.2.5.7. Linear Operator Equation 

![](https://img.mubu.com/document_image/24fab14c-66c8-449d-a2d3-a271685aff51-1269577.jpg)

#### 15.2.5.8. Ray Tracing and extensions 

![](https://img.mubu.com/document_image/47403e1f-c46c-433d-9280-3876fd16f1f5-1269577.jpg)

#### 15.2.5.9. Ray Tracing 多次弹射得到的渲染结果

![](https://img.mubu.com/document_image/16ddcda2-347f-42e7-8b62-9e2703685209-1269577.jpg)

![](https://img.mubu.com/document_image/b2d8ba84-2b9c-450c-9dc3-0c6ab406b232-1269577.jpg)

#### 15.2.5.10. 渲染结果

注意观察顶上的灯的变化，这里没太明白，课上是玻璃球需要两次bounce才会出来光线，如果是双层玻璃的，两次弹射进去，再有两次弹射才能出来。这个场景就算加多弹射，最终会收敛，考虑到能量守恒，对于相机一直按着快门的话，则会过曝，因为能量一直在增多

![](https://img.mubu.com/document_image/6647d413-81df-44ba-89e2-74fbcd952934-1269577.jpg)

## 15.3. Probability review

### 15.3.1. Random Variables 

![](https://img.mubu.com/document_image/f994881e-1367-42e2-ae73-fc83f638bae8-1269577.jpg)

### 15.3.2. Probabilities

![](https://img.mubu.com/document_image/17c10195-5a80-4899-a234-59f3e66d9229-1269577.jpg)

![](https://img.mubu.com/document_image/4d5a6747-f593-4413-91f7-1b8e0e5bf8bc-1269577.jpg)

### 15.3.3. Expected Value of a Random Variable 

![](https://img.mubu.com/document_image/d0606451-2122-40ed-a912-97e8058a89cc-1269577.jpg)

### 15.3.4. Continuous Case: Probability Distribution Function (PDF) 

![](https://img.mubu.com/document_image/fd66f2b5-06be-42be-8923-c41b10b95829-1269577.jpg)

### 15.3.5. Function of a Random Variable 

![](https://img.mubu.com/document_image/d85259ad-81f1-4d58-97ee-b0ad08da1025-1269577.jpg)

# 16. Lecture 16:Ray Tracing 4(Monte Carlo Path Tracing)

## 16.1. A Brief Review

### 16.1.1. Review - The Rendering Equation ，fr是brdf函数

![img](https://img.mubu.com/document_image/f7998e7c-5eb8-4890-94c0-a3f60c0e3ed4-1269577.jpg)

### 16.1.2. Review - Probabilities

![img](https://img.mubu.com/document_image/58523cc5-017a-41c7-9bbe-61ab823f03d7-1269577.jpg)

## 16.2. Monte Carlo Integration

### 16.2.1. Monte Carlo Integration ，蒙特卡罗积分主要是解决定积分问题，只想要最后求解的数。因为函数的复杂性，有时候不定积分很难求解

![img](https://img.mubu.com/document_image/b6b0ce74-9b18-4957-aba2-ed51673e34db-1269577.jpg)

![img](https://img.mubu.com/document_image/63f33607-b94a-44ad-b745-57f92922cee4-1269577.jpg)

### 16.2.2. Monte Carlo Integration ，在积分域中采样，得到其对应的值，然后用这个矩形面积近似当前函数的积分结果。为了降低噪声，可以采集n个矩形，再平均。

![img](https://img.mubu.com/document_image/cb61e58a-4071-4662-86f0-2c7440e26cc1-1269577.jpg)

### 16.2.3. Monte Carlo Integration

![img](https://img.mubu.com/document_image/180b2e1f-da79-4450-bac7-2ce36974d69d-1269577.jpg)

### 16.2.4. Example: Uniform Monte Carlo Estimator

![img](https://img.mubu.com/document_image/351949cd-5fed-4316-80fb-c048fa54fcd2-1269577.jpg)

![img](https://img.mubu.com/document_image/1cfc4af2-7dc0-44d8-9e33-f98ebfa5ddea-1269577.jpg)

### 16.2.5. Monte Carlo Integration ，注意采样和积分的域保持一致

![img](https://img.mubu.com/document_image/709c9b3a-290d-42fd-b87a-760ff5cbb06d-1269577.jpg)

## 16.3. Path Tracing

### 16.3.1. Motivation: Whitted-Style Ray Tracing

![img](https://img.mubu.com/document_image/6b4b9124-d159-4fbd-b3a4-028752aff051-1269577.jpg)

### 16.3.2. Whitted-Style Ray Tracing: Problem 1

![img](https://img.mubu.com/document_image/10990bcc-5359-4990-9d09-4c4bf428551b-1269577.jpg)

#### 16.3.2.1. mirror reflection，(pure)Specular，完全镜面反射，光射过去一定沿着镜面反射出去。

#### 16.3.2.2. glossy reflection，有镜面的感觉但也有点模糊

### 16.3.3. Whitted-Style Ray Tracing: Problem 2

![img](https://img.mubu.com/document_image/df0ce114-bd90-4534-a9f9-26a44903e716-1269577.jpg)

      - 右图中，物体上的红色和绿色这种效果称之为color bleeding效果。

### 16.3.4. Whitted-Style Ray Tracing is Wrong

![img](https://img.mubu.com/document_image/ca9178b4-9567-4318-b57f-4d2c4d95bc2b-1269577.jpg)

      - 问题一：积分问题，需要考虑四面八方的光照，因此考虑半球上的光照。
      - 问题二：递归存在

### 16.3.5. A Simple Monte Carlo Solution

      - Wo是观测方向，Wi是各个入射方向，但是图形学中定义都是outwards，因此是方向定义如图

![img](https://img.mubu.com/document_image/a49b1cfc-4f5a-4365-9562-fad2823f53ef-1269577.jpg)

      - 写的是反射方程，忽略了自发光项；因为这个也是积分问题，因此可以用蒙特卡罗积分求解

![img](https://img.mubu.com/document_image/a3dae169-a78a-46ee-b520-cd032123086f-1269577.jpg)

      - 3

![img](https://img.mubu.com/document_image/6f9cfe19-cbf0-4dea-87f5-f3682b36f675-1269577.jpg)

      - 4

![img](https://img.mubu.com/document_image/6302b008-8648-4cc2-962b-5614589d768b-1269577.jpg)

      - 5

![img](https://img.mubu.com/document_image/f70d16de-2276-4168-84f2-a3ca0cd7bb79-1269577.jpg)

#### 16.3.5.1. Introducing Global Illumination ；这里从Q到P点的radiance是多少呢？类比观测视角，将观测视角放到P点，在P点观测Q点，算Q点的直接光照一样

![img](https://img.mubu.com/document_image/0feecce3-3c7a-4e9e-9825-73236b57be9e-1269577.jpg)

![img](https://img.mubu.com/document_image/c5e642b3-b01a-4ea4-9599-b1a61421400c-1269577.jpg)


### 16.3.6. Path Tracing 

#### 16.3.6.1. Problem 1: Explosion of #rays as #bounces go up: 光线量爆炸，因此将N=1 可以有效解决指数激增问题

##### 16.3.6.1.1. 原因

  ![](https://img.mubu.com/document_image/84f54b3c-bcd3-4f15-8e21-29db6c138e89-1269577.jpg)

##### 16.3.6.1.2. 代码，分布式光线追踪 N!=1，N=1时 path tracing

  ![](https://img.mubu.com/document_image/45001786-5ace-42c8-ac30-a27a4ab80913-1269577.jpg)

##### 16.3.6.1.3. Ray Generation 

1. Ray Generation 

  ![](https://img.mubu.com/document_image/e484b170-d622-4ee6-a40b-cfd2fe56d447-1269577.jpg)

2. Very similar to ray casting in ray tracing

  ![](https://img.mubu.com/document_image/ae880d63-8643-4c28-b363-72f2ecc5e1d8-1269577.jpg)

#### 16.3.6.2. Problem 2:The recursive algorithm will never stop!

##### 16.3.6.2.1. 为什么需要终止，实际中光是无数次弹射的，但是计算机图形学中是不允许的，需要有终止

  ![](https://img.mubu.com/document_image/4871b347-79a7-42d1-af51-75dcd5df951b-1269577.jpg)

  ![](https://img.mubu.com/document_image/220e499a-30d3-4933-bfa9-ca2f5bfbe4fa-1269577.jpg)

##### 16.3.6.2.2. Solution: Russian Roulette (RR) -俄罗斯轮盘赌

  ![](https://img.mubu.com/document_image/7ec16bba-54b3-4c7d-ba50-01d10c55febc-1269577.jpg)

1. 原理

  ![](https://img.mubu.com/document_image/c84d445b-b472-4469-a074-ac5cccf86b63-1269577.jpg)

2. 代码

  ![](https://img.mubu.com/document_image/80774bcf-7533-470b-8818-ccd72423bcb7-1269577.jpg)

  ![](https://img.mubu.com/document_image/380eb6a5-1ac7-44dd-b1f8-9619b6dfd987-1269577.jpg)

#### 16.3.6.3. Path Tracing ，samples per pixel，就是多少根光线

![](https://img.mubu.com/document_image/9b27815b-2fea-4dda-8344-e840dc14c144-1269577.jpg)

#### 16.3.6.4. Sampling the Light 

##### 16.3.6.4.1. Understanding the reason of being inefficient，以往的光线打到光源都是看运气，不合理 

  ![](https://img.mubu.com/document_image/e43f9e6f-88e0-41e7-9575-e55e0244486d-1269577.jpg)

##### 16.3.6.4.2. Sampling the Light (pure math) 

注意采用和积分的域一致

  ![](https://img.mubu.com/document_image/4bea0e5b-81e9-456c-b74a-91d1d2b27195-1269577.jpg)

##### 16.3.6.4.3. 公式

  ![](https://img.mubu.com/document_image/a81a97c9-f089-44fb-a25e-3350e87b9ab3-1269577.jpg)

##### 16.3.6.4.4. rendering equation

  ![](https://img.mubu.com/document_image/f5633088-c6af-4d20-9640-91c450d63c0a-1269577.jpg)

##### 16.3.6.4.5. radiance coming from two parts

  ![](https://img.mubu.com/document_image/e67077f8-60f6-4e35-8f62-0f50cfda7970-1269577.jpg)

##### 16.3.6.4.6. 代码

  ![](https://img.mubu.com/document_image/a0afc5b5-319f-4d6a-a82d-288a73649a9c-1269577.jpg)

##### 16.3.6.4.7. if the sample on the light is not blocked or not?

  ![](https://img.mubu.com/document_image/144f50a1-c2a0-40bc-b1b6-3403037b2a72-1269577.jpg)

### 16.3.7. Some Side Notes 

#### 16.3.7.1. Path tracing (PT) is indeed difficult

1. Consider it the most challenging in undergrad CS
2. Why: physics, probability, calculus, coding
3. Learning PT will help you understand deeper in these 

### 16.3.8. Is Path Tracing Correct? 

![](https://img.mubu.com/document_image/d8de7eae-5df0-473b-98f8-66a0944ee397-1269577.jpg)

### 16.3.9. Ray tracing: Previous vs. Modern Concepts 

![](https://img.mubu.com/document_image/d3fcf670-46e4-4c1f-a4a3-d2d59c53c6cc-1269577.jpg)

### 16.3.10. Things we haven’t covered / won’t cover 

![](https://img.mubu.com/document_image/b007f47d-2496-49b9-9980-619f072b8a0d-1269577.jpg)

![](https://img.mubu.com/document_image/3332cfe2-3525-4d3c-ba46-64bafd4214dc-1269577.jpg)