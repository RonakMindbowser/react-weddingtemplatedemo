import { Accordion, AccordionDetails, AccordionSummary, alpha, Badge, Box, Button, Container, CssBaseline, Divider, Drawer, Fade, Grow, IconButton, InputAdornment, Link, Menu, MenuItem, Popover, Slider, styled, TextField, Typography, useMediaQuery, Zoom } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AllIcons } from "../../assets/icons";
import './AppHeader.css'
var drawerWidth = 500;
// https://livedemo00.template-help.com/wt_prod-19846/images/slider-2-slide-2-1920x827.jpg
// https://livedemo00.template-help.com/wt_prod-19846/images/slider-2-slide-1-1920x827.jpg

const CustomLink = styled(Link)(({ theme }) => ({
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    height: '100px',
    width: '100px',
}));

const CustomActiveLink = styled(Link)(({ theme }) => ({
    color: 'red',
    textTransform: "uppercase",
    fontWeight: "500",
    height: '100px',
    width: '100px',
    backgroundImage: `linear-gradient(to bottom, ${red[200]} , ${red[50]})`
}));

const PopOverLink = styled(Link)(({ theme }) => ({
    color: 'black',
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: '10px'
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "monospace"
}));

const CustomLinkTitle = styled(Typography)(({ theme }) => ({
    color: "black",
    fontWeight: "500",
    textTransform: "initial",
    fontFamily: "monospace",
    margin: 0,
    padding: 0,
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: '5px',
    '&:hover': {
        color: "lightcoral"
    }
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
    // width: drawerWidth,
    // padding: "0px 20px 0px 20px",
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        padding: "0px 20px 0px 20px",
    },
    [theme.breakpoints.down('xl')]: {
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            padding: "0px 20px 0px 20px",
        },
    },
    [theme.breakpoints.down('lg')]: {
        '& .MuiDrawer-paper': {
            width: drawerWidth - 50,
            padding: "0px 20px 0px 20px",
        }
    },
    [theme.breakpoints.down('md')]: {
        '& .MuiDrawer-paper': {
            width: drawerWidth - 100,
            padding: "0px 10px 0px 10px",
        }
    },
    [theme.breakpoints.down('sm')]: {
        '& .MuiDrawer-paper': {
            width: 250,
            padding: "0px",
        }
    },
}))

