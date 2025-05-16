import { useState, useEffect } from "react";

import CheckmarkSvg from "../assets/svgs/checkmark.svg?react";
import XmarkSvg from "../assets/svgs/x.svg?react";
/*
 * DodgersWin component will async fetch dodgers latest game 
 * using the statsapi for MLB
 *
 * TODO:
 *       ALL conditions must be true for green button
 *       ELSE make it red and inactive
 */

// FIX: Consider moving all this to Data.jsx
const previousGames = 'https://statsapi.mlb.com/api/v1/teams/119?&hydrate=previousSchedule(team)&fields=teams,id,name,sport,id,previousGameSchedule,dates,date,gameDate,games,teams,away,home,team,venue,isWinner,abbreviation,score'

const dodgerOpts = {
  hour12: true,
  timeZone: "America/Los_Angeles",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}

const dateOpts = {
  timeZone: "America/Los_Angeles",
  day: "numeric",
  month: "long",
  year: "numeric",
}


// MM/DD/YYYY
var todaysDate = new Date().toLocaleDateString("en-US", dodgerOpts);

const tmpGame = {
  gameDate: "Date loading...",
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
  return (
    <div className="card px-0 md:row-span-3">
      <div className="grid justify-items-center ">

        <GameDateLocation
          utcTime={game.gameDate}
          venue={game.venue.name}
        />
        <GameResultViewer
          awayLogo={`/logos/${game.teams.away.team.abbreviation}.svg`}
          homeLogo={`/logos/${game.teams.home.team.abbreviation}.svg`}
          homeScore={game.teams.home.score}
          awayScore={game.teams.away.score}
          // Check whether or not to style scorecolor as blue for dodgers
          dodgersHome={game.teams.home.team.id === 119}
        />
        <CouponConditions
          // either dodgers are the away team and won or another team is the away team and won, both impliying that dodgers won the game
          dodgerWin={((game.teams.away.isWinner && (game.teams.away.team.id === 119)) || (!game.teams.away.isWinner && (game.teams.away.team.id !== 119)))}
          venue={game.venue.name}
          utcTime={game.gameDate}
        />

      </div>
      {/* Testing mlb endpoint */}
      {/* {console.log(game.teams.away.team.abbreviation)} */}
      {/* {console.log(game.venue.name)} */}
      {/* {console.log(game.teams.away.team.name)} */}
      {/* {console.log(game.teams.home.team.name)} */}
      {/* {console.log(game.teams.away.score)} */}
      {/* {console.log(game.teams.home.score)} */}
      {/* {console.log(gameData.date)} */}
    </div>
  );
}

function GameDateLocation({ utcTime, venue }) {
  const tolocal = new Date(utcTime).toLocaleDateString("en-US", dateOpts);
  return (
    <div className="text-center">
      <h2 className="text-base/6 font-semibold"> {tolocal + " PT"} </h2>
      <h2 className={`${venue.length > 15 ? 'text-2xl' : 'text-3xl'} font-bold`}> {venue}</h2>
    </div>
  )
}

function GameResultViewer({ homeScore, homeLogo, awayScore, awayLogo, dodgersHome }) {
  const colorVariant = {
    true: "bg-[#005A9C]",
    false: "bg-neutral-700",
  }
  return (

    <div className="flex flex-col size-full ">
      {/* Logo Container*/}
      <div className="flex flex-row justify-around items-center py-6">
        <img src={awayLogo} alt="Away Logo" className="w-24 h-24 " />
        <img src={homeLogo} alt="Home Logo" className="w-24 h-24 " />
      </div>
      {/* Box Score Container */}
      <div className="flex flex-row justify-around">
        <span className={`${colorVariant[!dodgersHome]} border-1 size-16 rounded-lg p-2 text-2xl text-center py-4 text-[#FFFFFF]`}> {awayScore} </span>
        <span className={`${colorVariant[dodgersHome]} border-1 size-16 rounded-lg p-2 text-2xl text-center py-4 text-[#FFFFFF]`}> {homeScore} </span>
      </div>
    </div>
  )
}


function CouponConditions({ dodgerWin, venue, utcTime }) {
  const atStadium = venue === "Dodger Stadium";
  // checks if current day is the day following last played game
  // TODO: FIX UTC DATE TO PST DATE
  const isNextDay = (new Date(utcTime).getUTCDate() + 1 === new Date().getUTCDate());
  return (
    <div className="text-xl text-left w-xs pt-4 flex flex-col gap-1.5 ">
      {/* {dodgerWin.toString()} */}
      <div className="flex justify-between items-center ">
        <span className="">Dodgers Win </span><CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " />
      </div>
      {/* {atStadium.toString()} */}
      <div className="flex justify-between items-center"> Home
        <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />
      </div>
      {/* {isNextDay.toString()} */}
      <div className="flex justify-between items-center"> Yesterday
        <CheckmarkSvg className="inline size-8 fill-green-400 ml-4 " />
      </div>
      <div className="border-2 text-base self-center text-center rounded-lg p-1 bg-emerald-600 w-52 text-[#FFFFFF]"> DODGERSWIN INACTIVE </div>
    </div >
  )
}
export default DodgersWin
