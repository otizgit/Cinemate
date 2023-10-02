import React from "react";
import { Link } from "react-router-dom";

export default function MovieExtraLinks(props) {
  return props.results.production_companies || props.keywords ? (
    <div className="flex gap-12 lg:flex-row flex-col movie-margin padding">
      {props.results.production_companies ? (
        <div className="flex-1">
          {props.results.production_companies.length ? (
            <h2 className="font-sans text-white text-[1.5rem] mb-2 tracking-wider">
              Production Companies
            </h2>
          ) : null}
          {/*!THIS SHOULD LINK TO THE COMPANIES */}
          <div className="flex gap-4 flex-wrap">
            {props.results.production_companies.map((company) => {
              return (
                <Link
                  to={`/company/${company.name}/${company.id}`}
                  key={company.id}
                  className="py-1 px-3 rounded-lg border-2 border-primary w-[fit-content] flex"
                >
                  <p className="custom-fz text-priText-300 font-medium">
                    {company.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
      {props.keywords ? (
        <div className="flex-1">
          {props.keywords.length ? (
            <h2 className="font-sans text-white text-[1.5rem] mb-6 tracking-wider">
              Keywords
            </h2>
          ) : null}
          <div className="flex gap-4 flex-wrap">
            {props.keywords.map((movieKeyword) => {
              return (
                <Link
                  key={movieKeyword.id}
                  className="py-1 px-3 rounded-lg border-2 border-primary w-[fit-content] flex"
                >
                  <p className="custom-fz text-priText-300 font-medium">
                    {movieKeyword.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}