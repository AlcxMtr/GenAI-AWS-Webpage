import React, { useEffect, useRef, useState }  from 'react';
import { GoTriangleLeft } from "react-icons/go";

// Tailwind CSS should be included in your project to use these utility classes

const GameCard = ({ gameData }) => {
  const { teamA, teamB, winner, gameInfo, scores, total, arena, location, topPerformers } = gameData;
  
  const team1Ref = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);

  const updateHeights = () => {
    if (team1Ref.current) {
      const height = team1Ref.current.offsetHeight;
      setTitleHeight(height);
    }
  };

  useEffect(() => {
    updateHeights(); // Initial height calculation
    window.addEventListener('resize', updateHeights); // Add resize listener

    return () => {
      window.removeEventListener('resize', updateHeights); // Cleanup listener on unmount
    };
  }, [titleHeight]); // Rerun effect if titleHeight changes

  return (
    <div className="grid grid-cols-8 bg-white py-4 pl-6 rounded-lg border-b">
      <div className="col-span-3 flex-row border-r">
        <div className="flex">
          <div className="text-left">
            <div className="text-md font-semibold text-gray-900 uppercase tracking-wide">Final</div>
            <div ref={team1Ref} className="flex space-x-2 items-center mt-3">
              <img className="w-10 h-10 rounded-full" src={teamA.logo} alt={`${teamA.name} logo`} />
              <div>
                <div className={`text-xl font-semibold ${winner === "A" ? "" : "text-gray-600"}`}>{teamA.name}</div>
                <div className="text-sm text-gray-600">{teamA.record}</div>
              </div>
            </div>
            <div className="flex space-x-2 items-center mt-3">
              <img className="w-10 h-10 rounded-full" src={teamB.logo} alt={`${teamB.name} logo`} />
              <div>
                <div className={`text-xl font-semibold ${winner === "B" ? "" : "text-gray-600"}`}>{teamB.name}</div>
                <div className="text-sm text-gray-600">{teamB.record}</div>
              </div>
            </div>
          </div>
          <div className="flex ml-5">
            {scores.map((score, index) => (
            <div key={index} className="px-1">
              <div className="font-bold text-gray-800">{index + 1}</div>
              <div className="text-center mt-5">
                <div className={`mt-3 ${winner === "A" ? "" : "text-gray-600"}`} style={{ height: titleHeight }}>{score.teamA}</div>
                <div className={`mt-3 ${winner === "B" ? "" : "text-gray-600"}`}>{score.teamB}</div>
              </div>
            </div>
            ))}
            <div className="ml-5 justify-end">
              <div className="font-bold text-gray-800 mr-7">T</div>
              <div className="text-xl font-bold text-center">
                <div className={`mt-4 mr-7 ${winner === "A" ? "" : "text-gray-600"}`} 
                  style={{ height: titleHeight }}>{total.teamA}
                </div>
                <div className="flex">
                  <div className={`mt-3 ${winner === "B" ? "" : "text-gray-600"}`}>{total.teamB}</div>
                  <GoTriangleLeft size="1.5em" className="mt-3"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-left text-gray-600">{gameInfo}</div>
      </div>
      <div className="col-span-2 text-left border-r">
        <div className="text-md font-bold text-gray-600 px-3 pt-7">{arena}</div>
        <div className="text-md text-gray-600 px-3">{location}</div>
      </div>
      <div className="col-span-3 flex justify-between items-stretch">
        <div className="space-y-3 px-3">
          <div className="text-left text-gray-600">TOP PERFORMERS</div>
          {topPerformers.map((performer, index) => (
            <div key={index} className="flex text-left items-center space-x-2"  style={{ height: titleHeight }}>
              <img className="w-12 h-12 rounded-full" src={performer.photo} alt={`${performer.name}`} />
              <div>
                <div className="text-sm font-semibold">
                  {performer.name} <span className="text-gray-600">{performer.pos}</span>
                </div>
                <div className="text-sm text-black">
                  <span className="text-black font-bold"> {performer.stats[0]} </span>
                  <span className="text-gray-600"> {performer.stats[1]}</span>
                  <span className="text-black font-bold"> {performer.stats[2]} </span>
                  <span className="text-gray-600"> {performer.stats[3]}</span>
                  <span className="text-black font-bold"> {performer.stats[4]} </span>
                  <span className="text-gray-600"> {performer.stats[5]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col space-y-4">
          <button className="px-4 py-2 rounded-full text-sm font-semibold border border-blue-600 text-blue-600">Gamecast</button>
          <button className="px-4 py-2 rounded-full text-sm font-semibold border border-blue-600 text-blue-600">Box Score</button>
          <button className="px-4 py-2 rounded-full text-sm font-semibold border border-blue-600 text-blue-600">Highlights</button>
        </div>
      </div>
    </div>
  );
};

const GamesList = ({ date, games }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-2xl font-semibold p-5 text-left border-b">{date}</div>
      {games.map((game, index) => (
        <GameCard key={index} gameData={game} />
      ))}
    </div>
  );
};

const gamesData = [
  {
    teamA: {
      name: "Pacers",
      record: "(47-35, 21-20 Away)",
      logo: "https://placehold.co/20x20"
    },
    teamB: {
      name: "Knicks",
      record: "(50-32, 27-12 Home)",
      logo: "https://placehold.co/20x20"
    },
    winner: "B",
    gameInfo: "East Semifinals - Game 5, NY leads series 3-2",
    scores: [
      {teamA: 32, teamB: 38}, {teamA: 22, teamB: 31}, {teamA: 21, teamB: 27}, {teamA: 16, teamB: 25}
    ],
    total: {
      teamA: 91,
      teamB: 121
    },
    arena: "Madison Square Garden",
    location: "New York, NY",
    topPerformers: [
      {photo: "https://placehold.co/20x20",
      name: "P. Siakam",
      stats: ["22", "PTS,", "8", "REB"],
      pos: "PF - IND"},
      {photo: "https://placehold.co/20x20",
      name: "J. Brunson",
      stats: ["44", "PTS,", "7", "AST"],
      pos: "PG - NY"},
    ]
  },
  {
    teamA: {
      name: "Timberwolves",
      record: "(56-26, 26-15 Away)",
      logo: "https://placehold.co/20x20"
    },
    teamB: {
      name: "Nuggets",
      record: "(57-25, 33-8 Home)",
      logo: "https://placehold.co/20x20"
    },
    winner: "B",
    gameInfo: "West Semifinals - Game 5, DEN leads series 3-2",
    scores: [
      {teamA: 26, teamB: 28}, {teamA: 18, teamB: 22}, {teamA: 30, teamB: 38}, {teamA: 23, teamB: 23}
    ],
    total: {
      teamA: 97,
      teamB: 112
    },
    arena: "Ball Arena",
    location: "Denver, CO",
    topPerformers: [
      {photo: "https://placehold.co/20x20",
      name: "R. Gobert",
      stats: ["18", "PTS,", "11", "REB"],
      pos: "C - MIN"},
      {photo: "https://placehold.co/20x20",
      name: "N. Jokic",
      stats: ["40", "PTS,", "7", "REB,", "13", "AST"],
      pos: "C - DEN"},
    ]
  }
];

const App = () => {
  const date = "Tuesday, May 14, 2024"
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white min-h-screen rounded-xl">
        <GamesList games={ gamesData } date={ date } />
      </div>
    </div>
  );
};

export default App;
