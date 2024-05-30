/*
* File: app.ts
* Author: Dobány Norbert
* Copyright: 2024, Dobány Norbert
* Group: Szoft I-1-N
* Date: 2024-05-30
* Github: https://github.com/notdefinitelynot/
* Licenc: GNU GPL
*/
var Ellipsoid = /** @class */ (function () {
    function Ellipsoid() {
        this.bindHTML();
        this.handleEvent();
    }
    Ellipsoid.prototype.bindHTML = function () {
        this.aInput = document.querySelector("#a");
        this.bInput = document.querySelector("#b");
        this.cInput = document.querySelector("#c");
        this.volumeInput = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcBtn");
    };
    Ellipsoid.prototype.handleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { _this.startCalc(); });
    };
    Ellipsoid.prototype.startCalc = function () {
        var _a, _b, _c;
        var a = Number((_a = this.aInput) === null || _a === void 0 ? void 0 : _a.value);
        var b = Number((_b = this.bInput) === null || _b === void 0 ? void 0 : _b.value);
        var c = Number((_c = this.cInput) === null || _c === void 0 ? void 0 : _c.value);
        var volume = Number((this.volumeCalc(a, b, c)).toFixed(3));
        this.renderResult(volume);
    };
    Ellipsoid.prototype.volumeCalc = function (a, b, c) {
        return (4 / 3) * Math.PI * a * b * c;
    };
    Ellipsoid.prototype.renderResult = function (volume) {
        if (this.volumeInput) {
            this.volumeInput.value = String(volume);
        }
    };
    return Ellipsoid;
}());
new Ellipsoid();
