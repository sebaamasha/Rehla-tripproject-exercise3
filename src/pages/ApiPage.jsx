import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

function ApiPage() {
  const { data, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  function handleFavorite(post) {
    const apiItem = { ...post, id: `api-${post.id}` };
    if (isFavorite(apiItem.id)) {
      dispatch(removeFavorite(apiItem.id));
    } else {
      dispatch(addFavorite(apiItem));
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>Stories from API</h1>

      <button onClick={refetch} disabled={loading}>
        {loading ? "Loading..." : "Refetch"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && data && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map((post) => (
            <li
                key={post.id}
                className="api-card"
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "12px",
                    marginTop: 12,
                }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              <button
                onClick={() => handleFavorite(post)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {isFavorite(`api-${post.id}`) ? "Remove Favorite" : "Add to Favorites"}

              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiPage;
