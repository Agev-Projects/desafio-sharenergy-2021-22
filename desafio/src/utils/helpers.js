/* Formatação de horas decimais */
export const formatoHora = (numero) => {
  let tempo = new Date(0, 0);
  tempo.setMinutes(numero * 60);

  return tempo.toTimeString().slice(0, 5);
};

/*Formatação de Moeda */
export const formatoMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/*Calculo da Energia Total Produzida no Dia*/
export const energiaTotalProduzida = ({ tempo, potencia }) => {
  const deltaTempo = [];
  const valorDaEnergia = 0.95;
  let energia = 0;

  for (let i = 0; i < tempo.length - 1; i++) {
    let deltaT = tempo[i + 1] - tempo[i];

    deltaTempo.push(deltaT * potencia[i]);
  }

  energia = deltaTempo.reduce((prev, current) => prev + current, 0);

  return {
    energiaTotal: energia,
    retornoFinanceiro: energia * valorDaEnergia,
  };
};
