import { Box, Button, TextField } from "@mui/material";
import React from "react";

interface Props {
  setIsShowMonthlyComp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoanInputComponent: React.FC<Props> = ({
  setIsShowMonthlyComp,
}) => {

  const handleMonthlyComp = ()=> {
    setIsShowMonthlyComp(true)
  }
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
          <TextField required label="EMI Amount" defaultValue="100000" />
          <TextField required label="Interest Rate (%)" defaultValue="8.5" />
          <TextField required label="Term (%)" defaultValue="5" />
        </Box>
        <Button variant="contained" onClick={handleMonthlyComp}>
          Calculate
        </Button>
      </Box>
    </>
  );
};

export default LoanInputComponent;
