import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GiftsList from './GiftsList';
import RandomMessage from './RandomMessage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/giftslist" element={<GiftsList/>}  />
      <Route path="/random" element={<RandomMessage/>}  />

        
      </Routes>
    </div>
  );
}

export default App;
