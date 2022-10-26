// definimos o objeto de investimento (ativos)
interface investObjeto {
  name: string;
  quant: string;
  valDin: string;
  valPor: string;
}

// cria uma lista de investObjeto
interface listOfInvectObjeto {
  investTotal: investObjeto[];
}

// definimos o objeto de rendimento
interface redimentoObjeto {
  valorTotalD: string;
  valorAplicadoD: string;
  rendTotalP: string;
}

// definimos a resposta completa do back
export interface invetimentoObjeto {
  investimentos: {
    investTotal: listOfInvectObjeto;
    rendTotal: redimentoObjeto;
  };
}
