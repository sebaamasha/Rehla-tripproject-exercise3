import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import { useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { useSelector } from "react-redux";


function App() {
  const [theme, setTheme] = useLocalStorage("rehla_theme", "light");
  const favoritesCount = useSelector((state) => state.favorites.items.length);
  
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`app ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <header className="main-header">
        <div className="logo">Rehla</div>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/api">API Page</Link>
          <Link to="/favorites">Favorites ({favoritesCount})</Link>
        </nav>
        <button onClick={toggleTheme} className="theme-btn">
          Theme: {theme}
        </button>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
