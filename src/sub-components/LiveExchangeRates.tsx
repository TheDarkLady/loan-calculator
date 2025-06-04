import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress,
} from "@mui/material";

interface ExchangeRates {
  [currencyCode: string]: number;
}

const LiveExchangeRates: React.FC = () => {
  const [rates, setRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/USD`
        );
        const data = await response.json();
        if (data.result === "success") {
          setRates(data.conversion_rates);
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rateEntries = Object.entries(rates);
  const paginatedRates = rateEntries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ mt: 4 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper>
          <TableContainer >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell align="right">Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRates.map(([currency, rate]) => (
                  <TableRow key={currency}>
                    <TableCell>{currency}</TableCell>
                    <TableCell align="right">{rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={rateEntries.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
          />
        </Paper>
      )}
    </Box>
  );
};

export default LiveExchangeRates;
