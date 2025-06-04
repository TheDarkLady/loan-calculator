import React from "react";
import LoanInputComponent from "../sub-components/LoanInputComponent";
import MonthlyEmiComponent from "../sub-components/MonthlyEmiComponent";
import { Box, Typography } from "@mui/material";
import { EmiProvider } from "../contextapi/EmiContext";

const CalculatorDashboard: React.FC = () => {
  return (
    <>
      <EmiProvider>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 2 }}>
          <Typography variant="h4" sx={{ py: 2, px: 0 }}>
            EMI Calculator Dashboard
          </Typography>
          <LoanInputComponent />
          <MonthlyEmiComponent />
        </Box>
      </EmiProvider>
    </>
  );
};

export default CalculatorDashboard;
