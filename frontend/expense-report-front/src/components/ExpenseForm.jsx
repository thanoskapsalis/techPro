import {Box, Button, FormControl, Input, InputAdornment, InputLabel, MenuItem, TextField} from "@mui/material";

export const ExpenseForm = () => {
    const options = [
        {
            value: 'option1',
            label: 'food',
        },
        {
            value: 'option2',
            label: 'drugs',
        },
        {
            value: 'option3',
            label: 'porn',
        },
        {
            value: 'option4',
            label: 'netflix',
        },
    ];

    return(
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField id="outlined-basic" label="Expense Label" variant="outlined" />
            <TextField
                id="outlined-select-currency"
                select
                label="Expense Type"
                defaultValue="option2"
                helperText="Please select your currency"
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="outlined-basic" label="Expense Price" variant="outlined" />
            <Button variant={"contained"}>Submit</Button>
        </Box>
    )
}