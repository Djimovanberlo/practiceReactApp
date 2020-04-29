// src/components/LikeButton.js
import React, { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  let initialLike = false;
  const [likeStatus, setLike] = useState(initialLike); // <- using state!
  const increment = () => {
    setLike(!likeStatus);
    return likeStatus;
  };

  const likeText = () => {
    if (likeStatus === true) {
      return "You've liked this. Click to unlike";
    } else if (likeStatus === false) {
      return "Like this";
    }
  };

  return (
    <div>
      <p>
        <button onClick={increment}>{likeText()}</button>
      </p>
    </div>
  );
}
