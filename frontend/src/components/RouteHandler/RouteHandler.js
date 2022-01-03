import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeScreen from "../HomeScreen/HomeScreen";
import Login from "../Login/Login";
import AdminScreen from "../AdminScreen/AdminScreen";
import CartScreen from "../CartScreen/CartScreen";
import AdminAdd from "../AdminScreen/AdminAdd/AdminAdd";
import AdminEdit from "../AdminScreen/AdminEdit/AdminEdit";

export default function RouteHandler(props) {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen
          products={props.products}
          addRemoveItem={props.addRemoveItem}
          cartItems={props.cartItems}
        />
      </Route>
      <Route exact path="/login">
        <Login
          username={props.username}
          handleLogin={props.handleLogin}
        />
      </Route>
      <Route exact path="/admin">
        <AdminScreen
          products={props.products}
        />
      </Route>
      <Route exact path="/cart">
        <CartScreen
          cartItems={props.cartItems}
          products={props.products}
          addRemoveItem={props.addRemoveItem}
          username={props.username}
          updateQuantity={props.updateQuantity}
        />
      </Route>
      <Route path="/admin/add">
        <AdminAdd
          products={props.products}
          addNewProduct={props.addNewProduct}
        />
      </Route>
      <Route path="/admin/edit/">
        <AdminEdit
          editProduct={props.editProduct}
        />
      </Route>
    </Switch>
  )
}