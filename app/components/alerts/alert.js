System.register(['../../util/uuid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uuid_1;
    var Alert;
    return {
        setters:[
            function (uuid_1_1) {
                uuid_1 = uuid_1_1;
            }],
        execute: function() {
            Alert = (function () {
                function Alert(o) {
                    this.id = o && o.id || uuid_1.uuid();
                    this.type = o && o.type;
                    this.msg = o && o.msg;
                }
                return Alert;
            }());
            exports_1("Alert", Alert);
        }
    }
});
//# sourceMappingURL=alert.js.map