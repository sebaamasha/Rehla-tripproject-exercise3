import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

function TripCard({ trip }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);
  const favorite = favorites.some((item) => item.id === trip.id);

  function handleFavoriteClick() {
    if (favorite) {
      dispatch(removeFavorite(trip.id));
    } else {
      dispatch(addFavorite(trip));
    }
  }

  return (
    <article className="trip-card">
      <h3 className="trip-title">{trip.title}</h3>
      <p className="trip-location">{trip.location}</p>
      <p className="trip-description">{trip.description}</p>

      <button
        onClick={handleFavoriteClick}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {favorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </article>
  );
}

export default TripCard;
