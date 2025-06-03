import React from 'react'
import CurrencyConverter from './CurrencyConverter'
import EmiTable from './EmiTable'

interface Props{
  isShowMonthyComp : boolean
}

const MonthlyEmiComponent : React.FC<Props> = ({
  isShowMonthyComp
}) => {
  return (
    <div style={{display : isShowMonthyComp ? "flex" : "none"}}>
      <h1>&nbsp;&nbsp; - Monthly EMI Component</h1>
      <CurrencyConverter/>
      <EmiTable/>
    </div>
  )
}

export default MonthlyEmiComponent
