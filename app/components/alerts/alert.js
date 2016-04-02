"use strict";
var uuid_1 = require('../../util/uuid');
var Alert = (function () {
    function Alert(o) {
        this.id = o && o.id || uuid_1.uuid();
        this.type = o && o.type;
        this.msg = o && o.msg;
    }
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map