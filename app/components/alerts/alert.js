"use strict";
var common_1 = require('../../util/common');
var Alert = (function () {
    function Alert(o) {
        this.id = o && o.id || common_1.uuid();
        this.type = o && o.type;
        this.msg = o && o.msg;
    }
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map