const AppHeader = () => {
    var navList1 = [
        {
            title: "Home",
            id: "home",
            routeName: "home",
            altRouteName: "home"
        },
        {
            title: "About",
            id: "about",
            routeName: "aboutus"
        },
        {
            title: "Blog",
            id: "blog",
            routeName: "blog",
            hasPopOver: true,
            list: [
                {
                    title: "Classic Blog",
                },
                {
                    title: "Grid Blog",
                },
                {
                    title: "Grid Blog 2",
                },
                {
                    title: "Grid Blog 3",
                },
                {
                    title: "Blog Post",
                },
            ]
        },
        {
            title: "Shop",
            id: "shop",
            routeName: "shop",
            hasPopOver: true,
            list: [
                {
                    title: "Shop",
                },
                {
                    title: "Single Product",
                },
                {
                    title: "Cart Package",
                },
                {
                    title: "Checkout",
                },
            ]
        },
        {
            title: "Contacts",
            id: "contactus",
            routeName: "contactus"
        },
    ]

    const [activeLink, setActiveLink] = useState("/")
    const location = useLocation();
    const navigation = useNavigate()
    const isHideHeaderMenu = useMediaQuery('(max-width:992px)')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeHoverIndex, setActiveHoverIndex] = useState(2)

    const [showZoomView, toggleZoomView] = useState(false)

    const [openRightDrawer, toggleRightDrawer] = useState(false)
    const [openLeftDrawer, toggleLeftDrawer] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const [searchValue, setSearchValue] = useState("")
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100))
    const [navList, setNavList] = useState([
        {
            title: "Home",
            id: "home",
            routeName: "home",
            altRouteName: "home"
        },
        {
            title: "About",
            id: "about",
            routeName: "aboutus"
        },
        {
            title: "Blog",
            id: "blog",
            routeName: "blog",
            hasPopOver: true,
            showHiddenMenu: false,
            list: [
                {
                    title: "Classic Blog",
                },
                {
                    title: "Grid Blog",
                },
                {
                    title: "Grid Blog 2",
                },
                {
                    title: "Grid Blog 3",
                },
                {
                    title: "Blog Post",
                },
            ]
        },
        {
            title: "Shop",
            id: "shop",
            showHiddenMenu: false,
            routeName: "shop",
            hasPopOver: true,
            list: [
                {
                    title: "Shop",
                },
                {
                    title: "Single Product",
                },
                {
                    title: "Cart Package",
                },
                {
                    title: "Checkout",
                },
            ]
        },
        {
            title: "Contacts",
            id: "contactus",
            routeName: "contactus"
        },
    ]);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const getInTouchList = [
        {
            text: "+1 323-913-4688",
            icon: AllIcons.CallIcon,
            actionType: "Phone",
        },
        {
            text: "4730 Crystal Springs Dr, Los Angeles, CA 90027",
            icon: AllIcons.NearMeIcon,
            actionType: "Address",
        },
        {
            text: "test1@yopmail.com",
            icon: AllIcons.MailIcon,
            actionType: "Email",
        }
    ]

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
        {
            icon: AllIcons.PinterestIcon,
        },
    ]

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        if (!isHideHeaderMenu) {
            toggleLeftDrawer(false)
            toggleRightDrawer(false)
        }
    }, [isHideHeaderMenu])


    const RenderLeftDrawerWrapper = () => {
        return (
            <Drawer
                open={openLeftDrawer}
                onClose={() => toggleLeftDrawer(false)}
                variant={'temporary'}
                anchor={'left'}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    zIndex: 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                        padding: "0px 20px 0px 20px",
                    },
                }}
                hideBackdrop
            >
                <RenderLeftDrawerContent />
            </Drawer>
        )
    }

    const toggleLeftDrawerView = (value, index) => {
        let temp = navList
        temp = temp.map((obj) => {
            return {
                ...obj,
                showHiddenMenu: false
            }
        })
        temp[index].showHiddenMenu = value
        console.log("temp", temp)
        setNavList(temp)
        toggleZoomView(true)
        setRandomNumber(Math.floor(Math.random() * 100))
    }

    const RenderLeftDrawerContent = () => {
        return (
            <div className="left-drawer-container">
                {/* <Container> */}
                <div className="left-drawer-top-wrapper">
                    <IconButton>
                        <Badge badgeContent={2}>
                            <AllIcons.ShoppingCartIcon sx={{
                                color: "black",
                                '&:hover': {
                                    color: "lightcoral"
                                }
                            }} fontSize={'large'} />
                        </Badge>
                    </IconButton>
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <AllIcons.SearchIcon fontSize='small' />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        placeholder={'Search'}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setSearchValue(event.target.value)
                        }}
                        value={searchValue}
                        type={'text'}
                        label={'Search'}
                        id="outlined-basic"
                        sx={{ marginTop: "20px", width: "100%" }}
                        variant="outlined" />
                </div>
                <Divider light variant="fullWidth" />
                <div className="left-drawer-navlist-wrap">
                    {
                        navList.map((obj, index) => {
                            console.log("Obbj", obj)
                            return (
                                <Box>
                                    <Button sx={{
                                        width: "100%",
                                        backgroundColor: index == 0 || obj.showHiddenMenu ? "lightcoral" : "transparent",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: "lightcoral",
                                            color: "white"
                                        },
                                        color: obj.showHiddenMenu ? "white" : "black",
                                        height: "50px",
                                    }}

                                    >
                                        <Typography>
                                            {obj.title}
                                        </Typography>
                                        {
                                            obj.hasPopOver ?
                                                <IconButton onClick={() => {
                                                    toggleLeftDrawerView(!obj.showHiddenMenu, index)
                                                }}
                                                    sx={{
                                                        color: obj.showHiddenMenu ? "white" : "black",
                                                        '&:hover': {
                                                            color: "white"
                                                        },
                                                    }}
                                                >
                                                    {obj.showHiddenMenu ? <AllIcons.ExpandLessIcon /> : <AllIcons.ExpandMoreIcon />}
                                                </IconButton>
                                                : null
                                        }
                                    </Button>
                                    {
                                        obj.showHiddenMenu ?
                                            <Box sx={{

                                            }}
                                                onMouseLeave={() => {
                                                    toggleLeftDrawerView(false, index)
                                                }}
                                            >
                                                {
                                                    obj.list.map((obj2) => {
                                                        return (
                                                            <Button sx={{
                                                                color: "black",
                                                                mt: 1,
                                                                mb: 1,
                                                                width: "100%",
                                                                backgroundColor: "transparent",
                                                                display: "flex",
                                                                justifyContent: "flex-start",
                                                                pl: 2,
                                                                pt: 1, pb: 1,
                                                                borderRadius: 0,
                                                                '&:hover': {
                                                                    backgroundColor: "lightcoral",
                                                                    color: "white"
                                                                },
                                                            }}>
                                                                <Typography sx={{
                                                                    fontSize: "14px"
                                                                }}>
                                                                    {obj2.title}
                                                                </Typography>
                                                            </Button>
                                                        )
                                                    })
                                                }
                                            </Box>
                                            : null
                                    }
                                </Box>
                            )
                        })
                    }
                </div>
                {/* </Container> */}
            </div>
        )
    }

    const RenderRightDrawerWrapper = () => {
        return (
            <CustomDrawer
                open={openRightDrawer}
                onClose={() => toggleRightDrawer(false)}
                variant={'temporary'}
                anchor={'right'}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                hideBackdrop
            >
                <RenderRightDrawerContent />
            </CustomDrawer>
        )
    }

    const RenderRightDrawerContent = () => {
        return (
            <div>
                <Container sx={{ zIndex: 2 }}>
                    <div className="drawer-top-wrap">
                        <CustomTitle variant="h5">{"Get In Touch"}</CustomTitle>
                        <IconButton onClick={() => {
                            toggleRightDrawer(false)
                        }}>
                            <AllIcons.CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                    <p className="title-text">{"Looking for the best jewelry in your city? Feel free to contact us to find out what our jewelry store can offer you, your friends, and family."}</p>
                    <h5 className="h5 facebook-text">{"Facebook"}</h5>
                    <div className="fb-image-container" onMouseEnter={() => {
                        console.log("enter mouse")
                        toggleZoomView(true)
                        setChecked(true)
                    }}
                        onMouseLeave={() => {
                            console.log("leave mouse")
                            toggleZoomView(false)
                            setChecked(false)
                        }}>
                        <img
                            src="https://livedemo00.template-help.com/wt_prod-19846/images/gallery-image-1-387x387.jpg"
                            className="rounded drawer-image img-thumbnail" alt="Cinque Terre" />
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            <div className="facebook-image-overlay">
                                <Button>
                                    <AllIcons.ZoomInIcon htmlColor={'white'} sx={{ fontSize: 50 }} />
                                </Button>
                            </div>
                        </Grow>
                    </div>
                    <div className="contact-list-wrap">
                        {
                            getInTouchList.map((obj) => {
                                return (
                                    <div className="getintouch-list-wrap">
                                        <obj.icon htmlColor="#ba7f32" sx={{ marginTop: '5px' }} />
                                        <Button onClick={() => {
                                            if (obj.actionType == "Email") window.open(`mailto:${obj.text}?subject=Subject&body=Body%20goes%20here`)
                                            else if (obj.actionType == "Phone") window.open(`tel:${obj.text}`)
                                        }}>
                                            <CustomLinkTitle variant="body1">{obj.text}</CustomLinkTitle>
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="social-icon-wrap">
                        {
                            soicalIconList.map((obj) => {
                                return (
                                    <IconButton>
                                        <obj.icon htmlColor="gray" />
                                    </IconButton>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        )
    }

    console.log("location::", location);
    return (
        <React.Fragment>
            <Box className="secondheader-container" sx={{
                zIndex: 1
            }}>
                <div className="secondheader-leftcontainer">
                    {isHideHeaderMenu ? <IconButton onClick={() => {
                        toggleLeftDrawer(!openLeftDrawer)
                    }}>
                        {openLeftDrawer
                            ?
                            <AllIcons.ArrowBackIcon
                                sx={{
                                    color: "black",
                                    '&:hover': {
                                        color: "lightcoral",
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
                                fontSize={'large'}
                            />
                            :
                            <AllIcons.MenuIcon
                                sx={{
                                    color: "black",
                                    '&:hover': {
                                        color: "lightcoral",
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
                                fontSize={'large'} />}

                    </IconButton> : null}
                    <AllIcons.VolunteerActivismIcon fontSize="large" sx={{ marginRight: "10px" }} />
                    <CustomTitle variant="h6">{"Lovely's "}<br />
                        <CustomTitle variant="subtitle2">{'Craft Jewelry'}</CustomTitle>
                    </CustomTitle>
                </div>
                <div className="secondheader-rightcontainer">
                    {
                        navList.map((obj, i) => {
                            if (location.pathname.includes(obj.routeName)) {
                                {/* if (activeLink == obj.routeName) { */ }
                                return (
                                    <CustomActiveLink
                                        underline="none"
                                        onClick={() => {
                                            navigation(obj.routeName)
                                        }}
                                        onMouseEnter={(event) => {
                                            if (obj.hasPopOver) {
                                                setActiveHoverIndex(i)
                                                handlePopoverOpen(event)
                                            }
                                        }}
                                        onMouseLeave={(event) => {
                                            if (obj.hasPopOver) {
                                                handlePopoverClose(event)
                                            }
                                        }}
                                        component="button"
                                    >
                                        {obj.title}</CustomActiveLink>
                                )
                            }
                            else {
                                return (
                                    <CustomLink
                                        component="button"
                                        underline="none"
                                        onClick={() => {
                                            navigation(obj.routeName)
                                        }}
                                        onMouseEnter={(event) => {
                                            if (obj.hasPopOver) {
                                                setActiveHoverIndex(i)
                                                handlePopoverOpen(event)
                                            }
                                        }}
                                        onMouseLeave={(event) => {
                                            if (obj.hasPopOver) {
                                                handlePopoverClose(event)
                                            }
                                        }}
                                    >
                                        {obj.title}</CustomLink>
                                )
                            }
                        })
                    }
                    <Popover
                        id="mouse-over-popover"
                        sx={{
                            pointerEvents: 'none',
                        }}
                        components={Fade}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <div className="secondheader-popover-wrap">
                            {
                                navList[activeHoverIndex].list.map((obj) => {
                                    return (
                                        <PopOverLink
                                            component="button"
                                            underline="none"
                                            onClick={() => {
                                            }}
                                        >
                                            {obj.title}</PopOverLink>
                                    )
                                })
                            }
                        </div>
                    </Popover>
                    <Button>
                        <Badge badgeContent={2}>
                            <AllIcons.ShoppingCartIcon sx={{
                                color: "black",
                                '&:hover': {
                                    color: "lightcoral"
                                }
                            }} fontSize={'large'} />
                        </Badge>
                    </Button>
                    <Button>
                        <AllIcons.SearchIcon sx={{
                            color: "black",
                            '&:hover': {
                                color: "lightcoral"
                            }
                        }} fontSize={'large'} />
                    </Button>
                    <Button onClick={() => {
                        toggleRightDrawer(!openRightDrawer)
                    }}>
                        <AllIcons.MenuIcon sx={{
                            color: "black",
                            '&:hover': {
                                color: "lightcoral"
                            }
                        }} fontSize={'large'} />
                    </Button>
                </div>
                {isHideHeaderMenu ? <Button onClick={() => {
                    toggleRightDrawer(!openRightDrawer)
                }}>
                    <AllIcons.SegmentIcon sx={{
                        color: "black",
                        '&:hover': {
                            color: "lightcoral"
                        }
                    }} fontSize={'large'} />
                </Button> : null}
                <div className="empty-right-view" />
            </Box>
            <RenderRightDrawerWrapper />
            <RenderLeftDrawerWrapper />
        </React.Fragment>
    )
}

export default AppHeader;
