### 关于 vscode 中 prettier 格式化插件的配置使用说明

关于 prettier
代码格式化工具，支持 html,css,scss,less,javascript,es6,jsx,typescript,json,vue,markdown

---

##### 1.自定义配置文件使用方式

- 根目录创建`.prettierrc`文件，支持 yaml 和 json 格式；或者加上扩展名后缀如`.prettierrc.json`，`.prettierrc.yaml`;

```
{
  "semi": false,
  "singleQuote": true
}
```

- 根目录创建`.prettierrc.toml`文件；
- 根目录创建`.prettierrc.config.js`或者`.prettier.js`返回一个对象

```
module.exports = {
  semi: false,
  singleQuote: true
};
```

- 在项目 package.json 文件中添加 prettier 对象

##### 2.插件类使用方式

这里以 eslint 使用为例，当做 eslint 的插件使用

- 安装依赖：`npm install prettier eslint-plugin-prettier --save-dev`
- 在 eslint 的配置文件`.eslintrc`或者`.eslintrc.json`或者`.eslintrc.js`中

```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

##### 3.配置说明

```
{
    // 使能每一种语言默认格式化规则
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /*  prettier的配置 */
    "prettier.printWidth": 140, // 超过最大值换行
    "prettier.tabWidth": 2, // 缩进字节数
    "prettier.useTabs": false, // 缩进不使用tab，使用空格
    "prettier.semi": true, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
    "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
    "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
    "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
    "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
    "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
    "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
    "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
    "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    "prettier.tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验
}
```
