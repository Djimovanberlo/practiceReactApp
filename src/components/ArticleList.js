// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
// import Timeout from "await-timeout";
import axios from "axios";
import Timeout, { set } from "await-timeout";

const ArticleList = () => {
  const [hidden, setHidden] = useState(false);
  const [articles, set_articles] = useState();

  useEffect(() => {
    const doSomeDataFetching = async () => {
      console.log("I'm gonna fetch some data!");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      await Timeout.set(3000);
      console.log("Got back:", response);
      console.log("articles");
      set_articles(response.data);
      console.log("Again articles?");
    };
    doSomeDataFetching();
  }, []);

  const toggleHide = () => {
    setHidden(!hidden);
  };

  const articleCards = articles ? (
    articles.map((article, index) => (
      <ArticleCard
        number={index + 1}
        title={article.title}
        content={article.body}
      />
    ))
  ) : (
    <p>loading...</p>
  );

  const buttonText = hidden ? "Show articles" : "Hide articles";

  return (
    <div>
      <button onClick={toggleHide}>{buttonText}</button>
      {!hidden && articleCards}
    </div>
  );
};

export default ArticleList;
