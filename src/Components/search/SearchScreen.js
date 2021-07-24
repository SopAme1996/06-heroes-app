import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { UseForm } from "../../Hook/UseForm";
import { HeroeCard } from "../Heroes/HeroeCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { value, handleChange } = UseForm({
    search: q,
  });

  const { search } = value;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  const hereoFilter = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div>
      <h1>Search SCREEN</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              onChange={handleChange}
              value={search}
            />

            <button type="submit" className="btn btn-block btn-outline-primary">
              Search.....
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            hereoFilter.length > 0 ? hereoFilter.map((heroe) => {
              return <HeroeCard key={heroe.id} {...heroe} />;
            }) : <h3>El heroe no existe en nuestra base de datos</h3>
          }
        </div>
      </div>
    </div>
  );
};
