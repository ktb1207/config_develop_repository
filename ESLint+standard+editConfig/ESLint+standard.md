关于 VSCode 配置 ESLint+standard 说明
ESlint:
它的目标是提供一个插件化的 javascript 代码检测工具。
借助 ESLint，可将 静态代码分析 和 问题代码协助修复 集成到 编码、提交 和 打包 过程中，及早发现并协助修复代码中：
**有语法错误的部分
**不符合约定的样式准则的部分
\*\*不符合约定的最佳实践的部分

在项目开发中获得如下收益：
**在执行代码之前发现并修复语法错误，减少调试耗时和潜在 bug
**保证项目的编码风格统一，提高可维护性
\*\*督促团队成员在编码时遵守约定的最佳实践，提高代码质量\

项目配置：
**在 vue 项目中使用官方脚手架初始化生成项目工程选择 ESLint+Standard
**根据实际情况修改项目目录下.eslintrc.js 文件 \*_在项目根目录下创建忽略检查项文件.eslintignore 文件
/dist/
/tests/
/src/assets/
/_.js
/\*.json

.eslintrc.js 配置参考：
module.exports = {
root: true,
env: {
node: true,
browser: true
},
extends: ['plugin:vue/essential', '@vue/standard', 'eslint:recommended'],
rules: {
// 禁止
'no-await-in-loop': 2, // 禁止在循环中出现 await
'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
'no-duplicate-case': 2, // 禁止出现重复的 case 标签
'no-empty': 2, // 禁止出现空语句块
'no-extra-parens': 2, // 禁止不必要的括号
'no-extra-semi': 2, // 禁止不必要的分号
'no-else-return': 2, // 禁止在 else 前有 return
'no-empty-function': 2, // 禁止出现空函数
'no-multi-spaces': 2, // 禁止出现多个空格
'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
'no-delete-var': 2, // 禁止删除变量
'no-label-var': 2, // 不允许标签与变量同名
'no-undef': 2, // 禁用未声明的变量
'no-unused-vars': 2, // 禁止未使用过的变量
// 要求
'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
'default-case': 2, // switch 语句最后必须有 default
eqeqeq: 2, // 必须使用全等
'global-require': 2, // 强制在模块顶部调用 require()
quotes: [2, 'single'], // 单引号
indent: [2, 2], // 2 空格 缩进
semi: [2, 'always'], // 在语句末尾使用分号
// 建议
'block-spacing': [1, 'always'], // 强制在代码块中开括号前和闭括号后有空格
'brace-style': [1, '1tbs'], // 强制在代码块中使用一致的大括号风格
'comma-dangle': [1, 'never'], // (默认) 禁用拖尾逗号
camelcase: [1, { properties: 'always' }], // 强制使用骆驼拼写法命名约定

    // 忽略
    'vars-on-top': 0, // 所有的 var 声明出现在它们所在的作用域顶部
    'space-before-function-paren': [0, 'always'], // function的左括号之前使用一致的空格
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'

},
parserOptions: {
parser: 'babel-eslint'
},
overrides: [
{
files: ['**/__tests__/*.{j,t}s?(x)'],
env: {
mocha: true
}
}
]
};
