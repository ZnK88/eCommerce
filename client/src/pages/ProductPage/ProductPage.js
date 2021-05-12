import React, { useEffect, useState } from "react";
import Axios from "axios";

import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/Search/SearchForm";
import Slider from "../../components/ProductPage/Infos/Slider";
import Titling from "../../components/ProductPage/Infos/Title";
import ProductModel from "../../components/ProductPage/Dynamic/Model";
import Price from "../../components/ProductPage/Dynamic/Price";
import Description from "../../components/ProductPage/Infos/Description";
import Quantity from "../../components/ProductPage/Dynamic/Quantity";
import Stocks from "../../components/ProductPage/Dynamic/Stocks";
import Footer from "../../components/HomePage/Footer/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ClassIcon from "@material-ui/icons/Class";
import HomeIcon from "@material-ui/icons/Home";

import { useStyles } from "./Styles/ProductStyles";
import AddToCartButton from "../../components/HomePage/Cart/AddToCartButton";

const ProductPage = ({ match }) => {
  const [article, setArticle] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const apiURL = `http://localhost:5000/articles/${match.params.id}`;
      const result = await Axios.get(apiURL);
      setArticle(result.data);
      setName(result.data.nom);
    };

    fetchArticle();

    const IncrementPopularity = async () => {
      await Axios.post(`http://localhost:5000/articles/${match.params.id}/up`);
    };

    IncrementPopularity();
  }, [match.params.id]);

  const classes = useStyles();

  return (
    <>
      {/* HEADER */}
      <Grid container justify="space-evenly">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Header />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.overline}>
          <Breadcrumbs className={classes.breadcrumbs} color="primary">
            <Link href="/" className={classes.flex} color="secondary">
              <HomeIcon className={classes.smallIcon} />
              <Typography variant="body1" color="primary">
                Accueil
              </Typography>
            </Link>
            <Link href="/articles" className={classes.flex} color="secondary">
              <ClassIcon className={classes.smallIcon} />
              <Typography variant="body1" color="primary">
                Articles
              </Typography>
            </Link>
            <Link
              href={`/articles/${match.params.id}`}
              className={classes.flex}
              color="secondary"
            >
              <LocationOnIcon className={classes.smallIcon} />
              <Typography variant="body1" color="primary">
                {name}
              </Typography>
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <SearchForm />
        </Grid>
      </Grid>
      {/* MAIN */}
      {/* Ariane */}
      <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
      {/* Images/Slider */}
      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Slider article={article} />
        </Grid>
      </Grid>
      {/* Add to cart */}
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <AddToCartButton item={article} />
      </Grid>
      {/* ProductModel / Quantity  Bloc + Price */}
      <Grid container>
        <Grid
          item
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className={classes.containerSlim}
        >
          <ProductModel article={article} />
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className={classes.containerSlim}
        >
          <Quantity article={article} />
        </Grid>

        <Grid
          item
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className={classes.containerSlim}
        >
          <Price article={article} />
        </Grid>
      </Grid>

      {/* Title */}
      <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Titling article={article} />
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sm={2}
          xs={2}
          className={classes.containerSlim}
        >
          <Stocks article={article} />
        </Grid>
      </Grid>

      {/* Desciption + Category */}
      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Description article={article} />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default ProductPage;
