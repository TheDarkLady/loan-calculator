import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound :React.FC = () => {
  return (
    <Box sx={{width:"100%", height:"100vh", backgroundColor:"#000"}}>
        <Typography sx={{color:"#fff"}}>Not found</Typography>
    </Box>
  )
}

export default NotFound
