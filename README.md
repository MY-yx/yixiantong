# 项目结构

1. assets => 静态文件
2. components => 组件文件; 拆分功能变为若干子组件, 单独管理(每一个组件都是一个独立的模块)
3. model => 数据层(后端交互)
4. pages => 页面
5. router => 路由配置
6. store => 中央状态管理
7. utils => 工具

## 组件抽离原则:
  1. 原则上能抽出(可复用)的都可以提出;
  2. 独立功能性的组件应该被提出;