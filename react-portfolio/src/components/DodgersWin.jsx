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
      <div className="grid justify-items-center gap-y-2">
        <h3 > Previous Game</h3>
        <h2> {game.venue.name} </h2>
        {/* replace with game date */}
        <h2> January 11th, 2025 </h2>
        <LogoKeeper
          awayLogo={`/logos/${game.teams.away.team.abbreviation}.svg`}
          homeLogo={`/logos/${game.teams.home.team.abbreviation}.svg`}
        />
        <Scorekeeper
          homeScore={game.teams.away.score}
          awayScore={game.teams.home.score}
          // Check whether or not to style scorecolor as blue for dodgers
          dodgersHome={game.teams.home.team.id === 119}
        />

        <CouponConditions />

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

/* Containing div for game score */
function Scorekeeper({ homeScore, awayScore, dodgersHome }) {
  const colorVariant = {
    true: "bg-[#005A9C]",
    false: "bg-neutral-700",
  }
  return (
    // Assign dodgers color to score box depending on whether or not they are the home team
    <div className="flex-row inline-flex w-full justify-around ">
      <div className={`${colorVariant[!dodgersHome]} border-1 rounded-lg p-2`}> <p className="text-5xl text-[#FFFFFF]"> {awayScore} </p></div>
      <div className={`${colorVariant[dodgersHome]} border-1 rounded-lg p-2`}><p className="text-5xl text-[#FFFFFF]"> {homeScore} </p></div>
    </div>
  );
}

/* Dynamically assigns svg based on the team abbreviations */
function LogoKeeper({ homeLogo, awayLogo }) {
  return (
    <div className="flex flex-row size-full justify-around py-5">
      {/* <h1 className="text-xl"> @ </h1> */}
      <img src={awayLogo} alt="Away Logo" className="w-24 h-24 " />
      <img src={homeLogo} alt="Home Logo" className="w-24 h-24 " />
    </div>
  );

}

function CouponConditions() {
  return (
    <div className="text-center">
      <div> Dodger win? </div>
      <div> Home? </div>
      <div> Yesterday? </div>
      <div className="bg-emerald-400 text-black"> DODGERSWIN ACTIVE </div>
    </div >
  )
}
export default DodgersWin
