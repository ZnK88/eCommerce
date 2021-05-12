import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 50,
  },
  container: {
    marginTop: 20,
  },
});

const Members = () => {
  const classes = useStyles();
  const [clientsList, setClientsList] = useState([]);
  const [columnsList, setColumnsList] = useState([
    { title: "Nom", field: "nom" },
    { title: "Prénom", field: "prenom" },
    { title: "Email", field: "email" },
    { title: "Adresse de livraison principale", field: "adresse_de_livraison" },
  ]);

  useEffect(() => {
    let token = localStorage.getItem("tokenAdmin");
    Axios.get(`http://localhost:5000/admin/membres/list`, {
      headers: {
        token: token,
      },
    })
      .then((response) => {
        setClientsList(response.data);
      })
      .catch((error) => {
        //A faire
      });
  }, []);

  return (
    <Box className={classes.container}>
      <MaterialTable
        title="Liste des membres"
        columns={columnsList}
        data={clientsList}
        options={{
          exportButton: true,
          exportAllData: true,
        }}
      />
    </Box>
  );
};

export default Members;
