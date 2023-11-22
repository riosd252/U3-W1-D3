var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return Tasse;
}());
var Professinista = /** @class */ (function (_super) {
    __extends(Professinista, _super);
    function Professinista(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef, _id, _name, _surname) {
        var _this = _super.call(this, _codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) || this;
        _this.id = _id;
        _this.name = _name;
        _this.surname = _surname;
        return _this;
    }
    Professinista.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - this.redditoAnnuoLordo * this.codredd;
    };
    Professinista.prototype.getTasseInps = function () {
        return (this.tasseInps = this.getUtileTasse() * 0.25);
    };
    Professinista.prototype.getTasseIrpef = function () {
        return (this.tasseIrpef = this.getUtileTasse() * 0.05);
    };
    Professinista.prototype.getRedditoAnnuoNetto = function () {
        return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
    };
    return Professinista;
}(Tasse));
var professionista1 = new Professinista(0.22, 100, 0, 0, 1, "David", "Rios");
professionista1.getTasseInps();
console.log(professionista1);
