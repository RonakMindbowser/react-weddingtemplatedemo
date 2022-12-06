import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import './partners.css'
import { theme } from '../../navigator/RootNavigation';
// eslint-disable-next-line
import "swiper/css/bundle";

function Partners() {

    const [list, setList] = useState([
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-3-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-4-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-1-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-2-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-3-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-4-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-1-270x145.png",
        },
        {
            list_image: "https://livedemo00.template-help.com/wt_prod-19846/images/clients-2-270x145.png",
        },
    ])
    const isMD = useMediaQuery('(max-width:1200px)')
    const isLg = useMediaQuery('(max-width:1500px)')
    const isSm = useMediaQuery('(max-width:900px)')
    let count = isSm ? 2 : isMD ? 3 : isLg ? 4 : 1
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
            <Container sx={{
                pt: 10,
                pb: 10
            }}>
                <Swiper
                    // slidesPerView={3}
                    spaceBetween={20}
                    // slidesPerGroup={2}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={isSm ? {
                        type: "bullets",
                        clickable: true,
                    } : false}
                    navigation={false}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {
                        list.map((obj) => {
                            return (
                                <SwiperSlide>
                                    <Button sx={{
                                        outline: 'none',
                                        border: "none"
                                    }}>
                                        <img src={obj.list_image} className="img-thumbnail p-0 w-100" />
                                    </Button>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </Box>
    )
}

export default Partners