import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export const NavigationBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Button  color="inherit">Home Page</Button>
                    <Button color="inherit">Statistics</Button>
                    <Button color="inherit">Pita</Button>
                </Toolbar>
            </AppBar>
        </Box>

    )

}