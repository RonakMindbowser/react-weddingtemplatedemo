import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { AllIcons } from '../../assets/icons'

function MadeWithLove() {
    return (
        <Grid container component={'main'}
            sx={{
                backgroundImage: `url(${'https://livedemo00.template-help.com/wt_prod-19846/images/bg-cta-3.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '65vh',

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
            <Typography
                sx={{
                    fontSize: {
                        lg: "40px",
                        xs: "26px"
                    },
                    color: "white"
                }}
            >
                {'MADE WITH LOVE'}
            </Typography>
            <Typography sx={{
                fontSize: '16px',
                color: "whitesmoke",
                opacity: 0.5,
                fontWeight: "400",
                pl: 10, pr: 10,
                textAlign: "center",
                width: {
                    lg: 0.5,
                    xs: 1
                },
                pt: 3
            }}>
                {'Enim neque volutpat ac tincidunt vitae. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi sit amet nulla facilisi morbi'}
            </Typography>
            <Button sx={{ color: "white", mt: 3, backgroundColor: "red", p: 2, pl: 3, pr: 3, borderRadius: 0 }}>
                <AllIcons.PlayArrowIcon color='white' fontSize='10' />
                <Typography sx={{
                    pl: 2
                }}>{"Watch Video"}</Typography>
            </Button>
        </Grid>
    )
}

export default MadeWithLove