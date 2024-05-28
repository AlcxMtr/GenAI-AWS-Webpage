import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { HiMiniVideoCamera } from "react-icons/hi2";

const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full bg-gray-200 h-2">
      <div
        className="bg-blue-600 h-2"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

const PlayerRow = ({ player, teamColor }) => {
  return (
    <div className={`flex items-center justify-between text-sm 
      border-b border-gray-300 p-2`}>
      <div className="flex items-center space-x-2">
        <img src="//placehold.co/20x20" alt="Champion icon" className="w-6 h-6 rounded-full" />
        <div className="grid items-center">
          <span className="font-bold">{player.name}</span>
          <span className="text-gray-500">Level {player.level}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="grid justify-items-center items-center min-w-32">
          <span className={`text-xs px-1 py-0.5 rounded`}>{player.rank} ({player.lp}LP)</span>
        </div>
        <div className="grid justify-items-center items-center min-w-36">
          <span className="font-bold">{player.winrate}% ({player.gamesPlayed} Played)</span>
          <ProgressBar percent={player.winrate} />
        </div>
        <div className="grid justify-items-center items-center min-w-20">
          <span className="font-bold">{player.cWinrate}%</span>
          <span>({player.cGamesPlayed} Played)</span>
        </div>
        <span className="font-bold">{player.kda} KDA</span>
        <img src="https://placehold.co/20x20" alt="Champion icon" className="w-5 h-5 rounded" />
        <div className="flex border-2 p-1 items-center">
          <span className="text-gray-500 pr-4">Runes</span>
          <FaChevronDown className="text-gray-400" />
        </div>
        <img src="https://placehold.co/20x20" alt="Champion icon" className="w-5 h-5 rounded" />
      </div>
    </div>
  );
};

const TeamSection = ({ team, teamColor }) => {
  return (
    <div>
      <div className="flex text-sm items-center justify-between px-4 py-3 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <span className={`font-bold ${teamColor === 'blue' ? 'text-blue-700' : 'text-red-700'}`}>{teamColor === 'blue' ? 'Blue Team' : 'Red Team'}</span>
          <span className={`${teamColor === 'blue' ? 'text-blue-700' : 'text-red-700'}`}>Tier Average:</span>
          <span className={`font-bold ${teamColor === 'blue' ? 'text-blue-700' : 'text-red-700'}`}>{team.tierAverage}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="pr-14">S2024</span>
          <span className="">Ranked Winratio</span>
          <span className="px-5">S2024 Champion Information</span>
          <span className="px-2">S2024</span>
          <span className="">Ban</span>
        </div>
      </div>
      <div className={`border-l-2 ${teamColor === 'blue' ? 'border-blue-600' : 'border-red-600'}`}>
        {team.players.map((player, index) => (
        <PlayerRow key={index} player={player} teamColor={teamColor} />
      ))}
      </div>
      
    </div>
  );
};

const MatchDetails = () => {
  const blueTeam = {
    tierAverage: 'Master',
    players: [
      {
        name: 'Player 1',
        level: 30,
        rank: 'Diamond',
        lp: 50,
        winrate: 60,
        gamesPlayed: 100,
        cWinrate: 62,
        cGamesPlayed: 32,
        kda: '3.0',
        runes: ['rune1', 'rune2'],
        champions: ['champion1', 'champion2']
      },
      {
        name: 'Player 2',
        level: 25,
        rank: 'Gold',
        lp: 30,
        winrate: 55,
        gamesPlayed: 80,
        cWinrate: 60,
        cGamesPlayed: 26,
        kda: '2.5',
        runes: ['rune3', 'rune4'],
        champions: ['champion3', 'champion4']
      }
    ]
  };
  
  const redTeam = {
    tierAverage: 'Master',
    players: [
      {
        name: 'Player 3',
        level: 28,
        rank: 'Platinum',
        lp: 40,
        winrate: 58,
        gamesPlayed: 90,
        cWinrate: 73,
        cGamesPlayed: 19,
        kda: '2.8',
        runes: ['rune5', 'rune6'],
        champions: ['champion5', 'champion6']
      },
      {
        name: 'Player 4',
        level: 27,
        rank: 'Silver',
        lp: 25,
        winrate: 50,
        gamesPlayed: 70,
        cWinrate: 59,
        cGamesPlayed: 56,
        kda: '2.0',
        runes: ['rune7', 'rune8'],
        champions: ['champion7', 'champion8']
      }
    ]
  };

  return (
    <div className="bg-gray-200 p-2">
      <div className="mx-auto bg-white ">
        <div className="flex justify-between border-b border-gray-300">
          <div className="flex items-center justify-start px-4 py-2">
            <div className="font-bold">Ranked Solo</div>
            <div className="px-2 text-gray-400">|</div>
            <div>Summoner's Rift</div>
            <div className="px-2 text-gray-400">|</div>
            <div>31:48</div>
          </div>
          <div className="flex items-center justify-start px-2.5 py-2.5">
            <button className="flex items-center justify-center mr-2 bg-red-500 text-white px-3 py-1.5 rounded">
              <HiMiniVideoCamera className="mr-2" />
              Record
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white px-3 py-1.5 rounded">
              Spectate
            </button>
          </div>
        </div>
        <TeamSection team={blueTeam} teamColor="blue" />
        <TeamSection team={redTeam} teamColor="red" />
      </div>
    </div>
  );
};

export default MatchDetails;