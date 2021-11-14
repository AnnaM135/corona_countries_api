import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import About from './components/About/About';
import CountryInfo from "./components/Country/CountryInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/country/:name" element={<CountryInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
