import { Box, Typography } from '@mui/material'
import React from 'react'
import LiveExchangeRates from '../sub-components/LiveExchangeRates'

const ExchangeRates: React.FC = () => {
  return (
    <>
      <Box
        sx={{display:"flex", flexDirection: "column", mt:"50px", px:"20px" }}
      >
        <Typography variant="h6">Live Exchange Rates (Base: USD)</Typography>
        <LiveExchangeRates />
      </Box>
    </>
  )
}

export default ExchangeRates
