import { Box, Button, TextField } from "@mui/material";
// import React, { useState } from "react";
import { useEmi } from "../contextapi/EmiContext";


const LoanInputComponent: React.FC = () => {
  const {formFields, setFormFields, errorFields, handleMonthlyComp} = useEmi();

  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: "20px",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <TextField
            required
            label="EMI Amount"
            type="number"
            name="amount"
            value={formFields.amount}
            onChange={(e) =>
              setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            error={errorFields.amount}
            helperText={errorFields.amount ? "Amount is required" : ""}
            defaultValue="100000"
          />
          <TextField
            required
            label="Interest Rate (%)"
            type="number"
            name="interest"
            value={formFields.interest}
            onChange={(e) =>
              setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            error={errorFields.interest}
            helperText={errorFields.interest ? "Interest is required" : ""}
            defaultValue="8.5"
          />
          <TextField
            required
            label="Term (%)"
            type="number"
            name="term"
            value={formFields.term}
            onChange={(e) =>
              setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            error={errorFields.term}
            helperText={errorFields.term ? "Term is required" : ""}
            defaultValue="5"
          />
        </Box>
        <Button variant="contained" onClick={handleMonthlyComp}>
          Calculate
        </Button>
      </Box>
    </>
  );
};

export default LoanInputComponent;
