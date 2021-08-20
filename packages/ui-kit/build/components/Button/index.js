import React from 'react';

var ButtonType;
(function (ButtonType) {
    ButtonType["DEFAULT"] = "default";
    ButtonType["PRIMARY"] = "primary";
    ButtonType["SECONDARY"] = "secondary";
})(ButtonType || (ButtonType = {}));
var Button = function (_a) {
    var children = _a.children, _b = _a.theme; _b === void 0 ? ButtonType.DEFAULT : _b;
    return React.createElement("button", null, children);
};

export { ButtonType, Button as default };
//# sourceMappingURL=index.js.map
