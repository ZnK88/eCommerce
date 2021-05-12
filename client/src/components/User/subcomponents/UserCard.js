import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { useStyles } from "../Styles";

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.background}>
        <Typography variant="h6" color="primary">
          Informations de votre compte
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container justify="space-around">
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Nom :
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography variant="body1" color="secondary">
              {user.nom || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Prénom :
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography variant="body1" color="secondary">
              {user.prenom || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Adresse e-mail :
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography variant="body1" color="secondary">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Addresse de livraison :
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" color="secondary">
              {user.adresse_de_livraison || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Addresse de livraison 2 :
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" color="secondary">
              {user.adresse_de_livraison_2 || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Addresse de livraison 3 :
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" color="secondary">
              {user.adresse_de_livraison_3 || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.bold}
            >
              Mode de paiement :
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography variant="body1" color="secondary">
              {user.information_de_facturation || "Non rempli"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.background}>
        <Button
          size="small"
          href={`/compte/editer/${user._id}`}
          className={classes.button}
        >
          <Typography variant="body1" color="primary">
            Modifier vos informations
          </Typography>
        </Button>
        <Button size="small" href={`compte/supprimer/${user._id}`}>
          <Typography variant="body1" color="primary">
            Supprimer votre compte
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
