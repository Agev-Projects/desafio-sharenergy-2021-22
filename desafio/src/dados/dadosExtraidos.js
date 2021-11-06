import dadosUsina from "../dados/dadosUsina.json";

/*Separação dos dados da Usina */
const dadosExtraidos = {
  tempo: [],
  potencia: [],
  corrente: [],
  tensao: [],
  temperatura: [],
};

dadosUsina.map((item) => {
  dadosExtraidos.tempo.push(item.tempo_h);
  dadosExtraidos.potencia.push(item.potencia_kW);
  dadosExtraidos.corrente.push(item.corrente_A);
  dadosExtraidos.tensao.push(item.tensao_V);
  dadosExtraidos.temperatura.push(item.temperatura_C);

  return true;
});

export default dadosExtraidos;
