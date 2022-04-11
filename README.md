### 新建express项目
- npm install express-generator -g 安装express脚手架
- express --view=jade server-side  选择jade模板引擎

### 安装依赖
- npm  install
- npm  install  typescript        
- npm  install  @types/express  @types/node -D    （安装node，express的声明文件）

### 修改目录结构
- 新建config，controller，model，types，utils等文件夹用于后续开发
- 将原有的js文件修改成ts文件，并将www文件改名为server.js（bin\www为express的入口文件）

### 修改配置文件
-  tsconfig.json 修改配置项
-  package.json 修改命令