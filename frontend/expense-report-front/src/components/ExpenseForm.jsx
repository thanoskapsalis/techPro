import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import Modal from 'react-modal';
import React, {useState} from "react";


export const ExpenseForm = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding:0
        },
    };

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
        <Modal
            isOpen={props.isOpen}
            style={customStyles}
            contentLabel="Add new Expense"
        >
            <Card>
                <CardHeader
                    title={(props.editMode)? "Edit Expense with ID " + props.editElement.id : "Add new expense"}
                    subheader={"Fill the categories"}
                    style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
                />
                <Divider orientation={"horizontal"}></Divider>
                <form onSubmit={props.handleSubmit}>
                    <Grid container justifyContent={"center"} spacing={2} padding={2}
                          SelectProps={{autoWidth: true}}
                    >
                        <Grid item xs={4}>
                            <TextField name={"label"} id="outlined-basic" type={"text"} required={true}
                                       label="Expense Description"
                                       variant="outlined"
                                       defaultValue={(props.editMode)? props.editElement["product"] : ""}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <Select name={"type"} id="outlined-select-currency" required={true}
                                        defaultValue={(props.editMode && typeof props.editElement["category"] != 'undefined')? props.editElement["category"].toUpperCase() : "FOOD"}>
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name={"price"} id="outlined-basic" required={true} label="Cost"
                                       type={"number"}
                                       variant="outlined"
                                       defaultValue={(props.editMode)? props.editElement["cost"] : ""}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} spacing={2} container justifyContent={"flex-end"} padding={2}>
                        <Button onClick={props.closeModal}>Close</Button>
                        <Button variant={"contained"} type={"submit"}>Submit</Button>
                    </Grid>
                </form>
            </Card>

        </Modal>

    )
}