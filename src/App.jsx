import './App.css'
import CardList from "./components/card-list/card-list..jsx";
import {getDeals} from "./api/api.js";

function App() {
  getDeals();
  return (
    <>
      <CardList/>
    </>
  )
}

export default App
