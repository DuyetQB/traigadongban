import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoadingSnipper from "components/LoadingSpinner";
const HomePage = lazy(() => import("containers/HomePage"));
const LoginPage = lazy(() => import("containers/LoginPage"));
const RegisterPage = lazy(() => import("containers/RegisterPage"));
const AboutUsPage = lazy(() => import("containers/AboutUs"));
const SupportPage = lazy(() => import("containers/Support"));
const ArticlePostDetailsPage = lazy(() =>
  import("containers/ArticlePostDetails")
);
const ArticlePage = lazy(() => import("containers/Article"));
const ErrorPage = lazy(() => import("containers/ErrorPage"));
const AdminPage = lazy(() => import("containers/Admin"));
const CartPage = lazy(() => import("containers/Cart"));

const index = () => {
  return (
    <>
      <Suspense fallback={<LoadingSnipper />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about-us" element={<AboutUsPage />} />

            <Route
              exact
              path="/admin"
              element={
                localStorage.getItem("accessToken") ? (
                  <AdminPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/support" element={<SupportPage />} />
            <Route exact path="/article" element={<ArticlePage />} />
            <Route
              path="/article/:userId"
              element={<ArticlePostDetailsPage />}
            />
            <Route exact path="/cart" element={<CartPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};
export default index;
