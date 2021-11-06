import { useState } from "react";
import dadosUsina from "../dados/dadosUsina.json";
import dadosExtraidos from "../dados/dadosExtraidos.js";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EnergiaTotalCard from "../components/Cards/EnergiaTotalCard.js";
import RetornoFinanceiroCard from "../components/Cards/RetornoFinanceiroCard.js";
import Chart from "../components/Chart/Chart.js";
import variavelInteresse from "../utils/variavelInteresse.js";
import Zoom from "@mui/material/Zoom";
import { useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const [dadosGrafico, setDadosGrafico] = useState(variavelInteresse.tensao);
  const matches = useMediaQuery("(min-width:900px)");

  const handleActive = (params) => {
    const style = {
      backgroundColor: "primary.dark",
    };

    if (dadosGrafico === params) {
      return style;
    }

    return {};
  };

  return (
    <Container component="main">
      <h1>Resumo Usina </h1>
      <Zoom in style={{ transitionDelay: "200ms" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <EnergiaTotalCard data={dadosExtraidos} />
          </Grid>
          <Grid item xs={12} md={3}>
            <RetornoFinanceiroCard data={dadosExtraidos} />
          </Grid>
        </Grid>
      </Zoom>

      <div style={{ marginTop: "4em" }}>
        <ButtonGroup
          variant="contained"
          size="large"
          orientation={matches ? "horizontal" : "vertical"}
          sx={{ marginBottom: 2, marginLeft: { xs: "0", md: "20%" } }}
        >
          <Button
            sx={handleActive(variavelInteresse.tensao)}
            onClick={() => setDadosGrafico(variavelInteresse.tensao)}
          >
            Tensão (V)
          </Button>
          <Button
            sx={handleActive(variavelInteresse.corrente)}
            onClick={() => setDadosGrafico(variavelInteresse.corrente)}
          >
            Corrente (A)
          </Button>
          <Button
            sx={handleActive(variavelInteresse.potencia)}
            onClick={() => setDadosGrafico(variavelInteresse.potencia)}
          >
            Potência (kW)
          </Button>
          <Button
            sx={handleActive(variavelInteresse.temperatura)}
            onClick={() => setDadosGrafico(variavelInteresse.temperatura)}
          >
            Temperatura (ºC)
          </Button>
        </ButtonGroup>
        <Chart data={dadosUsina} type={dadosGrafico} />
      </div>
    </Container>
  );
};

export default Dashboard;
