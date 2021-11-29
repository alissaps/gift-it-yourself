import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import GiftsList from '../pages/GiftsList/GiftsList';
import RandomMessage from '../pages/RandomMessage/RandomMessage';
import NewGift from "../pages/Form/NewGift";
import Contact from '../pages/Contact/Contact';
import GiftDetails from '../pages/GiftDetails/GiftDetails';
import EditGift from '../pages/Form/EditGift';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/giftslist" element={<GiftsList/>}  />
      <Route path="/random" element={<RandomMessage/>}  />
      <Route path="/newgifts" element={<NewGift />} />
      <Route path="/giftdetails/:id" element={<GiftDetails/>}/>
      <Route path="/editgift/:id" element={<EditGift/>}/>
      <Route path="/contact" element={<Contact/>}  />
      </Routes>
    </div>
  );
}

export default App;
