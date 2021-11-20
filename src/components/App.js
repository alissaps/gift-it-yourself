import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GiftsList from './GiftsList';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/giftslist" element={<GiftsList/>}  />

        
      </Routes>
    </div>
  );
}

export default App;
