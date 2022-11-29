import { Box, Button, Container, Divider, Grid, Grow, IconButton, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AllIcons } from '../../assets/icons'
import { theme } from '../../navigator/RootNavigation'
import './contactinfo.css'
const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "monospace"
}));

const ContactText = styled(Typography)(({ theme }) => ({
    color: "white",
    fontWeight: "500",
    fontFamily: "monospace",
    marginLeft: "16px"
}));

const HeaderText = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    color: "white",
    fontFamily: "monospace",
    fontWeight: "500",
}));
const DescriptionText = styled(Typography)(({ theme }) => ({
    color: "white",
    opacity: 0.5,
    marginTop: "16px",
}));

function ContactInfo() {
    const [email, setEmail] = useState("");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100))
    const [instaList, setInstaList] = useState([
        {
            insta_image_url: "https://livedemo00.template-help.com/wt_prod-19846/images/gallery-image-10-128x120.jpg"
        },
        {
            insta_image_url: "https://livedemo00.template-help.com/wt_prod-19846/images/gallery-image-11-128x120.jpg"
        },
        {
            insta_image_url: "https://livedemo00.template-help.com/wt_prod-19846/images/gallery-image-12-128x120.jpg"
        },
        {
            insta_image_url: "https://livedemo00.template-help.com/wt_prod-19846/images/gallery-image-13-128x120.jpg"
        }
    ])
    const soicalIconList = [
        {
            icon: AllIcons.FacebookIcon,
        },
        {
            icon: AllIcons.TwitterIcon,
        },
        {
            icon: AllIcons.InstagramIcon,
        },
        {
            icon: AllIcons.GoogleIcon,
        },
    ]
    return (
        <Box sx={{
            backgroundColor: "#2b2a28",
            pt: 5,
            pb: 5,
        }}>
            <Container>
                <Grid container spacing={6} columnSpacing={10}
                    sx={{
                        // display: "flex", alignItems: "center",
                        // justifyContent: "center",
                        mb: 10,
                        mt: 2
                    }}
                >
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <Box sx={{ width: 0.8 }}>
                            <Box sx={{ display: "flex" }}>
                                <AllIcons.VolunteerActivismIcon sx={{ marginRight: "10px", color: 'white', fontSize: "40px" }} />
                                <CustomTitle variant="h4">{"Lovely's"}<br />
                                    <CustomTitle sx={{ fontSize: "12px", color: "gray", mt: 0 }} >{'Craft Jewelry'}</CustomTitle>
                                </CustomTitle>
                            </Box>
                            <DescriptionText>{"Olimp provides the best craft and custom-made jewelry to clients inside and outside of USA."}</DescriptionText>
                            <Box sx={{ width: "100%", height: '1px', backgroundColor: "lightgray", mt: 2, mb: 2 }} />
                            <Box sx={{ display: "flex", mt: 2 }}>
                                <AllIcons.CallIcon sx={{
                                    color: "white",
                                    opacity: 0.5
                                }} />
                                <ContactText sx={{
                                    '&:hover': {
                                        color: "red",
                                        cursor: "pointer"
                                    }
                                }}>{"+1 323-913-4688"}</ContactText>
                            </Box>
                            <Box sx={{ display: "flex", mt: 2 }}>
                                <AllIcons.ScheduleIcon sx={{
                                    color: "white",
                                    opacity: 0.5
                                }} />
                                <ContactText sx={{

                                }}>{"Mon-Sat: 07:00AM - 05:00PM"}</ContactText>
                            </Box>
                            <Box sx={{ display: "flex", mt: 2 }}>
                                <AllIcons.NearMeIcon sx={{
                                    color: "white",
                                    opacity: 0.5
                                }} />
                                <ContactText sx={{
                                    '&:hover': {
                                        color: "red",
                                        cursor: "pointer"
                                    }
                                }}>{"4730 Crystal Springs Dr, Los Angeles, CA 90027"}</ContactText>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <Box sx={{ mt: 1 }}>
                            <HeaderText>{"NEWSLETTER"}</HeaderText>
                            <DescriptionText>{"Join our email list for useful information."}</DescriptionText>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#41403e",
                                pt: 2.5,
                                pb: 2.5,
                                width: 1,
                                mt: 2,
                                textAlign: "center"
                            }}>
                                <input
                                    value={email}
                                    type={'email'}
                                    autoFocus
                                    className={'email-input'}
                                    onChange={(text) => setEmail(text.target.value)}
                                    placeholder={'Enter your email'}
                                />
                            </Box>
                            <Button sx={{
                                color: "white",
                                backgroundColor: "red",
                                width: 1,
                                mt: 1,
                                pt: 2.5,
                                pb: 2.5,
                                textAlign: "center",
                                '&:hover': {
                                    backgroundColor: "white",
                                    color: "red"
                                },
                            }}>
                                <Typography sx={{
                                    fontSize: "14px"
                                }}>{"Subscribe"}</Typography>
                            </Button>
                            <Box sx={{ display: "flex", color: "white", pt: 5, alignItems: "center" }}>
                                <Typography>{'Follow Us'}</Typography>
                                <Box sx={{
                                    ml: 2,
                                    display: "flex",
                                    justifyContent: "space-around",
                                    width: 0.4,
                                }}>
                                    {
                                        soicalIconList.map((obj) => {
                                            return (
                                                <IconButton sx={{ color: "white", "&:hover": { color: "red" } }}>
                                                    <obj.icon />
                                                </IconButton>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} lg={4} xl={4} >
                        <Box sx={{ mt: 1, ml: 2 }}>
                            <HeaderText>{"INSTAGRAM"}</HeaderText>
                            <Grid container spacing={2} rowSpacing={2} columnSpacing={2} sx={{ mt: 2 }}>
                                {
                                    instaList.map((obj, index) => {
                                        return (
                                            <Grid item key={obj} xs={3} sm={3} lg={6} md={6} xl={6} sx={{}}>
                                                <div onMouseEnter={() => {
                                                    console.log("enter mouse")
                                                    let temp = instaList;
                                                    temp = temp.map((obj1) => {
                                                        return {
                                                            ...obj1,
                                                            show: false
                                                        }
                                                    })
                                                    temp[index].show = true;
                                                    setInstaList(temp)
                                                    setRandomNumber(Math.floor(Math.random() * 100))
                                                }}
                                                    onMouseLeave={() => {
                                                        console.log("leave mouse")
                                                        console.log("enter mouse")
                                                        let temp = instaList;
                                                        temp[index].show = false;
                                                        setInstaList(temp)
                                                        setRandomNumber(Math.floor(Math.random() * 100))
                                                    }}>
                                                    <Box sx={{
                                                        display: "flex",
                                                        alignItems: "center", justifyContent: "center", position: "relative",
                                                    }}>
                                                        <img src={obj.insta_image_url} className="img-thumbnail w-100 p-0" />
                                                        <Grow
                                                            in={obj.show}
                                                            style={{ transformOrigin: '0 0 0 0' }}
                                                            {...(obj.show ? { timeout: 1000 } : {})}
                                                        >
                                                            <Box sx={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                position: "absolute",
                                                                height: "100%",
                                                                width: "100%"
                                                            }}>
                                                                <Button sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    alignItems: "center"
                                                                }}>
                                                                    <AllIcons.ZoomInIcon htmlColor={'white'} sx={{ fontSize: 40 }} />
                                                                </Button>
                                                            </Box>
                                                        </Grow>
                                                    </Box>
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ContactInfo