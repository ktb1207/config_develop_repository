### vscode 中 settings.json 文件的配置参考说明

```
{
  // vscode 代理
  "http.proxy": "http://proxy3.bj.petrochina:8080",
  // 文件图标
  "workbench.iconTheme": "vscode-icons",
  // 文件头注释
  "fileheader.Author": "kongtb",
  "fileheader.LastModifiedBy": "kongtb",
  // LF CRLF
  "files.associations": {},
  "files.eol": "\n",
  // 两个选择器中是否换行
  "window.zoomLevel": 0,
  // react jsx语法
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": { "javascript": "javascriptreact" },
  // 开启自动显示建议
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.accessibilitySupport": "off",
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定缩进
  "editor.tabSize": 2,
  // 保存自动格式化
  "editor.formatOnSave": true,
  // 保存按照eslint格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
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
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.printWidth": 140,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.singleQuote": true,
  "settingsSync.ignoredExtensions": []
}

```
