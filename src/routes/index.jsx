import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSnipper from "components/LoadingSpinner";
const HomePage = lazy(() => import("containers/HomePage"));
const LoginPage = lazy(() => import("containers/LoginPage"));
const RegisterPage = lazy(() => import("containers/RegisterPage"));
const AboutUsPage = lazy(() => import("containers/AboutUs"));

const index = () => {
  return (
    <>
      <Suspense fallback={<LoadingSnipper />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about-us" element={<AboutUsPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};
export default index;
