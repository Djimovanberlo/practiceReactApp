import React from "react";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <LikeCounter />
        <LikeButton />
        <AwesomeAnimals />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
