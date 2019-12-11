
/***********************node安装配置**********************/
/*
 *说明：此安装配置适用win7系统平台 
 * */

//步骤1：进入node官网下载对应node安装包

//步骤2：安装阶段，安装目录默认为：C:\Program Files\nodejs\，安装目录可以修改，建议默认安装目录

//步骤3:打开nodejs安装目录 C:\Program Files\nodejs\，nodejs根文件夹新建node_global和node_cache两个文件夹
// -- 并在node_global文件下新建 node_modules文件夹

//步骤4：查看node是否安装成功，win+r快捷键进入cmd终端，输入node-v\npm -v，安装成功即可查看版本号

//步骤5：npm config,接着4步骤，在cmd控制终端分别输入
//-- npm config set prefix "C:\Program Files\nodejs\node_global"
//-- npm config set cache "C:\Program Files\nodejs\node_cache"

//步骤6：配置环境变量
// -- 关闭 cmd
// -- 打开系统对话框，“我的电脑”右键“属性”-“高级系统设置”-“高级”-“环境变量”
// -- 进入环境变量对话框，在系统变量下：新建 "NODE_PATH",输入："C:\Program Files\nodejs\node_global\node_modules"

//步骤7：验证配置是否正确：安装express模块
// -- win+R 打开终端 运行：npm install express -g;安装完成会显示express模块装在了哪，版本号等信息
// -- 进入 node 输入 require('express') :正确的话cmd会列出express的相关信息

/****************************cnpm选配置***************************/
/*
 *说明：因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，网络好的环境可以忽略
 * --在网络环境不太稳定的情况下可以配置cnpm进而像运用npm那样安装模块
 * */

//步骤8：win+R 进入cmd终端 输入：npm install cnpm -g --registry=https://registry.npm.taobao.org

// 此时运行结束 cnpm -v查看版本号会报错，原因在于cnpm 和npm 不在一个安装目录
//解决方法：
//a.将 C:\Program Files\nodejs\node_global下面的cnpm两个文件复制粘贴至 C:\Program Files\nodejs文件下
//b.将 C:\Program Files\nodejs\node_global\node_modules下面的cnpm文件夹复制，粘贴至 C:\Program Files\nodejs\node_modules文件里面

//即可解决，所有配置基本完成。















