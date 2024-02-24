"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.GridContainer = void 0;
var styled_components_1 = require("styled-components");
var ButtonBase_1 = require("@mui/material/ButtonBase");
exports.GridContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n"])));
exports.Item = (0, styled_components_1.default)(ButtonBase_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 16px;\n  display : flex;\n  flex-direction : column ;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #282828;\n  height: 200px;\n  border-radius :8px;\n\n  font-weight: 600;\n"], ["\n  padding: 16px;\n  display : flex;\n  flex-direction : column ;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #282828;\n  height: 200px;\n  border-radius :8px;\n\n  font-weight: 600;\n"])));
var templateObject_1, templateObject_2;
