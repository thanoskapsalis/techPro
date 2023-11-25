import DataTable from 'react-data-table-component';
import {Box, Paper} from "@mui/material";

export const ResultsTable = (props) => {


    const columns = [
        {
            name: 'Expense Label',
            selector: row => row.label,
        },
        {
            name: 'Expense Type',
            selector: row => row.type,
        },
        {
            name: 'Expense Price',
            selector: row => row.price
        }
    ];


    return (
        <Paper>
            <DataTable
                title="Expense Results"
                columns={columns}
                data={props.data}
            />
        </Paper>
    )
}