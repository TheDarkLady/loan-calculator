import React from 'react'
import LoanInputComponent from '../sub-components/LoanInputComponent'
import MonthlyEmiComponent from '../sub-components/MonthlyEmiComponent'

const CalculatorDashboard: React.FC = () => {
  return (
    <div>
        <h1>Calculator Dashboard Componet</h1>
        <LoanInputComponent/>
        <MonthlyEmiComponent />
      
    </div>
  )
}

export default CalculatorDashboard
