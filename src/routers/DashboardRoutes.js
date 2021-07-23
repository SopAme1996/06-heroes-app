import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen } from "../Components/dc/DcScreen";
import { HeroesScreen } from "../Components/Heroes/HeroesScreen";
import { MarvelScreen } from "../Components/marvel/MarvelScreen";
import { SearchScreen } from "../Components/search/SearchScreen";
import { Navbar } from "../Components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/hero/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
