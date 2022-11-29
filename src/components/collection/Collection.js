import { Box, Button, Container, Grid, Grow, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { AllIcons } from '../../assets/icons'

function Collection() {

    let ladyData = {
        profile_image: "https://livedemo00.template-help.com/wt_prod-19846/images/image-map-1-570x715.jpg"
    }

    let list = [
        {
            jewel_image: "https://livedemo00.template-help.com/wt_prod-19846/images/image-ruby-1-117x96.jpg",
            title: "Earrings",
        },
        {
            jewel_image: "https://livedemo00.template-help.com/wt_prod-19846/images/image-ruby-2-117x96.jpg",
            title: "Rings",
        },
        {
            jewel_image: "https://livedemo00.template-help.com/wt_prod-19846/images/image-ruby-3-117x96.jpg",
            title: "Bracelets",
        },
    ]

    const [itemList, setItemList] = useState(
        [
            {
                item_image: "https://livedemo00.template-help.com/wt_prod-19846/images/product-1-270x280.jpg",
                title: "Amulette De Cartier Ring",
                actual_price: "94.00",
                current_price: "63.00",
            },
            {
                item_image: "https://livedemo00.template-help.com/wt_prod-19846/images/product-3-270x280.jpg",
                title: "Cartier Dark Necklace",
                current_price: "93.00",
            },
            {
                item_image: "https://livedemo00.template-help.com/wt_prod-19846/images/product-4-270x280.jpg",
                title: "Axstone Violet Necklace",
                current_price: "59.00",
            },
            {
                item_image: "https://livedemo00.template-help.com/wt_prod-19846/images/product-2-270x280.jpg",
                title: "Rhinestone Earrings",
                current_price: "54.00",
            },
        ]
    )
    const [showZoomView, toggleZoomView] = useState(false)

    const isMD = useMediaQuery('(max-width:1200px)')

    return (
        <Box sx={{
            width: 1,
            backgroundColor: "rgb(236,236,232)",
            pt: 10,
            pb: 10,
        }}>
            <Container>
                <Grid container sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pb: 10
                }} spacing={4} >
                    {
                        list.map((obj) => {
                            return (
                                <Grid item key={obj} xs={12} sm={6} md={4} sx={{}} >
                                    <Box sx={{
                                        backgroundColor: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        pl: {
                                            xs: 0,
                                            lg: 3
                                        },
                                        pt: 3,
                                        pb: {
                                            xs: 6,
                                            lg: 3
                                        },
                                        flexDirection: {
                                            xs: "column",
                                            lg: "row"
                                        },
                                        justifyContent: {
                                            xs: "center",
                                            lg: "flex-start"
                                        },
                                        border: "1px solid lightgray",
                                        borderRadius: "5px",
                                    }}>
                                        <img src={obj.jewel_image} height={96} width={117} />
                                        <Typography
                                            sx={{
                                                pl: {
                                                    lg: 2
                                                },
                                                textTransform: "uppercase",
                                                fontSize: {
                                                    xs: "20px",
                                                    xl: "30px"
                                                },
                                                pt: {
                                                    xs: 4,
                                                    lg: 0
                                                }
                                            }}
                                        >
                                            {obj.title}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                {/* </Container> */}
                {/* <Container> */}
                {/* <Stack sx={{
                    display: "flex",
                    pb: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}> */}
                <Grid spacing={2} container sx={{}}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <img src={ladyData.profile_image} className="img-thumbnail p-0 w-100" />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{
                        // backgroundColor: "blue",
                    }}>
                        <Grid container xl={12} lg={12} md={12} sm={12} spacing={2} xs={12} sx={{
                            // alignItems: "center", justifyContent: "center",
                            ml: 1,
                            // backgroundColor: "red",
                            // width: 1
                        }} >
                            {
                                itemList.map((obj, index) => {
                                    return (
                                        <Grid item key={obj} xs={12} sm={12} md={8} lg={6}>
                                            <div onMouseEnter={() => {
                                                console.log("enter mouse")
                                                if (isMD) return
                                                let temp = itemList;
                                                temp = temp.map((obj1) => {
                                                    return {
                                                        ...obj1,
                                                        show: false
                                                    }
                                                })
                                                temp[index].show = true;
                                                setItemList(temp)
                                                toggleZoomView(true)
                                            }}
                                                onMouseLeave={() => {
                                                    if (isMD) return
                                                    console.log("leave mouse")
                                                    console.log("enter mouse")
                                                    let temp = itemList;
                                                    temp[index].show = false;
                                                    setItemList(temp)
                                                    toggleZoomView(false)
                                                }}>
                                                <Box sx={{
                                                    // height: '250px',
                                                    // width: "250px",
                                                    display: "flex",
                                                    flexDirection: {
                                                        xs: "row",
                                                        lg: "column"
                                                    },
                                                }}>
                                                    <Box sx={{
                                                        height: {
                                                            xs: "105px",
                                                            lg: "auto",
                                                        },
                                                        width: {
                                                            xs: "105px",
                                                            lg: "auto",
                                                        },
                                                        position: "relative"
                                                    }}>
                                                        <img src={obj.item_image} className="img-thumbnail p-0 w-100" />
                                                        <Grow
                                                            in={obj.show}
                                                            style={{ transformOrigin: '0 0 0 0' }}
                                                            {...(obj.show ? { timeout: 1000 } : {})}
                                                        >
                                                            <Box sx={{
                                                                backgroundColor: "rgba(0, 0, 0, 0.35)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                position: "absolute",
                                                                height: "100%",
                                                                width: {
                                                                    sm: "100%",
                                                                    xs: "-webkit-fill-available"
                                                                },
                                                                top: 0
                                                            }}>
                                                                <Button sx={{
                                                                    textAlign: "left",
                                                                    backgroundColor: "white",
                                                                    fontSize: "12px",
                                                                    color: "#41403e",
                                                                    width: 0.6,
                                                                    pt: 2,
                                                                    pb: 2,
                                                                    '&:hover': {
                                                                        backgroundColor: "#41403e",
                                                                        color: "white"
                                                                    }
                                                                }}>
                                                                    {"Add to Cart"}
                                                                </Button>
                                                            </Box>
                                                        </Grow>
                                                    </Box>
                                                    <Box sx={{
                                                        display: "flex",
                                                        flexDirection: 'column',
                                                        alignItems: {
                                                            xs: "flex-start",
                                                            lg: "center"
                                                        },
                                                        pl: 2,
                                                        width: {
                                                            xs: 0.6,
                                                            lg: 1
                                                        },
                                                    }}>
                                                        <Typography sx={{
                                                            // textAlign: "center",
                                                            fontSize: "18px",
                                                            fontWeight: "600",
                                                            // alignSelf: "center"
                                                        }} >{obj.title}</Typography>
                                                        <Box sx={{ display: "flex", justifyContent: "center", }}>
                                                            {obj.actual_price ? <Typography sx={{
                                                                textAlign: "center",
                                                                color: "gray",
                                                                textDecorationLine: "line-through"
                                                            }}>${obj.actual_price}</Typography> : null}
                                                            <Typography sx={{
                                                                textAlign: "center",
                                                                color: "red",
                                                                pl: obj.actual_price ? 1 : 0
                                                            }}>${obj.current_price}</Typography>
                                                        </Box>
                                                        {isMD ? <Button sx={{
                                                            textAlign: "left",
                                                            backgroundColor: "#41403e",
                                                            fontSize: "10px",
                                                            color: "white",
                                                            width: 1,
                                                            '&:hover': {
                                                                backgroundColor: "red"
                                                            }
                                                        }}>
                                                            {"Add to Cart"}
                                                        </Button> : null}
                                                    </Box>
                                                </Box>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
                {/* </Stack> */}
            </Container>
        </Box>
    )
}

export default Collection