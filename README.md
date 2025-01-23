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

### 了解 Shopify Cli / Shopify Dawn

Fork [Shopify Dawn](https://github.com/Shopify/dawn) ,将其运行起来

### 了解 Liquid

[Shopify Liquid](https://shopify.dev/docs/api/liquid)

### 了解 Shopify Admin 

在 [Admin后台](https://admin.shopify.com/) 进行操作，配置商店  
修改 Dawn，使其与商店连接，并发布

### 熟悉 Shopify Dawn

[Build Shopify themes](https://shopify.dev/docs/storefronts/themes)

### 了解 filter

[Shopify Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery/filters)