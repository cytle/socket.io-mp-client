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
};

g.self = g;
g.global = g;
module.exports = g;
