import { Box, Button, Typography } from '@mui/material'
import React, { useRef } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// var Carousel = require('react-responsive-carousel').Carousel;
import { Carousel } from "react-responsive-carousel"
import './peoplefeedback.css'
function PeopleFeedback() {
    let list = [
        {
            client_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-16-100x100.jpg",
            client_quote: "Olimp is pleasant to work with, their team carefully listens to clients and works hard to create custom jewelry that perfectly fits the needs of their customers.",
            client_name: "Catherine Williams",
            client_type: "Regular Client",
        },
        {
            client_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-17-100x100.jpg",
            client_quote: "I love every single thing about your store! Even if I can’t find the jewelry I’m looking for, you always seem to have something special for me. Thank you!",
            client_name: "Rupert Wood",
            client_type: "Regular Client",
        },
        {
            client_image: "https://livedemo00.template-help.com/wt_prod-19846/images/user-19-100x100.jpg",
            client_quote: "Thank you for delivering great rings for my sister’s wedding! My friends were right when they recommended your store to me and I’m not disappointed.",
            client_name: "Sam Peterson",
            client_type: "Regular Client",
        }
    ]
    const indicatorStyles = {
        background: 'red',
        width: 10,
        height: 10,
        display: 'inline-block',
        margin: '10px 8px',
    };
    const carasoulRef = useRef();
    console.log("carasoulRef:", carasoulRef);
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
                pt: 15,
                // flexDirection: "column",
                // alignItems: "center"
            }}
        >
            <Typography sx={{
                color: "white",
                fontSize: '35px',
                fontWeight: "700",
            }}>{"WHAT PEOPLE SAY"}</Typography>


            <Box sx={{
                backgroundColor: "#e8e8e8",
                height: '20px',
                width: 0.5,
                position: "absolute",
                mt: 20
            }}>
            </Box>
            <Box sx={{
                backgroundColor: "#f4f4f4",
                height: '20px',
                position: "absolute",
                width: 0.55,
                mt: 22
            }}>
            </Box>
            <Box sx={{
                backgroundColor: "white",
                // height: '300px',
                position: "absolute",
                width: 0.6,
                mt: 24,
                borderTop: "1px solid gray"
            }}>
                <Carousel showArrows={false} showThumbs={false} showStatus={false}
                    // renderItem={(item, options) => {
                    //     console.log('item ', item)
                    //     console.log('options ', options)
                    //     return (
                    //         <Box>

                    //         </Box>
                    //     )
                    // }}
                    width={'100%'}
                    ref={carasoulRef}
                    autoPlay
                    swipeable={true}
                    // className='carasoulview'
                    infiniteLoop={true}
                    emulateTouch
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        // if (isSelected) {
                        //     return (
                        //         <li
                        //             style={{ ...indicatorStyles, backgroundColor: 'black' }}
                        //             aria-label={`Selected: ${label} ${index + 1}`}
                        //             title={`Selected: ${label} ${index + 1}`}
                        //         />
                        //     );
                        // }
                        // return (
                        //     <li
                        //         style={indicatorStyles}
                        //         onClick={onClickHandler}
                        //         onKeyDown={onClickHandler}
                        //         value={index}
                        //         key={index}
                        //         role="button"
                        //         tabIndex={0}
                        //         title={`${label} ${index + 1}`}
                        //         aria-label={`${label} ${index + 1}`}
                        //     />
                        // );
                        return (
                            <Box sx={{
                                height: "10px", width: "10px",
                                backgroundColor: isSelected ? "blue" : "red",
                                display: 'inline-block',
                                margin: '0px 8px',
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: "black"
                                },
                            }} />
                        )
                    }}
                >
                    {
                        list.map((obj) => {
                            return (
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    pt: 10,
                                    pb: 10,
                                    pl: 2,
                                    pr: 2,
                                    cursor: "pointer"
                                }}>
                                    <Box sx={{
                                        height: "100px",
                                        width: "100px",
                                    }}>
                                        <img className={'rounded-circle'} src={obj.client_image} />
                                    </Box>
                                    <Typography sx={{
                                        fontSize: "20px",
                                        textAlign: "center",
                                        lineHeight: "30px",
                                        mt: 2,
                                        color: "black",
                                    }}>{obj.client_quote}</Typography>
                                    <Typography sx={{
                                        fontSize: "20px",
                                        textAlign: "center",
                                        mt: 3,
                                        color: "black",
                                        fontWeight: "700"
                                    }}>{obj.client_name}</Typography>
                                    <Typography sx={{
                                        fontSize: "16px",
                                        textAlign: "center",
                                        mt: 1,
                                        color: "red",
                                        fontWeight: "700"
                                    }}>{obj.client_type}</Typography>
                                </Box>
                            )
                        })
                    }
                </Carousel>
            </Box>

        </Box>
    )
}

export default PeopleFeedback