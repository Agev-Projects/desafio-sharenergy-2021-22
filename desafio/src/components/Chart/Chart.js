import { Fragment, useState } from "react";
import {
  LineChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import EstatisticasChart from "./EstatisticasChart.js";
import dadosExtraidos from "../../dados/dadosExtraidos.js";
import { formatoHora } from "../../utils/helpers.js";
import {
  min,
  max,
  mean,
  mode,
  variance,
  standardDeviation,
} from "simple-statistics";

const Chart = ({ data, type }) => {
  const [referencia, setReferencia] = useState(false);
  const [label, setLabel] = useState("");
  return (
    <Fragment>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="tempo_h"
            tickFormatter={(numero) => `${formatoHora(numero)}h`}
            tickMargin={5}
          />
          <YAxis unit={type.unit} padding={{ bottom: 5 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={type.dataKey}
            stroke="#009688"
            dot={false}
          />
          {referencia && (
            <ReferenceLine
              y={referencia.referenciaY}
              label={label}
              stroke="red"
            />
          )}
          {referencia && (
            <ReferenceLine
              x={
                dadosExtraidos.tempo[
                  referencia.referenciaX.indexOf(referencia.referenciaY)
                ]
              }
              stroke="red"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: { xs: "0", md: "15%" },
          marginTop: "1em",
        }}
      >
        <Stack
          sx={{ marginBottom: 5 }}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={min}
            title="Mínimo"
            unit={type.unit}
            label={setLabel}
          />
          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={max}
            title="Máximo"
            unit={type.unit}
            label={setLabel}
          />

          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={mean}
            title="Média"
            unit={type.unit}
            label={setLabel}
          />
        </Stack>
        <Stack
          sx={{ marginBottom: 5 }}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={mode}
            title="Moda"
            unit={type.unit}
            label={setLabel}
          />
          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={variance}
            title="Variância"
            unit={type.unit}
            label={setLabel}
          />
          <EstatisticasChart
            data={dadosExtraidos[type.referencia]}
            setReferencia={setReferencia}
            type={standardDeviation}
            title="Desvio-Padrão"
            unit={type.unit}
            label={setLabel}
          />
        </Stack>
      </Box>
    </Fragment>
  );
};

export default Chart;
