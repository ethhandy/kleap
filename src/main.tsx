import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
  // logger: {
  //   log: console.log,
  //   warn: console.warn,
  //   // ✅ no more errors on the console for tests
  //   error: console.error,
  // },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer
        theme="dark"
        position="top-right"
        hideProgressBar={false}
        transition={Zoom}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
