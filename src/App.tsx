import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import CalculatorDashboard from "./components/CalculatorDashboard";
import ErrorPage from "./components/ErrorPage";
import ExchangeRates from "./components/ExchangeRates";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CalculatorDashboard />} />
          <Route path="/exchange-rates" element={<ExchangeRates />} />
          <Route path="/about" element={<About />} />
          <Route path="/error-page" element={<ErrorPage />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
