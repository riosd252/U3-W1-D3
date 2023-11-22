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
var professionista1 = new Professinista(0.22, 50000, 0, 0, 1, "David", "Rios");
professionista1.getTasseInps();
professionista1.getTasseIrpef();
console.log(professionista1);
console.log("Il reddito annuo netto di ".concat(professionista1.name, " ").concat(professionista1.surname, " ammounta a ").concat(professionista1.getRedditoAnnuoNetto(), "\u20AC"));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef, _id, _name, _surname) {
        var _this = _super.call(this, _codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) || this;
        _this.id = _id;
        _this.name = _name;
        _this.surname = _surname;
        return _this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - this.redditoAnnuoLordo * this.codredd;
    };
    Artigiano.prototype.getTasseInps = function () {
        return (this.tasseInps = this.getUtileTasse() * 0.15);
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return (this.tasseIrpef = this.getUtileTasse() * 0.15);
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
    };
    return Artigiano;
}(Tasse));
var artigiano1 = new Artigiano(0.22, 150000, 0, 0, 1, "Cosmin", "Petrea");
artigiano1.getTasseInps();
artigiano1.getTasseIrpef();
console.log(artigiano1);
console.log("Il reddito annuo netto di ".concat(artigiano1.name, " ").concat(artigiano1.surname, " ammounta a ").concat(artigiano1.getRedditoAnnuoNetto(), "\u20AC"));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef, _id, _name, _surname) {
        var _this = _super.call(this, _codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) || this;
        _this.id = _id;
        _this.name = _name;
        _this.surname = _surname;
        return _this;
    }
    Commerciante.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - this.redditoAnnuoLordo * this.codredd;
    };
    Commerciante.prototype.getTasseInps = function () {
        return (this.tasseInps = this.getUtileTasse() * 0.35);
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return (this.tasseIrpef = this.getUtileTasse() * 0.15);
    };
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
    };
    return Commerciante;
}(Tasse));
var commerciante1 = new Commerciante(0.22, 500000, 0, 0, 1, "Rosario", "Scilipoti");
commerciante1.getTasseInps();
commerciante1.getTasseIrpef();
console.log(commerciante1);
console.log("Il reddito annuo netto di ".concat(commerciante1.name, " ").concat(commerciante1.surname, " ammounta a ").concat(commerciante1.getRedditoAnnuoNetto(), "\u20AC"));
