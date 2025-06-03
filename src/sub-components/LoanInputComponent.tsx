import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
  setIsShowMonthlyComp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoanInputComponent: React.FC<Props> = ({ setIsShowMonthlyComp }) => {
  const [formFeilds, setFormFeilds] = useState({
    amount: "",
    interest: "",
    term: "",
  });

  const [errorFields, setErrorFeilds] = useState({
    amount: false,
    interest: false,
    term: false,
  });

  const handleMonthlyComp = () => {
    const { amount, interest, term } = formFeilds;

    const newErrors = {
      amount: !amount,
      interest: !interest,
      term: !term,
    };
    setErrorFeilds(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);
    if (hasError) return;

    setIsShowMonthlyComp(true);
  };
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
            value={formFeilds.amount}
            onChange={(e) =>
              setFormFeilds((prev) => ({
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
            value={formFeilds.interest}
            onChange={(e) =>
              setFormFeilds((prev) => ({
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
            value={formFeilds.term}
            onChange={(e) =>
              setFormFeilds((prev) => ({
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
