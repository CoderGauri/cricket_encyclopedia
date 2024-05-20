import React from 'react'
import { Link } from 'react-router-dom';
import iplTeams from './iplTeams'
import './iplteam.css';

function TeamList() {
  return (
    <div>
      
      <ul>
        {iplTeams.map(team => (
          <li key={team.id} className={team.className}>
            <Link to={`/team/${team.abbreviation.toLowerCase()}`}>
              <h2>{team.name}</h2>
              <p>Abbreviation: {team.abbreviation}</p>
              <p>City: {team.city}</p>
            </Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default TeamList