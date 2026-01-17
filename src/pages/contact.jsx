import { useEffect, useState } from "react";

const API_URL = window.__ENV__?.VITE_API_URL || import.meta.env.VITE_API_URL;

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Posts from API
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
