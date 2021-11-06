import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const paperStyles = {
  minWidth: 100,
  maxHeight: 150,
  padding: 1,
  textAlign: "center",
};

const EstatisticasChart = ({
  data,
  type,
  setReferencia,
  title,
  unit,
  label,
}) => {
  let referencia = {
    referenciaX: data,
    referenciaY: type(data),
  };

  const handleClick = () => {
    setReferencia(referencia);

    label(title);
  };

  return (
    <Paper sx={paperStyles} elevation={3}>
      <Typography variant="h6" component="p">
        {title}
      </Typography>

      <Typography variant="h6" component="p" color="primary.main">
        {`${type(data).toFixed(3)}${unit}`}
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        Mostrar no Grafico
      </Button>
    </Paper>
  );
};

export default EstatisticasChart;
