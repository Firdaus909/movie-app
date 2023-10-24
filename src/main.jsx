import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      components: {
        Tag: {
          colorPrimary: "#EB507F",
          colorPrimaryActive: "#E53067",
          colorPrimaryHover: "#F2759B",
        },
        Pagination: {
          itemActiveBg: "#FE024E",
          colorPrimary: "#ffffff",
          colorPrimaryHover: "#ffffff",
          colorPrimaryActive: "#ffffff",
        }
      },
    }}>
    <App />
  </ConfigProvider>
);
