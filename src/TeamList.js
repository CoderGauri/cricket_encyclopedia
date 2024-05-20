import React from 'react'
import iplTeams from './iplTeams'
import './iplteam.css';

function TeamList() {
  return (
    <div>
      <h1>IPL Teams</h1>
      <ul>
        {iplTeams.map(team => (
          <li key={team.id}>
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