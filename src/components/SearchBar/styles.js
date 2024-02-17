"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBarContainer = void 0;
var styled_components_1 = require("styled-components");
exports.SearchBarContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .search {\n    display: flex;\n    flex-direction: row;\n    font-size: 22px;\n    height: 64px;\n    min-width: 100%;\n    justify-content: center;\n    align-items: center;\n    background-color: #f2f2f2;\n    border-radius: 30px;\n    justify-content: space-around;\n    padding-left: 18px;\n    padding-right: 32px;\n  }\n\n  .search input {\n    min-width: 80%;\n    width: fit-content;\n    justify-content: center;\n    background: transparent;\n    border-style: none;\n    font-size: 16px;\n    font-weight: 500;\n    outline: none;\n    color: #575757;\n    font-family: \"Poppins\", sans-serif;\n  }\n\n  ::placeholder {\n    font-family: \"Poppins\", sans-serif;\n    font-size: 14px;\n    font-weight: 400px;\n  }\n\n  input:focus:not(:placeholder-shown) + label {\n    /* display: none ; */\n  }\n\n  .magnify {\n    margin-left: 16px; \n  }\n\n  .controls {\n     margin-right: 16px; \n    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.1);\n    background-color: #fefefe;\n    border-radius: 8px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .search {\n    display: flex;\n    flex-direction: row;\n    font-size: 22px;\n    height: 64px;\n    min-width: 100%;\n    justify-content: center;\n    align-items: center;\n    background-color: #f2f2f2;\n    border-radius: 30px;\n    justify-content: space-around;\n    padding-left: 18px;\n    padding-right: 32px;\n  }\n\n  .search input {\n    min-width: 80%;\n    width: fit-content;\n    justify-content: center;\n    background: transparent;\n    border-style: none;\n    font-size: 16px;\n    font-weight: 500;\n    outline: none;\n    color: #575757;\n    font-family: \"Poppins\", sans-serif;\n  }\n\n  ::placeholder {\n    font-family: \"Poppins\", sans-serif;\n    font-size: 14px;\n    font-weight: 400px;\n  }\n\n  input:focus:not(:placeholder-shown) + label {\n    /* display: none ; */\n  }\n\n  .magnify {\n    margin-left: 16px; \n  }\n\n  .controls {\n     margin-right: 16px; \n    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.1);\n    background-color: #fefefe;\n    border-radius: 8px;\n  }\n"])));
var templateObject_1;