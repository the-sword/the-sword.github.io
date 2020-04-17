---
title: ubuntu16.04 配置Tensorflow环境
tags:
  - Linux
  - Graphics
categories: 开发总结
abbrlink: ee1401f5
date: 2018-07-08 12:02:49
---
最近用到一个卷积神经网络[monodepth](https://github.com/mrharicot/monodepth)来预测图片深度，需要用到Tensorflow和cuda环境，记录一下整个过程，便于查找。

**注：**文章一些图片来自互联网，见最后的参考链接。

# 1. 显卡驱动
实验室这边硬件和驱动都是配置好的，故我就没加修改。需要的话可以自行搜索或者参考[深度学习（TensorFlow）环境搭建：（二）Ubuntu16.04+1080Ti显卡驱动](http://www.cnblogs.com/xuliangxing/p/7569946.html)
# 2. 安装CUDA
目的是充分利用英伟达GPU的并行计算。
## 2.1. 安装依赖库
```
sudo apt-get install freeglut3-dev build-essential libx11-dev libxmu-dev libxi-devlibgl1-mesa-glx libglu1　　#安装依赖库
```
其中有一个没有安装成功，好像后面也没什么影响
## 2.2. 下载CUDA
[官网链接](https://developer.nvidia.com/cuda-toolkit-archive)

我这里选择的是`CUDA Toolkit 8.0 GA2`，下载到`/home/user/Downloads`目录下

![下载CUDA](http://wx4.sinaimg.cn/large/6e529308gy1ft2c1slfz6j20g80q0407.jpg)

## 2.3. 安装执行文件
### 2.3.1. 安装基础文件
```
sudo sh cuda_8.0.61_375.26_linux.run  #执行安装文件
```

**注意：安装过程中会提示你进行一些确认操作，首先是接受服务条款，输入accept确认，然后会提示是否安装cuda tookit、cuda-example等，均输入Y进行确定。但请注意，当询问是否安装附带的驱动时，一定要选N！**

```
-------------------------------------------------------------
Do you accept the previously read EULA?
accept/decline/quit: accept

Install NVIDIA Accelerated Graphics Driver for Linux-x86_64 375.26?
(y)es/(n)o/(q)uit: n

Install the CUDA 8.0 Toolkit?
(y)es/(n)o/(q)uit: y

Enter Toolkit Location
 [ default is /usr/local/cuda-8.0 ]: 

Do you want to install a symbolic link at /usr/local/cuda?
(y)es/(n)o/(q)uit: y

Install the CUDA 8.0 Samples?
(y)es/(n)o/(q)uit: y

Enter CUDA Samples Location
 [ default is /home/zxh ]: 

Installing the CUDA Toolkit in /usr/local/cuda-8.0 ...
Missing recommended library: libGLU.so
Missing recommended library: libX11.so
Missing recommended library: libXi.so
Missing recommended library: libXmu.so

Installing the CUDA Samples in /home/zxh ...
Copying samples to /home/zxh/NVIDIA_CUDA-8.0_Samples now...
Finished copying samples.

===========
= Summary =
===========

Driver:   Not Selected
Toolkit:  Installed in /usr/local/cuda-8.0
Samples:  Installed in /home/zxh, but missing recommended libraries

Please make sure that
 -   PATH includes /usr/local/cuda-8.0/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-8.0/lib64, or, add /usr/local/cuda-8.0/lib64 to /etc/ld.so.conf and run ldconfig as root

To uninstall the CUDA Toolkit, run the uninstall script in /usr/local/cuda-8.0/bin

Please see CUDA_Installation_Guide_Linux.pdf in /usr/local/cuda-8.0/doc/pdf for detailed information on setting up CUDA.

***WARNING: Incomplete installation! This installation did not install the CUDA Driver. A driver of version at least 361.00 is required for CUDA 8.0 functionality to work.
To install the driver using this installer, run the following command, replacing <CudaInstaller> with the name of this run file:
    sudo <CudaInstaller>.run -silent -driver
```

### 2.3.2. 安装补丁包
`sudo sh cuda_8.0.61.2_linux.run`
## 2.4. 设置环境变量

1. 输入命令，编辑环境变量配置文件  
    ```
    sudo vim ~/.bashrc 
    ```
2. 在文本末端追加以下代码（按键“i”进行编辑操作），根据个人所需进行相关目录修改  
    ```
    export PATH=/usr/local/cuda-8.0/bin:$PATH  
    export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64:$LD_LIBRARY_PATH
    export CUDA_HOME=/usr/local/cuda
    ```
3. 保存退出（按“!wq”），执行下面命令，使环境变量立刻生效  
    ```
    #环境变量立即生效 
    sudo source ~/.bashrc  
    sudo ldconfig 
    ```
4. 检查cuda是否配置正确
    ```  
    nvcc --version
    ```
    如图所示：
    
    ![检查cuda是否配置正确](http://wx1.sinaimg.cn/large/6e529308gy1ft2ckfx30aj20k504b74y.jpg)

# 3. 安装cuDNN
cuDNN是GPU加速计算深层神经网络的库。
## 3.1. 下载cuDNN
[老版存档](https://developer.nvidia.com/rdp/cudnn-archive)
[最新版本官方链接](https://developer.nvidia.com/rdp/cudnn-archive)，都需要注册方可下载。

![下载cuDNN](http://ws1.sinaimg.cn/large/6e529308gy1ft2ct5yjs6j20o70g6aav.jpg)

## 3.2. 安装cuDNN
安装cudnn比较简单，简单地说，就是复制几个文件：库文件和头文件。将cudnn的头文件复制到cuda安装路径的include路径下，将cudnn的库文件复制到cuda安装路径的lib64路径下。具体操作如下：
```
#解压文件
tar -zxvf cudnn-8.0-linux-x64-v7.tgz

#切换到刚刚解压出来的文件夹路径
cd cuda 
#复制include里的头文件（记得转到include文件里执行下面命令）
sudo cp /include/cudnn.h  /usr/local/cuda/include/

#复制lib64下的lib文件到cuda安装路径下的lib64（记得转到lib64文件里执行下面命令）
sudo cp lib*  /usr/local/cuda/lib64/

#设置权限
sudo chmod a+r /usr/local/cuda/include/cudnn.h 
sudo chmod a+r /usr/local/cuda/lib64/libcudnn*

#======更新软连接======
cd /usr/local/cuda/lib64/ 
sudo rm -rf libcudnn.so libcudnn.so.7   #删除原有动态文件，版本号注意变化，可在cudnn的lib64文件夹中查看   
sudo ln -s libcudnn.so.7.0.5 libcudnn.so.7  #生成软衔接（注意这里要和自己下载的cudnn版本对应，可以在/usr/local/cuda/lib64下查看自己libcudnn的版本）
sudo ln -s libcudnn.so.7 libcudnn.so #生成软链接
sudo ldconfig -v #立刻生效
```

最后我们看看验证安装cudnn后cuda是否依旧可用
```
nvcc --version  # or nvcc -V 
```
## 3.3. 检验cuDNN是否安装成功
到目前为止，cuDNN已经安装完了，但是，是否成功安装，我们可以通过cuDNN sample测试一下(https://developer.nvidia.com/rdp/cudnn-archive 页面中找到对应的cudnn版本，里面有 cuDNN v5 Code Samples，点击该链接下载即可，版本可能不一样，下载最新的就行)。
下载完，转到解压出的目录下的mnistCUDNN，如图所示（图片来源见水印）：

![解压的cuDNN目录](https://wx4.sinaimg.cn/large/6e529308gy1ft2cwn6hx4j20oq0g2whl.jpg)

通过下面命令，进行校验：
```
#运行cudnn-sample-v5
tar –zxvf cudnn-sample-v5.tgz　　#解压压缩包
cd mnistCUDNN　　#转到解压的mnistCUDNN目录下
make　　#make 命令下
./mnistCUDNN　　　#在mnistCUDNN目录下执行./mnistCUDNN
#改程序运行成功，如果结果看到Test passed!说明cudnn安装成功。
```
如果结果看到Test passed!说明cudnn安装成功:

![检验cuDNN是否安装成功](https://ws2.sinaimg.cn/large/6e529308gy1ft2cy2d4ppj20kc0c6772.jpg)

# 4. 安装Anaconda
最开始是用pip安装python的一些库，但是一直出错，最后选择使用Anaconda进行配置。
Anaconda是python的一个科学计算发行版，内置了数百个python经常会使用的库，也包括许多做机器学习或数据挖掘的库，这些库很多是TensorFlow的依赖库。安装好Anaconda可以提供一个好的环境直接安装TensorFlow。

去[Anaconda官网](https://www.anaconda.com/download/)下载需要版本的Anaconda

![选择对应版本](http://wx4.sinaimg.cn/large/6e529308gy1ft2d2ugwhpj20r60f2jsl.jpg)

下载完后执行如下命令`sudo bash Anaconda3-4.4.0-Linux-x86_64.sh`

![安装Anaconda](https://wx4.sinaimg.cn/large/6e529308gy1ft2d50r51dj20k30c6wgr.jpg)

安装anaconda，回车，阅读许可文件，选择`q`或者`Ctrl + C`退出许可，选择接受即可。
最后会询问是否把anaconda的bin添加到用户的环境变量中，选择yes。在终端输入python发现依然是系统自带的python版本，这是因为环境变量的更新还没有生效，命令行输入如下命令是安装的anaconda生效。如果conda --version没有找到任何信息，说明没有加入到环境变量没有，需要手动加入，如图所示：

![配置Anaconda环境变量](https://wx2.sinaimg.cn/large/6e529308gy1ft2d7tpj3vj20k90c640g.jpg)

刷新环境变量：
```
source /etc/profile 或者 source ~/.bashrc #(全局的环境变量)
```
# 5. 安装TensorFlow
参考TensorFlow的[官方安装教程](https://www.tensorflow.org/install/)，官网提供的了 Pip, Docker, Virtualenv, Anaconda 或 源码编译的方法安装 TensorFlow，我们这里主要介绍以`Anaconda`安装。其他安装方式，大家可以到官方安装教程查看。
## 5.1. 创建conda环境
创建一个名为tensorflow的conda环境Python 3.6，根据TensorFlow版本号，一定要设置Python版本号。
```
#Python 2.7
conda create -n tensorflow python=2.7    #tensorflow是对应的环境名

#Python 3.4
conda create -n tensorflow python=3.4

#Python 3.5
conda create -n tensorflow python=3.5

#Python 3.6
conda create -n tensorflow python=3.6 　　#我下的TensorFlow对应的Python是3.6版本，所以选择这行
```

## 5.2. 激活 conda 环境
```
source activate tensorflow
```

附conda环境的其他操作：
```
conda env list    #列出所有环境
source deactivate    #退出环境
conda env remove -n tensorflow    #删除环境
```

## 5.3. 下载TensorFlow
可以使用`sudo pip3 install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp36-cp36m-linux_x86_64.whl`在线安装，但是因为网络的原因，一直无法成功，所以选择下载到本地安装。

最新的已经是1.8版本，考虑到兼容性，我这里选择的是1.3版本。
```
Python 2.7

CPU:
https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-1.3.0-cp27-none-linux_x86_64.whl

GPU:
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp27-none-linux_x86_64.whl
===============================================================================================

Python 3.4

CPU:
https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-1.3.0-cp34-cp34m-linux_x86_64.whl

GPU:
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp34-cp34m-linux_x86_64.whl
===============================================================================================

Python 3.5

CPU:
https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-1.3.0-cp35-cp35m-linux_x86_64.whl

GP:
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp35-cp35m-linux_x86_64.whl
===============================================================================================

Python 3.6

CPU:
https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-1.3.0-cp36-cp36m-linux_x86_64.whl    #cpu版本

GPU:
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.3.0-cp36-cp36m-linux_x86_64.whl    #gpu版本，1.3.0是对应的tensorflow版本，cp36-cp36m是对应的python版本，这些参数根据需要自行更改后下载。
```

## 5.4. conda环境安装tensorflow-gpu版
```
cd /Downloads    #切换到whl文件所在文件夹
pip install --ignore-installed --upgrade tensorflow_gpu-1.3.0-cp36-cp36m-linux_x86_64.whl   #切记，不要用sudo pip，也不要用pip3，然后--ignore-installed --upgrade等参数也不能省略，否则会出错。
```
如图所示，TensorFlow安装成功了（来源见水印）：

![安装tensorflow-gpu](https://ws4.sinaimg.cn/large/6e529308gy1ft2dsykvrmj20hx0kvtk9.jpg)

**cpu版本安装同上**

**注：**当你不用 TensorFlow 的时候，关闭环境`source deactivate tensorflow`，再次使用时按照5.2激活即可。

## 5.5. 卸载TensorFlow
```
sudo pip uninstall tensorflow 　　#Python2.7
sudo pip3 uninstall tensorflow 　　#Python3.x
```
## 5.6. 测试TensorFlow
在`python`环境下输入一下命令
```
import tensorflow as tf
hello = tf.constant('Hello, TensorFlow!')
sess = tf.Session()
sess.run(hello)
```
输出为`'Hello, TensorFlow!'`即代表安装成功。

# 6. monodepth配置
直接使用预训练的model预测深度图，参考官方教程即可。
结果所示：

![monodepth结果](http://wx1.sinaimg.cn/large/6e529308gy1ft2eyecr8cj217v0b74j2.jpg)
## 6.1. 所遇问题
### 6.1.1. modulenotfounderror: no module named 'matplotlib._path'问题的解决
```
conda install matplotlib
```
### 6.1.2. Sub-process /usr/bin/dpkg returned an error code (1)解决方法
```
cd /var/lib/dpkg        
sudo mv info info.bak   #做备份 
sudo mkdir info
sudo apt-get install cmake --reinstall  #重新安装cmake包
sudo rm -rf info
sudo mv info.bak info       #还原info
```
### 6.1.3. Tensorflow ：Unsuccessful TensorSliceReader constructor: Failed to find any matching files
文件路径问题，我将相对路径修改为绝对路径之后解决。
### 6.1.4. scipy.misc module has no attribute imread
需要安装Pillow`conda install Pillow`
# 7. 参考链接

1. [深度学习（TensorFlow）环境搭建：（三）Ubuntu16.04+CUDA8.0+cuDNN7+Anaconda4.4+Python3.6+TensorFlow1.3](https://www.cnblogs.com/xuliangxing/p/7575586.html)
2. [Anaconda创建环境、删除环境、激活环境、退出环境](https://zhuanlan.zhihu.com/p/36633807)
3. [modulenotfounderror: no module named 'matplotlib._path'问题的解决](https://blog.csdn.net/zhaluo0051/article/details/78239417)
4. [Sub-process /usr/bin/dpkg returned an error code (1)解决方法](https://blog.csdn.net/light_language/article/details/72461161)
5. [Tensorflow ：Unsuccessful TensorSliceReader constructor: Failed to find any matching files](https://blog.csdn.net/jmh1996/article/details/77799842)
6. [scipy.misc module has no attribute imread](https://stackoverflow.com/questions/15345790/scipy-misc-module-has-no-attribute-imread)