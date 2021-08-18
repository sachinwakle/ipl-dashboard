import React, { useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";
import "./HomePage.scss";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);

      const teamData = await response.json();
      setTeams(teamData);
    })();
  }, []);

  if (!teams) {
    return <h1>No Teams Available</h1>;
  }

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile teamName={team.teamName} key={team.id} />
        ))}
      </div>
    </div>
  );
};
