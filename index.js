function isString(o) {
    return typeof o === 'string';
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[Object array]';
}

function WebSocket(url, protocols) {
    if (protocols) {
        if (isString(protocols)) {
            protocols = [protocols];
        } else if (!isArray(protocols)) {
            protocols = undefined;
        }
    }
    // readyState
    //   binaryType
    //   onopen
    //   onclose
    //   onmessage
    //   onerror
    //   send
    //   close
    wx.connectSocket({
        url,
        header: {
            'content-type': 'application/json',
        },
        protocols,
        method: 'GET',
    });
}

module.exports = WebSocket;
