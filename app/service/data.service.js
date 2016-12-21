"use strict";
var DataService = (function () {
    function DataService() {
    }
    Object.defineProperty(DataService.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    return DataService;
}());
exports.DataService = DataService;
