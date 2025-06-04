import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useEmi } from "../contextapi/EmiContext";

const currencyOptions = [
  { label: "USD", value: 1 },
  { label: "EUR", value: 0.8782 },
  { label: "INR", value: 85.7017 },
  { label: "GBP", value: 0.7394 },
  { label: "JPY", value: 143.6543 },
  { label: "AUD", value: 1.5470 },
  { label: "CAD", value: 1.3724 },
];

const CurrencyConverter: React.FC = () => {
  const { monthlyEmi, handleCurrencyChange, selectedCurrency  } = useEmi()

  const handleChange = (event: any) => {
    const selected = currencyOptions.find((c) => c.label === event.target.value);
    if (selected) {
      handleCurrencyChange(selected.value, selected.label);
    }
  };

  return (
    <>
      <Box
        sx={{
          mt: "20px",
          gap: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <FormControl sx={{width:"100px"}}>
          <InputLabel id="demo-simple-select-label">USD</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            {currencyOptions.map((currency) => (
            <MenuItem key={currency.label} value={currency.label}>
              {currency.label}
            </MenuItem>
          ))}
          </Select>
        </FormControl>

        <Typography > Converted EMI: {monthlyEmi.toFixed(2)} {selectedCurrency}</Typography>
      </Box>
    </>
  );
};

export default CurrencyConverter;
