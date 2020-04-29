// src/components/LikeCounter.js
import React, { useState } from "react"; // <- note the added import of useState

export default function AwesomeAnimals() {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <p>
              Awersomeness level {index + 1}: {animal}
            </p>
          );
        }
      )}
    </div>
  );
}
