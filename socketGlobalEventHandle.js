const logIt = require('log_it');

const log = logIt('@2d-socket:socketGlobalEventHandle');
let isInitSocketGlobalEvent = false;

const defaultGloableEventHandler = (...args) => {
    log.warn('没有socket全局处理事件 %O', args);
};

// 全局事件接受者
let gloableEventHandler;

/**
 * 监听小程序socket全局的事件
 * @param  {Function} handler 事件接受者
 */
module.exports = function socketGlobalEventHandle(handler = defaultGloableEventHandler) {
    // 设置全局事件接受者
    gloableEventHandler = handler;

    if (isInitSocketGlobalEvent) {
        return;
    }
    isInitSocketGlobalEvent = true;

    // 绑定全局监听initListen
    wx.onSocketOpen(() => {
        gloableEventHandler('open');
    });

    wx.onSocketError((res) => {
        gloableEventHandler('error', res);
    });

    wx.onSocketClose(() => {
        gloableEventHandler('close');
    });

    wx.onSocketMessage((res) => {
        log.info('message', res);
        gloableEventHandler('message', res);
    });
};
