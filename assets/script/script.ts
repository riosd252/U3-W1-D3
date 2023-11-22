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

const professionista1 = new Professinista(
  0.22,
  50000,
  0,
  0,
  1,
  "David",
  "Rios"
);

professionista1.getTasseInps();
professionista1.getTasseIrpef();

console.log(professionista1);
console.log(
  `Il reddito annuo netto di ${professionista1.name} ${
    professionista1.surname
  } ammonta a ${professionista1.getRedditoAnnuoNetto()}€`
);

class Artigiano extends Tasse {
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
    return (this.tasseInps = this.getUtileTasse() * 0.15);
  }

  getTasseIrpef(): number {
    return (this.tasseIrpef = this.getUtileTasse() * 0.15);
  }

  getRedditoAnnuoNetto(): number {
    return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
  }
}

const artigiano1 = new Artigiano(0.22, 150000, 0, 0, 1, "Cosmin", "Petrea");

artigiano1.getTasseInps();
artigiano1.getTasseIrpef();

console.log(artigiano1);
console.log(
  `Il reddito annuo netto di ${artigiano1.name} ${
    artigiano1.surname
  } ammonta a ${artigiano1.getRedditoAnnuoNetto()}€`
);

class Commerciante extends Tasse {
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
    return (this.tasseInps = this.getUtileTasse() * 0.35);
  }

  getTasseIrpef(): number {
    return (this.tasseIrpef = this.getUtileTasse() * 0.15);
  }

  getRedditoAnnuoNetto(): number {
    return this.getUtileTasse() - this.tasseInps - this.tasseIrpef;
  }
}

const commerciante1 = new Commerciante(
  0.22,
  500000,
  0,
  0,
  1,
  "Rosario",
  "Scilipoti"
);

commerciante1.getTasseInps();
commerciante1.getTasseIrpef();

console.log(commerciante1);
console.log(
  `Il reddito annuo netto di ${commerciante1.name} ${
    commerciante1.surname
  } ammonta a ${commerciante1.getRedditoAnnuoNetto()}€`
);
