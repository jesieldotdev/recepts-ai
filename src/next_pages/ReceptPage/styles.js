"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Description = exports.Header = exports.ReceptContainer = void 0;
var styled_components_1 = require("styled-components");
exports.ReceptContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  .ml-8 {\n    margin-left: 8px;\n  }\n  .ml-16 {\n    margin-left: 16px;\n  }\n\n  .pd-8 {\n    padding: 16px;\n  }\n  .pd-16 {\n    padding: 16px;\n  }\n  .mt-8 {\n    margin-top: 8px;\n  }\n  .mt-16 {\n    margin-top: 16px;\n  }\n  .mt-32 {\n    margin-top: 32px;\n  }\n\n  .img_cover {\n    height: 200px;\n    width: 100vw;\n    object-fit: cover;\n    border-radius: 30px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    box-shadow: 10px 12px 35px 10px;\n  }\n"], ["\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  .ml-8 {\n    margin-left: 8px;\n  }\n  .ml-16 {\n    margin-left: 16px;\n  }\n\n  .pd-8 {\n    padding: 16px;\n  }\n  .pd-16 {\n    padding: 16px;\n  }\n  .mt-8 {\n    margin-top: 8px;\n  }\n  .mt-16 {\n    margin-top: 16px;\n  }\n  .mt-32 {\n    margin-top: 32px;\n  }\n\n  .img_cover {\n    height: 200px;\n    width: 100vw;\n    object-fit: cover;\n    border-radius: 30px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    box-shadow: 10px 12px 35px 10px;\n  }\n"])));
exports.Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .title {\n    font-weight: 700;\n    font-size: 26px;\n    color: #282828;\n  }\n\n  .info {\n    display: flex;\n\n    .item {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n\n      p {\n        display: flex;\n        margin-right: 8px;\n      }\n    }\n  }\n"], ["\n  .title {\n    font-weight: 700;\n    font-size: 26px;\n    color: #282828;\n  }\n\n  .info {\n    display: flex;\n\n    .item {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n\n      p {\n        display: flex;\n        margin-right: 8px;\n      }\n    }\n  }\n"])));
exports.Description = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
exports.Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .title {\n    font-weight: 600;\n    font-size: 18px;\n    color: #282828;\n    border-style: none;\n    background-color: none;\n  }\n\n\n    .preparation {\n      .title {\n        border-style: none;\n      \n      }\n\n      .step {\n        border-style: solid;\n        border-top-style: none;\n        border-right-style: none;\n        /*border-left-style: none;*/\n        border-bottom-style: none;\n        display: flex;\n        \n      }\n\n      .item {\n        font-weight: 600;\n        font-size: 24px;\n        line-height: 1;\n        margin-right: 16px;\n      }\n    }\n  .ingredients {\n    margin-bottom: 16px;\n    .item {\n      border-style: solid;\n      /*background-color: #c4c4c4;*/\n      border-left-color: #fdcb19;\n      border-left-width: 4px;\n      padding-left: 14px;\n      border-top-style: none;\n      border-right-style: none;\n      border-bottom-style: none;\n      border-radius: 3px;\n      margin-top: 16px;\n    }\n\n\n    .pills {\n      display: flex;\n      overflow-x: scroll;\n      margin-bottom: 200px;\n      p {\n        padding: 7px;\n        background-color: #efebe9;\n        margin-right: 20px;\n        font-weight: 600;\n        border-radius: 34px;\n        font-size: 14px;\n      }\n    }\n  }\n"], ["\n  .title {\n    font-weight: 600;\n    font-size: 18px;\n    color: #282828;\n    border-style: none;\n    background-color: none;\n  }\n\n\n    .preparation {\n      .title {\n        border-style: none;\n      \n      }\n\n      .step {\n        border-style: solid;\n        border-top-style: none;\n        border-right-style: none;\n        /*border-left-style: none;*/\n        border-bottom-style: none;\n        display: flex;\n        \n      }\n\n      .item {\n        font-weight: 600;\n        font-size: 24px;\n        line-height: 1;\n        margin-right: 16px;\n      }\n    }\n  .ingredients {\n    margin-bottom: 16px;\n    .item {\n      border-style: solid;\n      /*background-color: #c4c4c4;*/\n      border-left-color: #fdcb19;\n      border-left-width: 4px;\n      padding-left: 14px;\n      border-top-style: none;\n      border-right-style: none;\n      border-bottom-style: none;\n      border-radius: 3px;\n      margin-top: 16px;\n    }\n\n\n    .pills {\n      display: flex;\n      overflow-x: scroll;\n      margin-bottom: 200px;\n      p {\n        padding: 7px;\n        background-color: #efebe9;\n        margin-right: 20px;\n        font-weight: 600;\n        border-radius: 34px;\n        font-size: 14px;\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
