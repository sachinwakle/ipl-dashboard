import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams } from "react-router-dom";
import { MatchDetailsCard } from "../components/MatchDetailsCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`
      );

      const matchData = await response.json();
      setTeam(matchData);
    })();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h2>Team not found</h2>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: team.totalMatches - team.totalWins,
              color: "#a34d5d",
            },
            { title: "Wins", value: team.totalWins, color: "#4da375" },
          ]}
        />
      </div>
      <div className="match-detail-section">
        <MatchDetailsCard match={team.matches[0]} teamName={team.teamName} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard
          key={match.date}
          match={match}
          teamName={team.teamName}
        />
      ))}
      <div className="more-section">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More &#187;
        </Link>
      </div>
    </div>
  );
};
