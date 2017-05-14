# react-webpack
react基于webpack2搭建的开发、发布环境（持续更新...）

### 实现
react+react-router+webpack+es6+less,兼容jsx语法，依赖包自动抽出为单独文件，减少开发时webpack热重载编译消耗，css和less合并打包，输出文件压缩混淆，
开发时使用开发版本的依赖包，增加错误定位跟踪，打包为压缩部署版依赖包，并去掉所有debugger、注释。

文件输出目录结构仿VUE2.0官方轮子实现。

### 使用说明


##### 使用 yarn
<pre>
  yarn   // 安装依赖包
  yarn dev // 运行在开发环境，使用（http://localhost:3000）访问
  yarn build // 打包输出至 项目里dist目录
</code>


##### 使用 npm
<pre>
  npm i   // 安装依赖包
  npm run dev // 运行在开发环境，使用（http://localhost:3000）访问
  npm run build // 打包输出至 项目里dist目录
</pre>

---
### 联系方式
如有疑问，请联系 410780496@qq.com
