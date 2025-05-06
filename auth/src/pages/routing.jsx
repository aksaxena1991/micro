import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../../common-components/page-elements/layout";
import { useAuth } from "../hooks/useAuth";
import Checkout from "./checkout/Checkout";
import Login from "./login/login";
import Registration from "./registration/Registration";
import Subscriptions from "./subscriptions/Subscriptions";
const AuthRouting = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Fragment>
      <Layout>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        ) : (
          <Navigate to="/erp" />
        )}
      </Layout>
    </Fragment>
  );
};
export default AuthRouting;
