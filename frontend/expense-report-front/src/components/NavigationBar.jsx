import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const NavigationBar = () => {

    const  navigate = useNavigate();

    const navigateTo = (target) => {
        navigate(target);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => navigateTo("/")}   color="inherit">Home Page</Button>
                    <Button onClick={() => navigateTo("/search")}   color="inherit">Search</Button>
                    <Button color="inherit">Statistics</Button>
                    <Button color="inherit">Pita</Button>
                </Toolbar>
            </AppBar>
        </Box>

    )

}