// FIX: Consider moving all this to Data.jsx
import { useState, useEffect, useRef } from "react";
import CheckmarkSvg from "../assets/svgs/checkmark.svg?react";
import XmarkSvg from "../assets/svgs/x.svg?react";
import WhatsThisSvg from "../assets/svgs/whatsthis.svg?react";
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
// TODO: ADD Fade out on conditional tooltip unmount
/*
 * DodgersWin component will async fetch dodgers latest game 
 * using the statsapi for MLB
 */
function DodgersWin() {
  const [gameData, setGameData] = useState(tmpGame);
  const game = gameData?.games?.[0] ?? tmpGame;

  const [showTT, setShowTT] = useState(false);
  const tooltipRef = useRef(null); // constant ref to determine whether or not click happened within the elem
  /* Handles asyncronous fetch to the MLB API */
  useEffect(() => {
    fetch(previousGames)
      .then(resp => resp.json())
      .then(jsonData => setGameData(jsonData.teams[0].previousGameSchedule.dates.at(-1)))

    return () => {
      console.log("goodbye cruel world, cleaning up :(");
    }
  }, []);

  /*
  * <ref>.current is from the react hook docs 
  * the hook returns an object with the current property set to either intial val or the dom object
  * <ref>.current.contains uses the Node API to check whether the current Node either the parent or any of the children in
  * the passed in arguments
  */
  const handleTTEvent = (event) => {
    if (tooltipRef.current && tooltipRef.current.contains(event.target)) {
      setShowTT(false);
    }
  }

  /* Handles attaching event listeners on for button press */
  useEffect(() => {
    if (showTT) {
      document.addEventListener('mousedown', handleTTEvent);
    }
    else {
      document.removeEventListener('mousedown', handleTTEvent);
    }
    return () => {
      document.removeEventListener('mousedown', handleTTEvent);
    }
    // will only activate on state change
  }, [showTT]);


  return (
    // basically put it at the top right of the card no matter what, and do not mess with the spacing or flow of the rest of the card
    <div className="card px-0 md:row-span-3 relative">

      {/* Conditional Tooltip Controlling Button */}
      <button className="cursor-pointer items-center w-10 h-10 absolute top-2 right-2 right-100% "
        onClick={() => setShowTT(!showTT)}>
        <WhatsThisSvg className="fill-neutral-100 w-10 h-10 " />
      </button>
      {/* Conditional Tooltip Info */}
      {showTT && <ClickForInfo ref={tooltipRef} />}

      {/* Main UI */}
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
          // style check for Dodgers with team ID
          dodgersHome={game.teams.home.team.id === 119}
        />
        <CouponConditions
          // either dodgers are the away team and won or another team is the away team and won, both impliying that dodgers won the game
          dodgerWin={((game.teams.away.isWinner && (game.teams.away.team.id === 119)) || (!game.teams.away.isWinner && (game.teams.away.team.id !== 119)))}
          venue={game.venue.name}
          utcTime={game.gameDate}
        />

      </div>
    </div >
  );
}

/* Conditional Tooltip Explaining this widget */
function ClickForInfo({ ref }) {
  return (
    <span ref={ref} className="animate-fade-in-element p-4 h-full w-full z-10 absolute top-0 bg-black text-white text-sm/5  " >
      <h3 className="text-center text-2xl"> What is this? </h3>
      <p className="pt-2 pb-2">
        <b>DODGERSWIN </b> is a Panda Express coupon code valid in the Greater LA area for the 2024-25
        LA Dodgers season.
      </p>

      <p>
        This code reduces the cost of a plate to <b>$6</b> if these conditions are all met...
      </p>
      <ul className="list-disc list-inside">
        <li> The Dodgers must <b>win</b> the game</li>
        <li> The game must be at <b>Dodger Stadium </b> </li>
        <li> The coupon is being redeemed the <b>NEXT</b> day </li>
      </ul>

      <p className="pt-2" >

        <b> Example: </b><td />
        Angels vs Dodgers, <i>Score: </i>10-15<td />
        @ Dodger Stadium, <i>Date: </i> 5/19/2025<td />
      </p>
      <ul className="list-disc list-inside">
        <li> The Venue was Dodger Stadium </li>
        <li> The Dodgers won by 5 runs </li>
        <li> I'm craving some Panda Express on May 20th</li>
      </ul>
      <br />
      <p>
        I found myself looking up box scores and filtering for location and dates
        often enough at the gym that I figured I'd automate this process and squeeze in a few extra
        workouts instead 💪
      </p>


    </span>
  )
}
/* Holds Venue and Date in PST */
function GameDateLocation({ utcTime, venue }) {
  const tolocal = new Date(utcTime).toLocaleDateString("en-US", dateOpts);
  return (
    <div className="text-center">
      <h2 className="text-base/6 font-semibold"> {tolocal + " PT"} </h2>
      <h2 className={`${venue.length > 15 ? 'text-2xl' : 'text-3xl'} font-bold`}> {venue}</h2>
    </div>
  )
}
/* Holds Scorecards and Logos of playing teams */
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

/* Holds conditions required to be met for food coupon to activate */
function CouponConditions({ dodgerWin, venue, utcTime }) {
  /* checks if current day is the day following last played game date (both in pst) */
  const dateformatDayMonthPST = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "2-digit", timeZone: "America/Los_Angeles" })
  const gameDateInPSTParts = dateformatDayMonthPST.formatToParts(new Date(utcTime));
  const nowDateInPSTParts = dateformatDayMonthPST.formatToParts(Date.now());

  /* ...InPSTParts returns an object array { 0:month, 1:`/`, 2:date }*/
  // BUG: Account for new month / first day 
  // ex. may31st game day, june 1st current date will result in false

  const isNextDay = (nowDateInPSTParts[0].value === gameDateInPSTParts[0].value)
    && (nowDateInPSTParts[2].value === ((parseInt(gameDateInPSTParts[2].value) + 1).toString()))
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
      <div className="flex justify-between items-center">
        Home
        {atStadium ? <CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " /> : <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />}
      </div>

      {/* previous date bool */}
      <div className="flex justify-between items-center">
        Yesterday
        {isNextDay ? <CheckmarkSvg className="inline ml-4 size-8 fill-green-400 " /> : <XmarkSvg className="inline size-8  ml-4 fill-red-400 self-end" />}
      </div>

      {/* active coupon button */}
      <div className={` ${couponActive ? "bg-emerald-600" : "bg-red-500"} font-medium  border-2 mt-2 text-base self-center text-center rounded-lg p-1 w-52 text-[#FFFFFF]`}>
        {(couponActive) ? "DODGERSWIN ACTIVE" : "DODGERSWIN INACTIVE"}
      </div>
    </div >
  )
}
export default DodgersWin
