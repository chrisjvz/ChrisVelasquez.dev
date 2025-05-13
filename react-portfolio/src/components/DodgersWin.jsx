import { useState, useEffect } from "react";
/*
 * DodgersWin component will async fetch dodgers latest game 
 * using the statsapi for MLB
 *
 * TODO: get yesterdays date and todays date
 *       win == true?
 *       game date == yesterday?
 *       stadium == dodger stadium?
 *       ALL conditions must be true for green button
 *       ELSE make it red and inactive
 */

// FIX: Consider moving all this to Data.jsx
const previousGames = 'https://statsapi.mlb.com/api/v1/teams/119?&hydrate=previousSchedule(team)&fields=teams,id,name,sport,id,previousGameSchedule,dates,date,games,teams,away,home,team,venue,isWinner,abbreviation,score'
const dodgerOpts = {
  hour12: true,
  timeZone: "America/Los_Angeles",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}

// MM/DD/YYYY
var todaysDate = new Date().toLocaleDateString("en-US", dodgerOpts);

const tmpGame = {
  venue: {
    name: "Venue loading...",
  },
  teams: {
    away: {
      team: {
        abbreviation: "LAD",
        name: "Away Team loading...",
      },
      score: "N/A",
    },
    home: {
      team: {
        abbreviation: "LAD",
        name: "Home Team loading...",
      },
      score: "N/A",
    },
  },
}

function DodgersWin() {
  const [gameData, setGameData] = useState(tmpGame);


  useEffect(() => {
    fetch(previousGames)
      .then(resp => resp.json())
      .then(jsonData => setGameData(jsonData.teams[0].previousGameSchedule.dates.at(-1)));

    return () => {
      console.log("goodbye cruel world");
    }
  }, []);

  const game = gameData?.games?.[0] ?? tmpGame;
  const gameDate = gameData?.date ?? "Date loading...";
  return (
    <div className="card border-2 md:row-span-3">
      <h2> DODGERSWIN @ PandaExpress Active?</h2>
      <div>
        <h3> Previous Game</h3>
        <h2> GAME DATE: {gameDate} </h2>
        <img src={`/public/logos/${game.teams.away.team.abbreviation}.svg`} alt="Team Logo" />
        <img src={`/public/logos/${game.teams.home.team.abbreviation}.svg`} alt="Team Logo" />
        <p> {game.teams.away.team.name} SCORE: {game.teams.away.score}</p>
        <br /> <p>Vs. {game.teams.home.team.name} SCORE: {game.teams.home.score}</p> <br />
        <h2> {game.venue.name} </h2>

        <ul>
          <li> Did the Dodgers win? </li>
          <li> Was the game at Dodger Stadium? </li>
          <li> Was the game played yesterday? </li>
        </ul>
        <div> DODGERSWIN ACTIVE </div>
      </div>
      {/* Testing mlb endpoint */}
      {console.log(game.teams.away.team.abbreviation)}
      {console.log(game.venue.name)}
      {console.log(game.teams.away.team.name)}
      {console.log(game.teams.home.team.name)}
      {console.log(game.teams.away.score)}
      {console.log(game.teams.home.score)}
      {console.log(gameData.date)}
    </div>
  );
}

export default DodgersWin
