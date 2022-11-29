import { Box, Typography } from '@mui/material'
import React from 'react'
import PeopleFeedbackBg from "../../assets/images/peoplefeedback.jpg";

function PeopleFeedback() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${'https://livedemo00.template-help.com/wt_prod-19846/images/bg-testimonials.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: 1,

                display: "flex",
                justifyContent: "center",
                pt: 15
            }}
        >
            <Typography sx={{
                color: "white",
                fontSize: '35px',
                fontWeight: "700"
            }}>{"WHAT PEOPLE SAY"}</Typography>
        </Box>
    )
}

export default PeopleFeedback