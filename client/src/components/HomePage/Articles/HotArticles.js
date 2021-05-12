import React, { useEffect, useState } from "react";
import Axios from "axios";

import { useStyles } from "./ArticlesStyles";
import ProductIcon from "../../../assets/temp-icon/product.png";
import AddToCartButton from "../Cart/AddToCartButton";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const Articles = () => {
  const classes = useStyles();

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const apiURL = "http://localhost:5000/filtres/populaires";
    const result = await Axios.get(apiURL);
    setArticles(result.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={classes.overline}>
      <Typography variant="h5" color="primary" className={classes.text}>
        Articles les + populaires
      </Typography>
      <div className={classes.wrapper}>
        {articles.map((article, index) => {
          return (
            <Card className={classes.container} key={index}>
              <CardActionArea
                href={`/articles/${article._id}`}
                className={classes.actionsArea}
              >
                <CardMedia
                  className={classes.media}
                  image={article.convertedImg || ProductIcon}
                  title={article.nom}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" color="secondary">
                    {article.nom}
                  </Typography>
                  <Typography gutterBottom variant="h5" color="secondary">
                    {article.prix} €
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <AddToCartButton item={article} />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
