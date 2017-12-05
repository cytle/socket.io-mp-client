import socketGlobalEventHandle from './socketGlobalEventHandle';

function isString(o) {
    return typeof o === 'string';
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[Object array]';
}

let globalWebsocket;

function WebSocket(url, protocols) {
    if (protocols) {
        if (isString(protocols)) {
            protocols = [protocols];
        } else if (!isArray(protocols)) {
            throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${protocols}' is invalid.`);
        }
    }
    if (globalWebsocket) {
        globalWebsocket.crash();
    }
    globalWebsocket = this;
    socketGlobalEventHandle((event, res) => {
        if (event === 'close') {
            this.readyState = WebSocket.CLOSED;
        } else if (event === 'open') {
            this.readyState = WebSocket.OPEN;
        }
        if (this[`on${event}`]) {
            this[`on${event}`](res);
        }
    });
    // binaryType
    this.binaryType = '';
    this.readyState = WebSocket.CONNECTING;
    wx.connectSocket({
        url,
        header: {
            'content-type': 'application/json',
        },
        protocols,
        method: 'GET',
    });
}

WebSocket.prototype.send = function send(data) {
    if (globalWebsocket !== this) {
        return;
    }
    if (this.readyState === WebSocket.CONNECTING) {
        /* eslint no-console: "off" */
        throw new DOMException("DOMException: Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    }
    if (this.readyState !== WebSocket.OPEN) {
        /* eslint no-console: "off" */
        console.error('WebSocket is already in CLOSING or CLOSED state.');
        return;
    }
    wx.sendSocketMessage({
        data,
    });
};

WebSocket.prototype.close = function close(code, reason) {
    if (globalWebsocket !== this) {
        return;
    }
    this.readyState = WebSocket.CLOSING;

    wx.closeSocket({
        code,
        reason,
    });
};

WebSocket.prototype.crash = function crash() {
    this.readyState = WebSocket.CLOSED;
    if (this.onclose) {
        this.onclose();
    }
};

WebSocket.CONNECTING = 0; // The connection is not yet open.
WebSocket.OPEN = 1; // The connection is open and ready to communicate.
WebSocket.CLOSING = 2; // The connection is in the process of closing.
WebSocket.CLOSED = 3; // The connection is closed or couldn't be opened.

module.exports = WebSocket;
