import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { EventRegister } from "react-native-event-listeners";
import "./customloader.css"

export const LOADER_TOGGLE = "LOADER_TOGGLE";

export const startLoader = () => {
    EventRegister.emit(LOADER_TOGGLE, true)
}

export const stopLoader = () => {
    EventRegister.emit(LOADER_TOGGLE, false)
}

export default function CustomLoader(props) {

    const [showLoader, toggle] = useState(false)

    useEffect(() => {
        let listener = EventRegister.addEventListener(LOADER_TOGGLE, (value) => {
            toggle(value)
        })

        return () => {
            EventRegister.removeEventListener(listener)
        }
    }, [])

    if (showLoader) {
        return (
            <div className="loadercontainer">
                <Backdrop open={true} sx={{ color: '#fff', zIndex: 1 }}>
                    {/* <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="80"
                        visible={true}
                    /> */}
                    <CircularProgress size={'100px'} color="primary" />
                </Backdrop>
                {/* <div className="innerloader">
                </div> */}
            </div>
        )
    }
    else {
        return null;
    }
}