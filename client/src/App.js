import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import CardInfo from "./components/CardInfo";
import app from "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        {/* <CardInfo /> */}
      </div>

      <Cards/>
    </div>
  );
}

export default App;
