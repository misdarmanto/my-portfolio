import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound404";
import Layout from "./layouts";
import { ContextApi } from "./lib/helper/ContextApi";

function App() {
  const [isChangeMode, setIsChangeMode] = useState(false);
  
  return (
    <ContextApi.Provider value={{ isChangeMode, setIsChangeMode }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextApi.Provider>
  );
}

export default App;
