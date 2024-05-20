import React from 'react'
import iplTeams from './iplTeams'
import './iplteam.css';

function TeamList() {
  return (
    <div>
      
      <ul>
        {iplTeams.map(team => (
          <li key={team.id} className={team.className}>
            <h2>{team.name}</h2>
            <p>Abbreviation: {team.abbreviation}</p>
            <p>City: {team.city}</p>
            <p>Captain : {team.captain}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamList