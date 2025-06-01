import React from 'react'
import CurrencyConverter from './CurrencyConverter'
import EmiTable from './EmiTable'

const MonthlyEmiComponent : React.FC = () => {
  return (
    <div>
      <h1>&nbsp;&nbsp; - Monthly EMI Component</h1>
      <CurrencyConverter/>
      <EmiTable/>
    </div>
  )
}

export default MonthlyEmiComponent
