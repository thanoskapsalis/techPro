import DataTable from 'react-data-table-component';
import {Box, Button, Grid, Paper} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ResultsTable = (props) => {

    const datasourceUrl = "http://localhost:8080/api"


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
            selector: row => row.cost
        },
        {
            name: "Date",
            selector: row => row.timestamp
        },
        {
            key: 'edit', text: 'edit', sortable: false, cell: (record) => {
                return (
                    <>
                      <Grid container >
                          <Grid item>
                              <Button startIcon={<EditIcon/>} onClick={() => props.editAction(record)}></Button>
                          </Grid>
                          <Grid item >
                              <Button color={"error"} startIcon={<DeleteIcon/>} onClick={(() => props.deleteAction(record))}/>
                          </Grid>
                      </Grid>
                    </>
                )
            }
        }
    ];




    return (
        <Paper>
            <DataTable
                title="Expense Records"
                columns={columns}
                data={props.data}
            />
        </Paper>
    )
}