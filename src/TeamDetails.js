import React from 'react'
import { useParams } from 'react-router-dom';
import iplTeams from './iplTeams';
import './TeamDetail.css';

function TeamDetails() {
  
    const { abbreviation } = useParams();
    const team = iplTeams.find(team => team.abbreviation.toLowerCase() === abbreviation);
  
    if (!team) {
      return <h2>Team not found</h2>;
    }
  
    return (
      <div className={`team-detail ${team.className}`}>
        <h2>{team.name}</h2>
        <p>Abbreviation: {team.abbreviation}</p>
        <p>City: {team.city}</p>
      </div>
    );

}

export default TeamDetails