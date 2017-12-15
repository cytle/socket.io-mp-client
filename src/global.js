const WebSocket = require('./ws');

const g = {
    Number,
    String,
    Object,
    Date,
    SyntaxError,
    TypeError,
    Math,
    JSON,
    WebSocket,
    self: g,
    global: g,
};
module.exports = g;
