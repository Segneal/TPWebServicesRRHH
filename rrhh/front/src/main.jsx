import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={new QueryClient()}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
);
