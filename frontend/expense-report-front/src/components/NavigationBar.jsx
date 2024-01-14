import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const NavigationBar = () => {

    const  navigate = useNavigate();

    const navigateTo = (target) => {
        navigate(target);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar  style={{ "backgroundColor": "#3c8dbc"}} position="static">
                <Toolbar>
                    <img src="netcompany.png" alt="logo" style={{"maxWidth": "100px" , "padding": "5px"}}  />
                </Toolbar>
            </AppBar>
        </Box>

    )

}