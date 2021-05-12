import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Members from "./Members/Members";
import Products from "./Products/Products";
import Reports from "./Reports/Reports";
import AddProductForm from "./Products/product-forms/AddProductForm";
import ProductDetails from "./Products/ProductDetails";
import EditProductForm from "./Products/product-forms/EditProductForm";
import DeleteProduct from './Products/product-forms/DeleteProduct';
import AddProductEvent from "./Products/product-forms/AddProductEvent";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin/articles" component={Products} />
          <Route
            exact
            path="/admin/articles/ajouter"
            component={AddProductForm}
          />
          <Route exact path="/admin/articles/editer/:id" component={EditProductForm} />
          <Route exact path="/admin/articles/supprimer/:id" component={DeleteProduct} />
          <Route exact path="/admin/articles/evenement/:id" component={AddProductEvent} />
          <Route path="/admin/articles/:id" component={ProductDetails} />
          <Route path="/admin/membres" component={Members} />
          <Route path="/admin/rapports" component={Reports} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Main;
