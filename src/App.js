import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import Crew from './Pages/CREW/Crew'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={ <Home/> } path = '/' exact/>
        <Route element={ <Destination/> } path = '/destination' exact/>
        <Route element={ <Crew/> } path = '/crew' exact/>
      </Routes>
    </div>
  );
}

export default App;
