abstract class Tasse {
  codredd: number;
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;

  constructor(
    _codredd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number
  ) {
    this.codredd = _codredd;
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
  }

  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoAnnuoNetto(): number;
}

class Professinista extends Tasse {
  id: number;
  name: string;
  surname: string;

  constructor(
    _codredd,
    _redditoAnnuoLordo,
    _tasseInps,
    _tasseIrpef,
    _id,
    _name,
    _surname
  ) {
    super(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef);
    this.id = _id;
    this.name = _name;
    this.surname = _surname;
  }

  getUtileTasse(): number {
    return this.redditoAnnuoLordo - this.redditoAnnuoLordo * this.codredd;
  }

  getTasseInps(): number {
    return (this.tasseInps = this.getUtileTasse() * 0.25);
  }

  getTasseIrpef(): number {
    return (this.tasseIrpef = this.getUtileTasse() * 0.05);
  }

  getRedditoAnnuoNetto(): number {
    return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
  }
}

const professionista1 = new Professinista(0.22, 100, 0, 0, 1, "David", "Rios");

professionista1.getTasseInps();

console.log(professionista1);
