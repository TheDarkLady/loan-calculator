import './App.css'
import About from './components/About'
import CalculatorDashboard from './components/CalculatorDashboard'
import ErrorPage from './components/ErrorPage'
import ExchangeRates from './components/ExchangeRates'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
    <CalculatorDashboard/>
    <ExchangeRates/>
    <About/>
    <ErrorPage/>
    </>
  )
}

export default App
