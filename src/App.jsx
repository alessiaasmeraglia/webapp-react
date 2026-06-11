import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
