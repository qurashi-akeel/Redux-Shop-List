import { useSelector } from 'react-redux';
import AddShop from './components/AddShop';
import './App.css';
import DisplayShops from './components/DisplayShops';
import Filter from './components/Filter';

function App() {
  const shops = useSelector((state) => state.shops.value);
  return (
    <div className="App">
      <h1>Shop List</h1>
      <AddShop />
      <Filter shops={shops} />
      <DisplayShops />
    </div>
  );
}

export default App;
