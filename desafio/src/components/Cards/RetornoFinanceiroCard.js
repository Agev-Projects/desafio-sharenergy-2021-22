import { Fragment } from "react";
import DadosCard from "./DadosCard";
import { energiaTotalProduzida, formatoMoeda } from "../../utils/helpers.js";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const RetornoFinanceiroCard = ({ data }) => {
  return (
    <Fragment>
      <DadosCard
        title="Rendimento Total Gerado"
        content={`${formatoMoeda.format(
          energiaTotalProduzida(data).retornoFinanceiro.toFixed(2)
        )}`}
        icon={<AttachMoneyIcon />}
        color="primary"
      />
    </Fragment>
  );
};

export default RetornoFinanceiroCard;
