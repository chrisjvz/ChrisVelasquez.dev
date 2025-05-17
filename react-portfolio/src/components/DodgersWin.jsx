// FIX: Consider moving all this to Data.jsx
import { useState, useEffect } from "react";
import CheckmarkSvg from "../assets/svgs/checkmark.svg?react";
import XmarkSvg from "../assets/svgs/x.svg?react";

const previousGames = 'https://statsapi.mlb.com/api/v1/teams/119?&hydrate=previousSchedule(team)&fields=teams,id,name,sport,id,previousGameSchedule,dates,date,gameDate,games,teams,away,home,team,venue,isWinner,abbreviation,score'

const dateOpts = {
  timeZone: "America/Los_Angeles",
  day: "numeric",
  month: "long",
  year: "numeric",
}

const tmpGame = {
  gameDate: new Date().toLocaleDateString(),
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

// FIX: Consider moving all this to Data.jsx

/*
 * DodgersWin component will async fetch dodgers latest game 
 * using the statsapi for MLB
 */
function DodgersWin() {
  const [gameData, setGameData] = useState(tmpGame);

  useEffect(() => {
    fetch(previousGames)
      .then(resp => resp.json())
      .then(jsonData => setGameData(jsonData.teams[0].previousGameSchedule.dates.at(-1)));

    return () => {
      console.log("goodbye cruel world, cleaning up :(");
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
  /* checks if current day is the day following last played game date (both in pst) */
  const dateformatDayMonthPST = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "2-digit", timeZone: "America/Los_Angeles" })
  const gameDateInPSTParts = dateformatDayMonthPST.formatToParts(new Date(utcTime));
  const nowDateInPSTParts = dateformatDayMonthPST.formatToParts(Date.now());
  // console.log("now in parts " + nowDateInPSTParts);
  // console.log("game date in parts " + gameDateInPSTParts);
  // console.log("game date month " + gameDateInPSTParts[0].value);
  // console.log("now date month " + nowDateInPSTParts[0].value);

  /* ...InPSTParts returns an object array { 0:month, 1:`/`, 2:date }*/
  // BUG: Account for new month / first day 
  // ex. may31st game day, june 1st current date will result in false
  const isNextDay = (nowDateInPSTParts[0].value === gameDateInPSTParts[0].value) && (nowDateInPSTParts[2].value === ((parseInt(gameDateInPSTParts[2].value) + 1).toString()))
  const atStadium = venue === "Dodger Stadium";
  const couponActive = isNextDay && atStadium && dodgerWin;
  return (
    <div className="text-xl text-left w-xs pt-4 flex flex-col gap-1.5 ">
      {/* dodgers win bool */}
      <div className="flex justify-between items-center ">
        Dodgers Win
        {dodgerWin ? <CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " /> : <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />}
      </div>
      {/* home stadium bool */}
      <div className="flex justify-between items-center"> Home
        {atStadium ? <CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " /> : <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />}
      </div>
      {/* previous date bool */}
      <div className="flex justify-between items-center"> Yesterday
        {isNextDay ? <CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " /> : <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />}
      </div>

      <div className={` ${couponActive ? "bg-emerald-600" : "bg-red-500"} border-2 text-base self-center text-center rounded-lg p-1  w-52 text-[#FFFFFF]`}>

        {(couponActive) ? "DODGERSWIN ACTIVE" : "DODGERSWIN INACTIVE"}
      </div>
    </div >
  )
}
export default DodgersWin
