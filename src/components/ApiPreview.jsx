import useFetch from "../hooks/useFetch";

function ApiPreview() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

  return (
    <div style={{ marginTop: 20 }}>
      <h2>API Preview</h2>
      {loading && <p>Loading preview...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <ul>
          {data.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiPreview;
