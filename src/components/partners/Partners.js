import { Box, Typography } from '@mui/material'
import React from 'react'

function Partners() {
    return (
        <Box sx={{
            backgroundColor: "rgb(236,236,232)",
            width: 1,
            pt: 10,
            pb: 10
        }}>
            <Typography sx={{
                fontSize: {
                    lg: "40px",
                    xs: "30px"
                },
                textAlign: "center",
            }}>{"OUR PARTNERS"}</Typography>
        </Box>
    )
}

export default Partners