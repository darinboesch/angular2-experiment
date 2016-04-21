"use strict";
var utility_1 = require('../../common/utility');
var Alert = (function () {
    function Alert(o) {
        this.id = o && o.id || utility_1.uuid();
        this.type = o && o.type;
        this.msg = o && o.msg;
    }
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map