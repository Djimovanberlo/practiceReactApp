// src/components/LikeCounter.js
import React, { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  console.log("a render");
  useEffect(() => {
    console.log("the usedEffect action!");
  }, [numLikes]);

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  const reset = () => {
    set_numLikes(numLikes - numLikes);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
