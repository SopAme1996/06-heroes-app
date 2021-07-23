import React from "react";
import { HeroList } from "../Heroes/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>Dc Comics</h1>
      <HeroList publisher="DC Comics" />
    </div>
  );
};
