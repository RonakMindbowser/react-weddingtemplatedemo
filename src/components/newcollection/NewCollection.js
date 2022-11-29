import { Box, Button, Grid, Grow, Typography, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { AllIcons } from '../../assets/icons'
import { theme } from '../../navigator/RootNavigation'
import "./newcollection.css"

function NewCollection() {

    const [showZoomView, toggleZoomView] = useState(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [collectionList, setCollectionList] = useState([
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-7-370x303.jpg",
            collection_name: "Earrings",
        },
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-8-370x303.jpg",
            collection_name: "Hoops",
        },
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-9-370x303.jpg",
            collection_name: "Chandelier Earrings",
        },
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-10-370x303.jpg",
            collection_name: "Pendants",
        },
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-11-370x303.jpg",
            collection_name: "Bracelets",
        },
        {
            collection_image: "https://livedemo00.template-help.com/wt_prod-19846/images/grid-gallery-12-370x303.jpg",
            collection_name: "Necklaces",
        },
    ])
    console.log("col-->", collectionList);
    return (
        <Box sx={{
            width: 1,
            pt: 10,
        }}>
            <Typography sx={{
                fontSize: {
                    lg: "40px",
                    xs: "30px"
                },
                textAlign: "center",
                mb: 10
            }}>{"NEW COLLECTION"}</Typography>
            <Container>
                <Grid container spacing={4}
                    sx={{
                        display: "flex", alignItems: "center",
                        justifyContent: "center", mb: 10,
                    }}
                >
                    {
                        collectionList.map((obj, index) => {
                            return (
                                <Grid item key={obj} xs={12} sm={6} md={4} sx={{
                                }}>
                                    <div onMouseEnter={() => {
                                        console.log("enter mouse")
                                        let temp = collectionList;
                                        temp = temp.map((obj1) => {
                                            return {
                                                ...obj1,
                                                show: false
                                            }
                                        })
                                        temp[index].show = true;
                                        setCollectionList(temp)
                                        toggleZoomView(true)
                                    }}
                                        onMouseLeave={() => {
                                            console.log("leave mouse")
                                            console.log("enter mouse")
                                            let temp = collectionList;
                                            temp[index].show = false;
                                            setCollectionList(temp)
                                            toggleZoomView(false)
                                        }}>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center", justifyContent: "center", position: "relative",
                                        }}
                                        >
                                            <img src={obj.collection_image} className="img-thumbnail p-0 w-100" alt="Cinque Terre" />
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
                                                }}>
                                                    {/* <div className="facebook-image-overlay"> */}
                                                    <Button sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center"
                                                    }}>
                                                        <AllIcons.ZoomInIcon htmlColor={'white'} sx={{ fontSize: 50 }} />
                                                        <Typography sx={{
                                                            color: "white",
                                                            fontSize: '20px',
                                                            mt: 2
                                                        }}>{obj.collection_name}</Typography>
                                                    </Button>
                                                    {/* </div> */}
                                                </Box>
                                            </Grow>
                                        </Box>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default NewCollection