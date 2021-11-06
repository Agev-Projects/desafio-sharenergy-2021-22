import { Fragment } from "react";
import DadosCard from "./DadosCard";
import { energiaTotalProduzida } from "../../utils/helpers.js";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const EnergiaTotalCard = ({ data }) => {
  return (
    <Fragment>
      <DadosCard
        title="Energia Total Produzida"
        content={`${energiaTotalProduzida(data).energiaTotal.toFixed(2)}kWh`}
        icon={<WbSunnyIcon />}
        color="primary"
      />
    </Fragment>
  );
};

export default EnergiaTotalCard;
