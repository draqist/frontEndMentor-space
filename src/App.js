import './App.css';
import React, {Suspense, lazy} from 'react'
import { Routes,Route } from 'react-router-dom';
import Tech from './Pages/Tech/Tech';


const Home = lazy(()=> import('./Pages/Home/Home'))
const Destination = lazy(()=> import('./Pages/Destination/Destination'))
const Crew = lazy(()=> import('./Pages/CREW/Crew'))

function App() {
  return (
    <div className="App">
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route element={ <Home/> } path = '/' exact/>
          <Route element={ <Destination/> } path = '/destination' exact/>
          <Route element={ <Crew/> } path = '/crew' exact/>
          <Route element={ <Tech/> } path = '/tech' exact/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
