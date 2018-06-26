# socket.io-mp-client

小程序socket.io客户端, 支持微信小程序、支付宝小程序

![socket.io-client v-2.0.4](https://img.shields.io/badge/socket.io--client-v2.0.4-blue.svg)

## Usage

使用和`web`版一致, 文档在此[socket.io](https://socket.io/docs/).

**不同处**: 因为小程序没有`xhr`, 这边也就不支持`polling`(轮询), 在`engine.io-mp-client`包中就砍
掉了这部分. 对小程序开发没啥影响, 不过也需要提下

1. `transports`类型, 也不支持`polling`, 只有`websocket`
2. `web`版建立`websocket`前会使用`http`请求握手, 小程序默认直接打开`socket`连接

### 1. npm包

```console
npm install --save socket.io-mp-client
```

```js
const wxappIo = require('socket.io-mp-client');
```

### 2. 直接引入文件

按需把文件[lib/socket.io-mp.js](lib/socket.io-mp.js)拷贝到工程目录下, 然后引入.

## 相关项目

- [socket.io-client](https://github.com/socketio/socket.io-client)
- [mp-websocket](https://github.com/cytle/mp-websocket)
- [engine.io-mp-client](https://github.com/cytle/engine.io-mp-client)

## 关于单元测试

该项目只是重新打包了`socket.io-client`,对于不同类型小程序兼容由`mp-websocket`提供.此项目暂无单元测试
