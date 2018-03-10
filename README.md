# socket.io-wxapp-client

小程序socket.io客户端

## Usage

使用同[socket.io](https://socket.io/docs/)

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

- `lib/socket.io-wxapp.js`: 微信小程序文件
- `lib/socket.io-myapp.js`: 支付宝小程序文件
