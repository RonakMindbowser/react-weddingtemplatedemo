import { Box, Breadcrumbs, Container, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import './workshop.css'
// eslint-disable-next-line
import "swiper/css/bundle";
import { AllIcons } from '../../../assets/icons';

function Workshop() {
    let imageList = [
        {
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/single-project-1-655x496.jpg"
        },
        {
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/single-project-2-655x496.jpg",
        },
        {
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/single-project-3-655x496.jpg",
        }
    ]

    let info = [
        {
            left_text: "Author",
            right_text: "James Smith",
        },
        {
            left_text: "Date",
            right_text: "September 24, 2018",
        },
        {
            left_text: "Location",
            right_text: "LA Public Hall",
        },
        {
            left_text: "Entrance Fee",
            right_text: "$10",
        },
    ];
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
        <Box >
            <Toolbar />
            <Box sx={{
                backgroundImage: `url(${'https://livedemo00.template-help.com/wt_prod-19846/images/bg-shop.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                <Typography sx={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "white"
                }}>{"WORKSHOP"}</Typography>

                <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white", '&:hover': { color: "white" } }} >
                    <Link underline="hover" sx={{ color: "white", '&:hover': { color: "white" }, fontSize: "20px" }} href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ color: "white", '&:hover': { color: "white" }, fontSize: "20px" }}
                        href="/material-ui/getting-started/installation/"
                    >
                        Pages
                    </Link>
                    <Typography sx={{ color: "white", opacity: 0.5, fontSize: "20px" }}>Workshop</Typography>
                </Breadcrumbs>
            </Box>
            <Container>
                <Grid container spacing={4}
                    sx={{
                        // display: "flex", alignItems: "center",
                        // justifyContent: "center",
                        mb: {
                            xs: 1,
                            md: 10
                        },
                        mt: 5
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{}}>
                        <Box sx={{

                        }}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={false}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    renderBullet: function (index, className) {
                                        return '<span class="' + className + ' ' + 'bulletlist' + '">' + "</span>";
                                    },
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    imageList.map((obj) => {
                                        return (
                                            <SwiperSlide>
                                                <Box sx={{
                                                    outline: 'none',
                                                    border: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    <img src={obj.post_image} className="img-thumbnail p-0 list-image" />
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                        <Box sx={{
                            pt: 2,
                            pl: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {
                                xs: "center",
                                lg: "flex-start"
                            },
                            textAlign: {
                                xs: "center",
                                lg: "left"
                            }
                        }}>
                            <Typography sx={{
                                color: "black",
                                fontSize: "40px",
                            }}>{"THE ART OF JEWELRY"}</Typography>
                            <Typography sx={{
                                color: "black",
                                fontSize: "18px",
                                lineHeight: 1.5,
                                opacity: 0.4
                            }}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Ultrices mi tempus imperdiet nulla malesuada"}</Typography>
                            <hr className='divider-separator' />
                            <Box>
                                {
                                    info.map((obj) => {
                                        return (
                                            <Box sx={{ display: "flex", alignItems: "center", }}>
                                                <Typography sx={{
                                                    color: "black",
                                                    fontSize: "18px",
                                                }}>{obj.left_text}:</Typography>
                                                <Typography sx={{
                                                    color: "black",
                                                    fontSize: "18px",
                                                    opacity: 0.5,
                                                    ml: 1
                                                }}>{obj.right_text}</Typography>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            <hr className='divider-separator' />

                            <Box sx={{ display: "flex", color: "black", alignItems: "center", textTransform: "uppercase" }}>
                                <Typography>{'Share'}</Typography>
                                <Box sx={{
                                    ml: 2,
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}>
                                    {
                                        soicalIconList.map((obj) => {
                                            return (
                                                <IconButton sx={{ color: "black", "&:hover": { color: "red" } }}>
                                                    <obj.icon />
                                                </IconButton>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    backgroundColor: {
                        xs: "transparent",
                        md: "#f7f7f7",
                    }, pt: 3, pb: 3, mb: 15
                }}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Box sx={{
                            display: "flex", alignItems: "center",
                            //  backgroundColor: "gray",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            }
                        }}>
                            <IconButton sx={{
                                color: "darkgray", backgroundColor: "white", borderRadius: 0, mr: 2, display: {
                                    xs: "none",
                                    md: "block"
                                }
                            }}>
                                <AllIcons.TrendingFlatIcon fontSize='large' sx={{ rotate: "180deg" }} />
                            </IconButton>
                            <img src='https://livedemo00.template-help.com/wt_prod-19846/images/project-minimal-1-168x139.jpg' />
                            <Box sx={{
                                pl: {
                                    xs: 0,
                                    md: 3
                                },
                                display: "flex", flexDirection: "column", alignItems: {
                                    xs: "center",
                                    md: "flex-start"
                                },
                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "gray"
                                }}>{"August 12, 2018"}</Typography>
                                <Typography sx={{
                                    fontSize: "22px",
                                    color: "black",
                                    fontWeight: "600",
                                    mt: 1,
                                    '&:hover': {
                                        color: "red",
                                    },
                                    cursor: "pointer"
                                }}>{"Jewelry Secrets"}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Box sx={{
                            display: "flex", alignItems: "center",
                            //  backgroundColor: "green",
                            flexDirection: {
                                xs: "column",
                                md: "row-reverse"
                            }
                        }}>
                            <IconButton sx={{
                                color: "darkgray", backgroundColor: "white", borderRadius: 0, ml: 2, display: {
                                    xs: "none",
                                    md: "block"
                                }
                            }}>
                                <AllIcons.TrendingFlatIcon fontSize='large' />
                            </IconButton>
                            <img src='https://livedemo00.template-help.com/wt_prod-19846/images/project-minimal-2-168x139.jpg' />
                            <Box sx={{
                                pr: {
                                    xs: 0,
                                    md: 3
                                },
                                display: "flex", flexDirection: "column", alignItems: {
                                    xs: "center",
                                    md: "flex-end"
                                },
                            }}>
                                <Typography sx={{
                                    fontSize: "18px",
                                    color: "gray"
                                }}>{"October 5, 2018"}</Typography>
                                <Typography sx={{
                                    fontSize: "22px",
                                    color: "black",
                                    fontWeight: "600",
                                    mt: 1,
                                    '&:hover': {
                                        color: "red",
                                    },
                                    cursor: "pointer"
                                }}>{"Jewelry Basics"}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Workshop