关于 VScode 代码格式化配置梳理总结：

1.VScode 配置 editorconfig：
说明：EditorConfig 帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式
不同的开发人员，不同的编辑器，有不同的编码风格，而 EditorConfig 就是用来协同团队开发人员之间的代码的风格及样式规范化的一个工具，而.editorconfig 正是它的默认配置文件。
配置：
**VScode 扩展项搜索 EditConfig 项安装插件
**项目根目录创建.editorconfig 文件
\*\*示例

# 告诉 EditorConfig 插件，这是根文件，不用继续往上查找

root = true

# 匹配全部文件

[*]

# 结尾换行符，可选"lf"、"cr"、"crlf"

end_of_line = lf

# 在文件结尾插入新行

insert_final_newline = true

# 删除一行中的前后空格

trim_trailing_whitespace = true

# 匹配 js 和 py 结尾的文件

[*.{js,py}]

# 设置字符集

charset = utf-8

# 匹配 py 结尾的文件

[*.py]

# 缩进风格，可选"space"、"tab"

indent_style = space

# 缩进的空格数

indent_size = 4

# 以下匹配，类同

[Makefile]
indent_style = tab

# tab 的宽度

tab_width = 4

# 以下匹配，类同

[lib/**.js]
indent_style = space
indent_size = 2

[{package.json,.travis.yml}]
indent_style = space
indent_size = 2

---

以下为项目具体配置信息
root = true
[*]
charset = utf-8
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
[*.json]
indent_size = 4

使用：Alt+Shift+F 即可格式化文件内容
