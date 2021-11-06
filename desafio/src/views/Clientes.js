import dadosClientes from "../dados/dadosClientes.json";
import dadosExtraidos from "../dados/dadosExtraidos";
import { energiaTotalProduzida, formatoMoeda } from "../utils/helpers.js";
import MUIDataTable from "mui-datatables";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditarClientes from "../components/Forms/EditarClientes";
import AdicionarClientes from "../components/Forms/AdicionarCliente";

const dados = dadosClientes.map((item) => {
  return {
    numero: item.numeroCliente,
    nome: item.nomeCliente,
    usinas: item.usinas[0].usinaId,
    porcentual: item.usinas[0].percentualDeParticipacao,
  };
});

const Clientes = () => {
  const [data, setData] = useState(dados);
  const [form, setForm] = useState({ show: false, index: 0 });

  const columns = [
    {
      name: "numero",
      label: "Numero",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "nome",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "usinas",
      label: "Usinas",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "porcentual",
      label: "% de Participação",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "retorno",
      label: "Retorno Financeiro",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite(dataIndex) {
          return `${formatoMoeda.format(
            (energiaTotalProduzida(dadosExtraidos).retornoFinanceiro *
              data[dataIndex].porcentual) /
              100
          )}`;
        },
      },
    },
    {
      name: "açoes",
      label: "Açoes",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite(dataIndex, rowIndex) {
          return (
            <div>
              <IconButton>
                <EditIcon
                  color="primary"
                  onClick={() =>
                    setForm({
                      editar: true,
                      index: dataIndex,
                      adicionar: false,
                    })
                  }
                />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  color="primary"
                  onClick={() =>
                    setData(
                      data.filter((item) => {
                        console.log(dataIndex);
                        return item.numero !== data[dataIndex].numero;
                      })
                    )
                  }
                />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    print: false,
    selectableRowsHideCheckboxes: true,
  };

  return (
    <Container>
      <h2>Clientes</h2>
      <MUIDataTable
        select
        title={"Lista de Clientes"}
        data={data}
        columns={columns}
        options={options}
      />

      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2 }}
        onClick={() => setForm({ editar: false, adicionar: true })}
      >
        Adicionar Cliente
      </Button>

      {form.editar && (
        <EditarClientes
          data={data}
          setData={setData}
          index={form.index}
          setForm={setForm}
        />
      )}
      {form.adicionar && (
        <AdicionarClientes data={data} setData={setData} setForm={setForm} />
      )}
    </Container>
  );
};

export default Clientes;
