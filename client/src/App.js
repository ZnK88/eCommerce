import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/HomePage/Home";
import AllCategories from "./components/HomePage/Categories/AllCategories";
import CategoryDetails from "./components/HomePage/Categories/CategoryDetails";
import AllArticles from "./components/HomePage/Articles/AllArticles";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./components/HomePage/Cart/Cart";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/auth/AdminLogin";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import UserAccount from "./components/User/UserAccount";
import EditUserForm from './components/User/EditUserForm';
import DeleteUser from './components/User/DeleteUser';
import Order from './components/Order/Order';
import OrderUser from "./components/Order/OrderUser";
import GuestOrder from "./components/Order/GuestOrder";
import GuestAccount from "./components/Order/GuestAccount";
import OrderPaymentRecap from './components/Order/OrderPaymentRecap';
import GuestValidation from "./components/Order/GuestValidation";
import OrderValidation from './components/Order/OrderValidation';
import UserOrderDetails from "./components/User/subcomponents/UserOrderDetails";


const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={AllCategories} />
        <Route path="/categories/:name" component={CategoryDetails} />
        <Route exact path="/articles" component={AllArticles} />
        <Route path="/articles/:id" component={ProductPage} />
        <Route path="/panier" component={Cart} />
        <Route path="/admin" component={Admin} />
        <Route path="/login/admin" component={AdminLogin} />
        <Route exact path="/inscription" component={Register} />
        <Route path="/connexion" component={Login} />
        <Route exact path="/compte" component={UserAccount} />
        <Route path="/compte/editer/:id" component={EditUserForm} />
        <Route path="/compte/supprimer/:id" component={DeleteUser} />
        <Route exact path="/commande" component={Order} />
        <Route exact path="/information" component={OrderUser} />
        <Route exact path="/invite" component={GuestOrder} />
        <Route path="/compte/invite" component={GuestAccount} />
        <Route path="/information/paiement" component={OrderPaymentRecap} />
        <Route path="/validation" component={GuestValidation} />
        <Route path="/commande/:id" component={OrderValidation} />
        <Route path="/compte/commande/:id" component={UserOrderDetails} />
      </Router>
    </div>
  );
};

export default App;
