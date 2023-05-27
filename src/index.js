import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { apiClientFactory } from "./shared/ApiClientFactory";
import { clientInstance } from "./shared/AxisoClient";
import { serviceFactory } from "./services/ServiceFactory";
import { DependencyProvider } from "./shared/context/DependencyContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/context/AuthContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const apiClient = apiClientFactory(clientInstance);
const services = serviceFactory(apiClient);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DependencyProvider services={services}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </DependencyProvider>
  </React.StrictMode>
);
reportWebVitals();
