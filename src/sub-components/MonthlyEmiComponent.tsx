import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import EmiTable from "./EmiTable";
import { useEmi } from "../contextapi/EmiContext";
import { Box, Typography } from "@mui/material";

const MonthlyEmiComponent: React.FC = () => {
  const { isShowMonthlyComp, monthlyEmi } = useEmi();

  return (
    <>
      <Box
        style={{ display: isShowMonthlyComp ? "flex" : "none" }}
        sx={{ flexDirection: "column", mt:"50px" }}
      >
        <Typography variant="h6">Monthly EMI : $ {monthlyEmi.toFixed(2)}</Typography>
        <CurrencyConverter />
        <EmiTable />
      </Box>
    </>
  );
};

export default MonthlyEmiComponent;
