"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      👍 Curtir ({likes})
    </button>
  );
}
