export interface homeResponse {
  imgPer: string;
  saldoCli: string;
  fatAtual: string;
  limiteDisp: string;
  msgWelcome: string;
}

export interface listOfHomeResponse {
  result: [homeResponse];
}
