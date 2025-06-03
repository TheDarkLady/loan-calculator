import React, { useState } from "react";
import LoanInputComponent from "../sub-components/LoanInputComponent";
import MonthlyEmiComponent from "../sub-components/MonthlyEmiComponent";
import { Box, Typography } from "@mui/material";

const CalculatorDashboard: React.FC = () => {
  const [isShowMonthyComp, setIsShowMonthlyComp] = useState<boolean>(false)
  return (
    <>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 2 }}>
        <Typography variant="h4" sx={{py:2, px:0 }}>EMI Calculator Dashboard</Typography>
        <LoanInputComponent  setIsShowMonthlyComp={setIsShowMonthlyComp} />
        <MonthlyEmiComponent isShowMonthyComp={isShowMonthyComp}/>
      </Box>
    </>
  );
};

export default CalculatorDashboard;
