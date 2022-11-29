import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function AppFooter() {
    const isSmallScreen = useMediaQuery('(max-width:420px)')
    return (
        <Box sx={{
            backgroundColor: "rgb(31,30,29)",
            pt: 4,
            pb: 4,
        }}>
            <Container>
                <Box sx={{
                    display: "flex",
                    width: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: isSmallScreen ? 'column' : "row"
                }} >
                    <Typography sx={{
                        color: "white",
                        opacity: 0.5,
                        textAlign: "center",
                    }}>{"© 2022 Ronaks. All rights reserved."}</Typography>
                    <Button>
                        <Typography sx={{
                            color: "white",
                            opacity: 0.5,
                            textTransform: "capitalize",
                            textAlign: "center",
                            '&:hover': {
                                color: "red"
                            }
                        }}>{"Privacy Policy"}</Typography>
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default AppFooter