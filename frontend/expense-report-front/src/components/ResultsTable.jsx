import DataTable from 'react-data-table-component';
import {Box, Paper} from "@mui/material";

export const ResultsTable = (props) => {


    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Product',
            selector: row => row.product,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Cost',
            selector: row => row.cost
        },
        {
            name: "Date",
            selector: row =>  row.timestamp
        }
    ];


    return (
        <Paper>
            <DataTable
                title="Expenses"
                columns={columns}
                data={props.data}
            />
        </Paper>
    )
}