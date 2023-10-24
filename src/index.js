import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import AppContextProvider from "./Context/AppContext";

const supabase = createClient(
  "https://smdmqozlkhtlmkucwalf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZG1xb3psa2h0bG1rdWN3YWxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NzMzMjUsImV4cCI6MTk5NzA0OTMyNX0.qOW7-LFyjaGwfoKqz-ZruC36ECJfpssyP7ePBfgcEb4"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
  </AppContextProvider>
);
