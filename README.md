# socket.io-wxapp-client

小程序socket.io客户端

![socket.io-client v-2.0.4](https://img.shields.io/badge/socket.io--client-v2.0.4-blue.svg)

## Usage

使用和`web`版一致, 文档在此[socket.io](https://socket.io/docs/),.

**不同处**: 因为小程序没有`xhr`, 这边也就不支持`polling`(轮询), 在`engine.io-wxapp-client`包中就砍
掉了这部分. 对小程序开发没啥影响, 不过也需要提下

1. `transports`类型, 也不支持`polling`, 只有`websocket`
2. `web`版建立`websocket`前会使用`http`请求握手, 小程序默认直接打开`socket`连接

### 1. npm包

```console
npm install --save socket.io-wxapp-client
```

```js
// 微信小程序
const wxappIo = require('socket.io-wxapp-client');

// 支付宝小程序
const myappIo = require('socket.io-wxapp-client/socket.io-myapp.js');
```

### 2. 直接引入文件

按需把对应文件拷贝到工程目录下, 然后引入

- 微信小程序: [lib/socket.io-wxapp.js](lib/socket.io-wxapp.js)
- 支付宝小程序: [lib/socket.io-myapp.js](lib/socket.io-myapp.js)
