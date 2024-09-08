import "./App.css";
import Navbar from "./components/Navbar";
import PercentageGrid from "./components/PercentageGrid";
import PercentageGraph from "./components/PercentageGraph";

function App() {
  return (
    <>
      <Navbar />
      <PercentageGraph />
      <PercentageGrid />
    </>
  );
}

export default App;
