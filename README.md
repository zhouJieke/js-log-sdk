# 前端JS日志库

## 简介

前端JS日志库，支持多种日志输出方式，错误日志，请求日志，用户操作录屏，可根据需要进行灵活配置
## 特性

- 支持多种日志输出方式，可根据需要进行灵活配置。
- 支持日志分组
- 支持路由过虑日志
- 支持域名是否启动日志监听

## 使用
### 1. 安装
```
npm install js-log-sdk
```
### 2. 引入
```
import { init, WebLog } from "js-log-sdk";
```
### 3. 基本使用
```
init({
  integrations: [
    new WebLog.Replay({
      reportTime: 10 * 1000
    })
  ]
})
```
