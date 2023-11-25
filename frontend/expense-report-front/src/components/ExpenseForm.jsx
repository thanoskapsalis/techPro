import {Box, Button, MenuItem, TextField} from "@mui/material";

export const ExpenseForm = (props) => {
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
            label: 'subscriptions',
        },
        {
            value: 'option4',
            label: 'savings',
        },
    ];


    return (
        <form onSubmit={props.handleSubmit}>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <TextField name={"label"} id="outlined-basic" type={"text"} required={true} label="Expense Label" variant="outlined"/>
                <TextField name={"type"} id="outlined-select-currency" required={true} select label="Expense Type" defaultValue="option2" helperText="Please select your currency">
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField name={"price"} id="outlined-basic"  required={true} label="Expense Price" type={"number"} variant="outlined"/>
                <Button variant={"contained"} type={"submit"}>Submit</Button>
            </Box>
        </form>
    )
}