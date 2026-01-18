import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, clearFavorites } from "../redux/favoritesSlice";
import useLocalStorage from "../hooks/useLocalStorage";


function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const [theme] = useLocalStorage("rehla_theme", "light");
  const isDark = theme === "dark";

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>My Favorites</h1>
      <p>Saved stories from Home and API.</p>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.length > 0 && (
        <>
          <button
            onClick={() => dispatch(clearFavorites())}
            style={{
              marginTop: 10,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              background: "#fff",
            }}
          >
            Clear All
          </button>

          <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
            {favorites.map((item) => (
              <li
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: isDark ? "#111827" : "#ffffff",
                  borderColor: isDark ? "#374151" : "#ccc",
                  color: isDark ? "#e5e7eb" : "#111",

                }}
              >
                <h3>{item.title || "No title"}</h3>

                {item.location && <p style={{ fontWeight: 600 }}>{item.location}</p>}

                <p>{item.description || item.body}</p>

                <button
                  onClick={() => dispatch(removeFavorite(item.id))}
                  style={{
                    marginTop: "10px",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    background: "#fff",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default FavoritesPage;
