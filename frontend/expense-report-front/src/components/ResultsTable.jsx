import DataTable from 'react-data-table-component';
import {
    Box,
    Button,
    Card,
    CardHeader, Divider,
    FormControl,
    Grid,
    MenuItem,
    Paper,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateRangePicker} from "@mui/x-date-pickers-pro";
import React from "react";

export const ResultsTable = (props) => {

    const tableCustomStyles = {
        headRow: {
            style: {
                fontWeight: "bold"
            },
        },
    }


    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Expense Description',
            selector: row => row.product,
        },
        {
            name: 'Category',
            selector: row => row.label,
        },
        {
            name: 'Cost €',
            selector: row => row.cost,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.timestamp
        },
        {
            key: 'edit', text: 'edit', sortable: false, cell: (record) => {
                return (
                    <>
                        <Grid container>
                            <Grid item>
                                <Button startIcon={<EditIcon/>} onClick={() => props.editAction(record)}></Button>
                            </Grid>
                            <Grid item>
                                <Button color={"error"} startIcon={<DeleteIcon/>}
                                        onClick={(() => props.deleteAction(record))}/>
                            </Grid>
                        </Grid>
                    </>
                )
            }
        }
    ];


    return (
        <Card square={false} paddingBottom={5}>
            <CardHeader
                title={"Expense Results"}
                style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
            />

            <Paper>
                <DataTable
                    columns={columns}
                    data={props.data}
                    striped
                    customStyles={tableCustomStyles}
                >
                </DataTable>
            </Paper>
        </Card>


    )
}