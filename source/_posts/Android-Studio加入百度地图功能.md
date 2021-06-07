---
title: Android Studio加入百度地图功能
tags:
  - Android
  - 百度地图
categories: 开发总结
abbrlink: 39976cd1
subtitle:
catalog: true
header-img: /img/default.jpg
date: 2016-11-22 22:31:59
---
最近一直在学习在Android Studio里添加百度地图功能，但是初期遇到很多问题，经过多次实践以及众多大神的解答，终于解决了在android studio上使用百度地图的许多问题，现在记录如下。


<!-- more -->
## 1.首先申请百度API key

百度API key申请需要SHA1值以及包名，其中SHA1值我是自己创建一个keystore，步骤如下：

打开Build->Generate Signed APK，如图一设置数字签名的一系列参数，具体过程可度娘，最后获得一个.jks文件，如图中的baidumap.jks；

[![建立jks](http://i.imgur.com/xT2QWxk.png)](http://i.imgur.com/xT2QWxk.png)

在创建jks文件时，注意选择Build Type，在测试阶段选择debug即可：

[![img](http://i.imgur.com/4IuCCUJ.png)](http://i.imgur.com/4IuCCUJ.png)

之后打开Terminal，在其中输入keytool -list -v -keystore debug.jks；其中debug.jks替换成上面你自己创建的jks文件的完整路径名，如

keytool -list -v -keystore E:\AndriodStudioProjects\keystore\baidumap.jks

[![terminal](http://i.imgur.com/TFgPdci.png)](http://i.imgur.com/TFgPdci.png)

之后会提示输入密钥库口令，直接回车

获得下图的SHA1值，这就是申请百度apikey安全码的签名部分。

[![SHA1](http://i.imgur.com/8f7Hba1.png)](http://i.imgur.com/8f7Hba1.png)

具体申请过程可参考百度地图链接[http://developer.baidu.com/map/index.php?title=androidsdk](http://developer.baidu.com/map/index.php?title=androidsdk)

申请获得API key之后，还有关键的一步build.gradle(Module.app)的android{}代码段中添加如下代码：

```
signingConfigs{

    debug{

        storeFile file("你上面建的jks文件完整路径名);

        storePassword "xxxxx";

        keyAlias "xxxxx";

        keyPassword "xxxxxx";

    }

}

```

此处注意看你申请的key的类型，如果在新建jks的时候选择的是debug，那么signingConfigs里面添加debug即可，如果是release，则要更改为release。

此步骤可解决：

在使用百度地图时候，出现地图不显示，或者只显示一部分地图，拖动地图后，地图不显示，都是白色格子，或者打印如下错误信息：

**Authentication Error errorcode: 230 uid: -1 appid -1 msg: APP Scode**码校验失败

（此问题原因也有可能是其他，见链接[http://blog.csdn.net/hhhccckkk/article/details/46649325](http://blog.csdn.net/hhhccckkk/article/details/46649325)）

## 2.导入jar包和so文件，参见百度官方指导：

Android Studio工程配置方法

第一步：在工程app/libs目录下放入baidumapapi_vX_X_X.jar包,在src/main/目录下新建jniLibs目录，放入libBaiduMapSDK_vX_X_X_X.so如下图所示，注意jar和so的前3位版本号必须一致，并且保证使用一次下载的文件夹中的两个文件，不能不同功能组件的jar或so交叉使用。

第二步：导入jar包。菜单栏选择File->Project Structor->Modules->Dependencies,点击+号，选择File dependency，选择jar包导入。

通过以上两步操作后，您就可以正常使用百度地图SDK为您提供的全部功能了。

附链接：[http://developer.baidu.com/map/index.php?title=androidsdk](http://developer.baidu.com/map/index.php?title=androidsdk)

## 3.程序代码，可参照百度示例

[http://developer.baidu.com/map/index.php?title=androidsdk/guide/hellobaidumap](http://developer.baidu.com/map/index.php?title=androidsdk/guide/hellobaidumap)

最新的百度地图控件是3.5版，而有些指导书是按照2.xx版写的，所以代码会有差别，注意区分。

百度地图的官方Demo对各个部分的功能写的很详细，可参考之。
