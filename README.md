# Shopify Level Up

记录一下自己的探索过程

### 开发配置  

开局便是坑，由于国内的网络环境，想踏出第一步都很困难  
解决办法是使用 global-agent 对请求进行代理  
 
1. 全局安装 `global-agent`
2. 找到 shopify-cli 启动文件 `run.js`
3. 修改 `run.js` 使 `global-agent` 生效
4. 设置代理

- 参考
  - [shopify CLI国内开发配置](https://bingowith.me/2024/09/22/shopify-cli-china-development-setup/)

### 写下第一行代码

想了很久，不知道从何开始，决定复刻 [casetify](https://www.casetify.com/)  
于是便花10分钟编写了 `header-ribbon.liquid`，实现了header绸带功能  
> 代码写完就明白了 `layout/theme.liquid` 的意义

### 设置商品轮播图

商品轮播图可以在 shopify 后台设置  
刚开始体验这个功能我很困惑商品集的链接是怎么生成的  
后来才知道商品集可以在 Products/Collection 配置，然后里面有个配置可以自定义链接

### 商品列表

接下来，该考虑如何渲染商品列表了  
经过一段时间的探索，编写了 `sections/featured-series.liquid`  
目前为止完成的代码，会让你感觉 liquid 没什么神秘的了  
开发流程基本了解，剩下要做的是去了解常见的技术特性

### 商品详情
todo

### 购物车
todo

### 登陆
todo 