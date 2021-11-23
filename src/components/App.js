import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GiftsList from './GiftsList';
import RandomMessage from './RandomMessage';
import NewGift from "./NewGift";
import Contact from './Contact';
import GiftDetails from './GiftDetails';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/giftslist" element={<GiftsList/>}  />
      <Route path="/random" element={<RandomMessage/>}  />
      <Route path="/newgifts" element={<NewGift />} />
      <Route path="/giftdetails/:id" element={<GiftDetails/>}/>

      <Route path="/contact" element={<Contact/>}  />
      </Routes>
    </div>
  );
}

export default App;
