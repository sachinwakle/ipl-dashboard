import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}/matches?year=${year}`
      );

      const matchData = await response.json();
      setMatches(matchData);
    })();
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select Year</h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.map((match) => (
          <MatchDetailsCard
            key={match.date}
            match={match}
            teamName={teamName}
          />
        ))}
      </div>
    </div>
  );
};
