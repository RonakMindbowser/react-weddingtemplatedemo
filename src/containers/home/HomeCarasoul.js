import { Button, Divider, Typography, useMediaQuery } from '@mui/material';
import { AllIcons } from '../../assets/icons';
import './homecarasoul.css'

const HomeCarasoul = () => {
    const isMD = useMediaQuery('(max-width:992px)')
    const customSliderTextView = (title, dividerText, subTitle) => {
        return (
            <div className="carousel-caption carousel-image-text-wrap">
                <div className='carousel-image-inside-text-wrap'>
                    <div className="slide-top">
                        <Typography sx={{
                            fontSize: {
                                xs: '20px',
                                sm: '30px',
                                md: '40px',
                                lg: '50px',
                                xl: '60px',
                            }
                        }} >{title}</Typography>
                    </div>
                    <div className='slide-left'>
                        <div className='slide-left-wrap'>
                            <div className='divider' />
                            <Typography sx={{
                                fontSize: {
                                    xs: '20px',
                                    sm: '10px',
                                    md: '20px',
                                    lg: '30px',
                                    xl: '40px',
                                }
                            }} >{dividerText}</Typography>
                            <div className='divider' />
                        </div>
                        <Typography sx={{
                            color: "whitesmoke", fontSize: {
                                xs: '10px',
                                sm: '15px',
                                md: '15px',
                                lg: '20px',
                                xl: '20px',
                            }
                        }}>{subTitle}</Typography>
                    </div>
                    <div className='slide-right'>
                        <Button sx={{ marginTop: "20px" }} variant='contained'>{"Explore"}</Button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {isMD ? <div className='carousel-indicators'>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"
                        style={{
                            height: '10px',
                            width: "10px"
                        }}
                    />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={{
                        height: '10px',
                        width: "10px"
                    }} />
                </div> : null}
                <div className='carousel-inner'>
                    <div className="carousel-item active">
                        <img src='https://livedemo00.template-help.com/wt_prod-19846/images/slider-2-slide-1-1920x827.jpg' alt='Jewellary' className="d-block carasoul-image" />
                        {customSliderTextView('BEAUTY', "THAT IMPRESSES", 'Enhance your beauty with our jewelry that is both spectacular and affordable. Browse our catalog to find what you prefer.')}
                    </div>
                    <div className="carousel-item">
                        <img src='https://livedemo00.template-help.com/wt_prod-19846/images/slider-2-slide-2-1920x827.jpg' alt='Beauty' className="d-block carasoul-image" />
                        {customSliderTextView('JEWELRY', 'THAT YOU’LL LOVE', 'We provide a wide variety of jewelry, from earrings to bracelets. At Olimp, you will surely find even the rarest jewelry.')}
                    </div>
                </div>
                {isMD ? null : <>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <Button sx={{
                            color: "black",
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            '&:hover': {
                                animation: "spin 0.5s linear",
                                "@keyframes spin": {
                                    "0%": {
                                        transform: "rotate(360deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(0deg)",
                                    },
                                },
                            },
                        }}
                        >
                            <AllIcons.ArrowBackIcon htmlColor='white' />
                        </Button>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <Button sx={{
                            color: "black",
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            '&:hover': {
                                animation: "spin 0.5s linear",
                                "@keyframes spin": {
                                    "0%": {
                                        transform: "rotate(0deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(360deg)",
                                    },
                                },
                            },
                        }}
                        >
                            <AllIcons.ArrowForwardIcon htmlColor='white' />
                        </Button>
                    </button>
                </>}
            </div>

        </>
    )
}

export default HomeCarasoul;