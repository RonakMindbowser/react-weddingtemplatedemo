import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import SecondAppMain from "./SecondAppMain";
import CustomLoader from '../components/customloader/CustomLoader';

export let theme = createTheme({
    components: {

    },
    palette: {
        custom: {
            gray: "gray"
        }
    }
})
theme = responsiveFontSizes(theme);

const RootNavigation = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <SecondAppMain />
                    <ToastContainer autoClose={1000} />
                    <CustomLoader />
                </StyledEngineProvider>
            </ThemeProvider>
        </div>
    )
}
export default RootNavigation;