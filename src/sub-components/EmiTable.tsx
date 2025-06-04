import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEmi } from "../contextapi/EmiContext";

const EmiTable: React.FC = () => {
  const { selectedCurrency, amortizationSchedule  } = useEmi();
  return (
    <>
      <Box
        sx={{
          border: "1px solid #0003",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          mt: "30px",
        }}
      >
        <Typography sx={{ px: "10px", py: "20px" }}>
          Amortization Schedule ({selectedCurrency})
        </Typography>
        <TableContainer component={Paper} sx={{
          maxHeight: 400,
        }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Principal</TableCell>
                <TableCell align="right">Interest</TableCell>
                <TableCell align="right">Remaining Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {amortizationSchedule .map((row) => (
                <TableRow
                  key={row.month}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="right">{row.principal.toFixed(2)} {selectedCurrency}</TableCell>
                  <TableCell align="right">{row.interest.toFixed(2)} {selectedCurrency}</TableCell>
                  <TableCell align="right">{row.balance.toFixed(2)} {selectedCurrency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default EmiTable;
