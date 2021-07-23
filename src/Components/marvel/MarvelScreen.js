import React from "react";
import { HeroList } from "../Heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Comics</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
