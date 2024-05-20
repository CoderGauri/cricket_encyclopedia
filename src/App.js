//import logo from './logo.svg';
import './App.css';
import TeamList from './TeamList';
import Header from './Header';
import TeamDetails from './TeamDetails';
import iplTeams from './iplTeams';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TeamList />} />
          {iplTeams.map((team) => (
            <Route
              key={team.id}
              path={`/team/${team.abbreviation.toLowerCase()}`}
              element={<TeamDetails team={team} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
