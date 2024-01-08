import {Box, Button, MenuItem, TextField} from "@mui/material";

export const ExpenseForm = (props) => {
    const options = [
        {
            value: 'FOOD',
            label: 'Food',
        },
        {
            value: 'TRANSPORT',
            label: 'Transport',
        },
        {
            value: 'ENTERTAINMENT',
            label: 'Entertainment',
        },
        {
            value: 'HYGIENE',
            label: 'Hygiene',
        },
        {
            value: 'OTHER',
            label: 'Other',
        },
    ];


    return (
        <>
            <h1>Add new Expense</h1>
            <form onSubmit={props.handleSubmit}>
                <Box sx={{'& > :not(style)': {m: 1}}}>
                    <TextField name={"label"} id="outlined-basic" type={"text"} required={true} label="Product" variant="outlined"/>
                    <TextField name={"type"} id="outlined-select-currency" required={true} select label="Category" defaultValue="option2" helperText="Please select your currency">
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField name={"price"} id="outlined-basic"  required={true} label="Cost" type={"number"} variant="outlined"/>
                    <Button variant={"contained"} type={"submit"}>Submit</Button>
                </Box>
            </form>
        </>

    )
}