System.register(['../../util/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1;
    var Alert;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Alert = (function () {
                function Alert(o) {
                    this.id = o && o.id || common_1.uuid();
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