import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { theme } from "./configs";
import { Home, NotFound, ProductDetail } from "./pages";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
