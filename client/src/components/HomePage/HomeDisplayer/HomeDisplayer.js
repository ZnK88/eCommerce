import React, { useState, useEffect } from "react";
import Axios from "axios";

const HomeDisplayer = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchArticles = async () => {
    const artURL = "http://localhost:5000/articles";

    Axios.get(artURL)
      .then((response) => {
        setArticles(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const fetchCategories = async () => {
    const catURL = "http://localhost:5000/categories";

    Axios.get(catURL)
      .then((response) => {
        setCategories(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  };

  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, []);

  return (
    <section>
      <div className="homepage-cat2">
        {categories.map((categorie) => {
          return (
            <div key={categorie._id} className="cat-indie">
              <h3>{categorie._id}</h3>
            </div>
          );
        })}
      </div>
      <div className="homepage-prod4">
        {articles.map((article) => {
          return (
            <div key={article._id} className="prod-indie">
              <h3>{article.nom}</h3>
              <h5>{article.categorie}</h5>
              <p>{article.description}</p>
              <h6>
                <b>{article.prix}</b>
              </h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeDisplayer;
