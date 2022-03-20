import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <Home/> } path = '/' exact/>
      </Routes>
    </div>
  );
}

export default App;
