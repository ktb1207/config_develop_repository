### 关于.editorconfig 文件的使用说明

---

- EditorConfig 和 Prettier 一样，都是用来配置格式化你的代码的，这个格式化代码，要和你 eslint 配置相符！否则会出现你格式化代码以后，却不能通过你的代码校验工具的检验;

- EditorConfig 文件中的设置用于在基本代码库中维持一致的编码风格和设置

- 例如缩进样式、选项卡宽度、行尾字符以及编码等，而无需考虑使用的编辑器或 IDE

- editorConfig 不是什么软件，而是一个名称为.editorconfig 的自定义文件。

- 该文件用来定义项目的编码规范，编辑器的行为会与.editorconfig 文件中定义的一致，并且其优先级比编辑器自身的设置要高

- 这在多人合作开发项目时十分有用而且必要

- 有些编辑器默认支持 editorConfig，如 webstorm；而有些编辑器则需要安装 editorConfig 插件，如 ATOM、Sublime、VS Code 等

- 当打开一个文件时，EditorConfig 插件会在打开文件的目录和其每一级父目录查找.editorconfig 文件，直到有一个配置文件 root=true

- EditorConfig 的配置文件是从上往下读取的并且最近的 EditorConfig 配置文件会被最先读取

- 匹配 EditorConfig 配置文件中的配置项会按照读取顺序被应用, 所以最近的配置文件中的配置项拥有优先权

- 如果.editorconfig 文件没有进行某些配置，则使用编辑器默认的设置

```
root = true
# 对于所有文件
[*]
charset = utf-8
# 设置换行符，值为lf、cr和crlf
end_of_line = lf
#设为true表示使文件以一个空白行结尾
insert_final_newline = true
#设为true表示会去除换行行首的任意空白字符。
trim_trailing_whitespace = true
# 空格缩进
[*.{js,vue,ts,tsx}]
#设置缩进风格(tab是硬缩进，space为软缩进)
indent_style = space
#用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
indent_size = 2

[*{css,less,scss}]
indent_size = 4
```
