import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { appRoutesObj } from "./app.paths";

const NotFoundPage = React.lazy(() => import('./pages/404'));
const ContactUsPage = React.lazy(() => import('./pages/user/contact-us-page'));
const AboutUsPage = React.lazy(() => import('./pages/user/about-us-page'));
const ContentPage = React.lazy(() => import('./pages/user/content-page'));
const AdvertisementPage = React.lazy(() => import('./pages/user/advertisement-page'));


const withSuspense = (WrappedComponent: JSX.Element) => {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      {WrappedComponent}
    </Suspense>
  );
};

export function AppRouting() {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            key="homepage"
            path={appRoutesObj.getBasePath()}
            element={withSuspense(<App />)}
          />

          <Route
            key="notDefined"
            path="*"
            element={withSuspense(<NotFoundPage />)}
          />

          <Route
            key="contactUs"
            path={appRoutesObj.getContactUsPagePath()}
            element={withSuspense(<ContactUsPage />)}
          />

          <Route
            key="AboutUsPage"
            path={appRoutesObj.getAboutUsPagePath()}
            element={withSuspense(<AboutUsPage />)}
          />

          <Route
            key="ContentPage"
            path={appRoutesObj.getContentPagePath()}
            element={withSuspense(<ContentPage />)}
          />

          <Route
            key="AdvertisementPage"
            path={appRoutesObj.getAdvertisementPagePath()}
            element={withSuspense(<AdvertisementPage />)}
          />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
