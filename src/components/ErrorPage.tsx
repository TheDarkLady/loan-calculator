import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage :React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
    <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"30px", height:"100vh"}}>
      <Typography variant='h4'>Something went wrong in the application.</Typography>
      <Button variant="outlined" onClick={() => navigate("/")}>Go Home</Button>
    </Box>
    </>
  )
}

export default ErrorPage
