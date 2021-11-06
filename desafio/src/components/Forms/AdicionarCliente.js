import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../../assets/images/logo.png";

const AdicionarClientes = ({ data, setData, setForm }) => {
  const [open, setOpen] = useState(true);
  const { register, handleSubmit } = useForm();
  let dados = [...data];
  const handleClose = () => {
    setOpen(false);
    setForm({ adicionar: false });
  };

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Container
          sx={{ backgroundColor: "white", padding: 5, marginTop: 8 }}
          component="div"
          maxWidth="xs"
        >
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" width="250" height="auto" />
            <Typography sx={{ marginTop: 1 }} component="h1" variant="h5">
              Adicionar Cliente
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit((data) => {
                setData([...dados, data]);
                handleClose();
              })}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <input
                    hidden
                    name="numero"
                    defaultValue={dados.length + 1}
                    {...register("numero", {
                      required: "Required",
                    })}
                  />
                  <TextField
                    autoComplete="given-name"
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    autoFocus
                    {...register("nome", {
                      required: "Required",
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    id="usinas"
                    label="Usina"
                    name="usinas"
                    defaultValue={1}
                    {...register("usinas", {
                      required: "Required",
                      min: 1,
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    id="porcentual"
                    label="% de Participação"
                    name="porcentual"
                    {...register("porcentual", {
                      required: "Required",
                      min: 1,
                      max: 100,
                    })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Adicionar Cliente
              </Button>
            </Box>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};

export default AdicionarClientes;
