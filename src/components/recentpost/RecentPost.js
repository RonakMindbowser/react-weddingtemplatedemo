import { Box, Button, Container, Grid, Grow, Paper, Typography, Zoom } from '@mui/material'
import React, { useState } from 'react'
import './recentpost.css'
function RecentPost() {

    const [post, setPost] = useState([
        {
            post_by: "Ann Williams",
            post_date: "May 17, 2018",
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/post-16-370x267.jpg",
            post_title: "Tips On How To Enhance Your Jewelry Collection",
            post_owner_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-4-49x49.jpg",
        },
        {
            post_by: "Kate Smith",
            post_date: "May 04, 2018",
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/post-17-370x267.jpg",
            post_title: "How to Wear Jewelry According to Fashion",
            post_owner_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-6-49x49.jpg",
        },
        {
            post_by: "Sam Johnson",
            post_date: "May 17, 2018",
            post_image: "https://livedemo00.template-help.com/wt_prod-19846/images/post-18-370x267.jpg",
            post_title: "Choosing Wedding Jewelry: Top 5 Rules You Need to Know",
            post_owner_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-5-49x49.jpg",
        }
    ])
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100))

    return (
        <Box sx={{
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
            }}>{"RECENT POSTS"}</Typography>
            <Container>
                <Grid container spacing={4}
                    sx={{
                        display: "flex", alignItems: "center",
                        justifyContent: "center", mb: 10,
                        mt: 10
                    }}
                >
                    {
                        post.map((obj, index) => {
                            return (
                                <Grid item key={obj} xs={12} sm={8} md={5} xl={4} sx={{
                                }}>
                                    <Box sx={{
                                        pt: 2,
                                        pb: 2
                                    }}
                                        component={Paper}
                                        variant={'elevation'}
                                        elevation={10}
                                    >
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            pl: 2,
                                            pr: 2,
                                            pb: 1
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row"
                                            }}>
                                                <img src={obj.post_owner_image} className={'rounded-circle'} />
                                                <Typography
                                                    sx={{
                                                        ml: 2,
                                                        color: "gray"
                                                    }}
                                                >{"by"}</Typography>
                                                <Button variant='text'>
                                                    <Typography sx={{
                                                        fontSize: '16px',
                                                        color: "black",
                                                        '&:hover': {
                                                            color: "red"
                                                        },
                                                        textTransform: "capitalize",
                                                        textAlign: "left"
                                                    }}>{obj.post_by}</Typography>
                                                </Button>
                                            </Box>

                                            <Typography sx={{
                                                color: "red"
                                            }}>{obj.post_date}</Typography>
                                        </Box>
                                        {/* <Box>
                                            <img src={obj.post_image} />
                                        </Box> */}
                                        <div sx={{
                                            overflow: "hidden",
                                            '&:hover': {
                                                // transform: "scale(0.95)"
                                            }
                                        }}
                                            onMouseEnter={() => {
                                                let temp = post;
                                                post[index].show = true;
                                                setPost(temp)
                                                setRandomNumber(Math.floor(Math.random() * 100))
                                            }}
                                            onMouseLeave={() => {
                                                let temp = post;
                                                post[index].show = false;
                                                setPost(temp)
                                                setRandomNumber(Math.floor(Math.random() * 100))
                                            }}
                                        >
                                            {/* {
                                                obj.show ?
                                                    <Zoom
                                                        in={obj.show}
                                                        style={{ transformOrigin: '0 0 0 0' }}
                                                        {...(obj.show ? { timeout: 1000 } : {})}
                                                    >
                                                        <img src={obj.post_image} className={'w-100'} />
                                                    </Zoom>
                                                    :
                                                    <img src={obj.post_image} className={'w-100'} />
                                            } */}
                                            <img src={obj.post_image} className={'w-100'} />
                                        </div>
                                        {/* <div className="img-wrapper">
                                            <img
                                                src={obj.post_image}
                                                alt="test"
                                                className="hover-zoom"
                                            />
                                        </div> */}
                                        <Button sx={{ pl: 2, pr: 8, pt: 2 }}
                                            variant={'text'}
                                        >
                                            <Typography sx={{
                                                fontSize: '18px',
                                                color: "black",
                                                '&:hover': {
                                                    color: "red"
                                                },
                                                textTransform: "capitalize",
                                                textAlign: "left",
                                                fontWeight: "600",
                                            }}>
                                                {obj.post_title}
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box >
    )
}

export default RecentPost