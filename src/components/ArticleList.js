// src/components/ArticleList.js
import React, { useState } from "react";
import ArticleCard from "./ArticleCard";

const all_Articles = [
  {
    id: 1,
    title: "What is React all about?",
    body:
      "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
  },
  {
    id: 2,
    title: "A lovely kid",
    body: "In fact, a kid is also the name of a baby goat!",
  },
  {
    id: 3,
    title: "On placeholder image URLs",
    body:
      "So yeah, you won't be able to look these images up. They're placeholders",
  },
];

const ArticleList = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHide = () => {
    setHidden(!hidden);
  };

  const articleCards = all_Articles.map((article, index) => (
    <ArticleCard
      number={index + 1}
      title={article.title}
      content={article.body}
    />
  ));

  const buttonText = hidden ? "Show articles" : "Hide articles";

  return (
    <div>
      <button onClick={toggleHide}>{buttonText}</button>
      {!hidden && articleCards}
    </div>
  );
};

export default ArticleList;
