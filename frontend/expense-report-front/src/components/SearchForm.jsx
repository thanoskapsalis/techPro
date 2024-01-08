import {Box, Grid} from "@mui/material";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export const SearchForm = (props) => {
    return (
        <Grid container spacing={2} paddingTop={10}>
            <Grid item xs={6}>
                <Box >
                    <h3>Date Picker</h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2} padding={5}>
                            <Grid xs={6}>
                                <DateField label={"from"}/>
                            </Grid>
                            <Grid xs={6}>
                                <DateField label={"to"}/>
                            </Grid>
                        </Grid>

                    </LocalizationProvider>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <h3>Cost Picker</h3>
                </Box>
            </Grid>
        </Grid>
    )
}