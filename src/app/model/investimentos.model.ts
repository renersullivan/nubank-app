export interface investResponse {
  name: string;
  quant: string;
  valDin: string;
  valPor: string;
}

export interface rendTotal {
  valorTotalD: string;
  valorAplicadoD: string;
  rendTotalP: string;
}

export interface investimentos {
  investTotal: investResponse[];
  rendTotal: rendTotal;
}
