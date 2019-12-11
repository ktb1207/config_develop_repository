/**
 * Created by ktb on 17-10-27.
 */
/*************babel本地安装配置****************/
/*
* 1.新建项目，以下操作均在项目目录下操作
* 2.npm init初始化
* 3.npm install --save-dev babel-cli babel-preset-env
* 4.项目根目录创建 .babelrc文件
*   vi .babelrc
* 5.配置.babelrc文件
*   {
*       "presets": ["env"]
*   }
*   这个presets属性后面的数组值表示babel组件
*   env表示babel-preset-env
*   react表示 babel-preset-react
* 6.项目文件夹下 npm install --save-dev 组件名
* 7.手动配置package.json
*   "build": "babel src -d lib",
*   "getbabelVersion" :"babel --version"
* 8.查看版本号npm run getbabelVersion，输出版本号即安装成功
*
* 9.安装es2015 插件：npm install --save-dev babel-preset-es2015
*   不安装编译没有效果
* 10.安装react插件：npm install --save-dev babel-preset-react
*
* 11.为了完整使用 ES6 的 API，安装：npm install --save-dev babel-polyfill
*       babel默认只会编译es5新语法而不编译新的API
*
* 12.编译文件：npm run build
*       运行npm run build会即可把项目src文件夹里面js文件编译输出至lib文件夹，在运行命令时候保证项目目录存在src和
*       lib文件夹
*       在整个编译过程，会在lib自动创建对应src文件夹里面对应文件和文件夹
* */
