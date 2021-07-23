import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="card-columns">
      {heroes.map((heroe) => {
        return <HeroeCard key={heroe.id} {...heroe} />;
      })}
    </div>
  );
};
