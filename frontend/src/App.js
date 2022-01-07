import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";
import AdminScreen from "./components/AdminScreen/AdminScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import AdminAdd from "./components/AdminScreen/AdminAdd/AdminAdd"
import AdminEdit from "./components/AdminScreen/AdminEdit/AdminEdit";
import { ProductProvider } from "./components/Context/ProductContext";
import { UserProvider } from "./components/Context/UserContext";
import { CartProvider } from "./components/Context/CartContext";

export default function App() {

  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <div className="background">
              <NavigationBar />
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/admin" component={AdminScreen} />
                <Route exact path="/admin/add" component={AdminAdd} />
                <Route path="/admin/edit/" component={AdminEdit} />
                <Route exact path="/cart" component={CartScreen} />
              </Switch>
            </div>
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  )
}