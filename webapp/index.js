sap.ui.define([
    "sap/m/Text"
], function (Text) {
  "use strict";
  new Text({
    text: "Hello World!",
    tooltip: "第一个SAPUI5控件-Text。"
  }).placeAt("container");
});