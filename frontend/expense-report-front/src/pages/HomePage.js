import {useEffect, useState} from "react";
import axios from "axios";
import {ResultsTable} from "../components/ResultsTable";
import {ExpenseForm} from "../components/ExpenseForm";
import {SearchComponent} from "../components/SearchComponent";
import {Button, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {NavigationBar} from "../components/NavigationBar";

export const HomePage = () => {

    const [data, setData] = useState([])
    const datasourceUrl = 'http://localhost:8080/api';
    const [showAddNewModal, setShowAddNewModal] = useState(false)


    useEffect(() => {
        getInitialData()
    }, []);

    const sendDataToDatabase = (formData) => {
        axios.post(datasourceUrl + "/expenses", formData).then((response) => {
            getInitialData()
        })
    }

    const getInitialData = () => {
        axios.get(datasourceUrl + "/expenses").then((response) => {
            const results = response.data.map(item => ({...item, category: item.category.toLowerCase()}))
            setData(results);
        })

    }


    const handleSearch = (query) => {
        let nonEmptyQuery = {}
        Object.keys(query).forEach(key => {
            if (query[key] !== "" && query[key] !== null && query[key] !== undefined && query[key] !== 'all') {
                nonEmptyQuery[key] = query[key];
            }
        });

        const url = datasourceUrl + "/search?" + new URLSearchParams(nonEmptyQuery).toString();
        console.log(url)
        axios.get(url).then((response) => {
            const results = response.data.map(item => ({...item, category: item.category.toLowerCase()}))
            setData(results)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            product: event.target.label.value,
            category: event.target.type.value,
            cost: event.target.price.value,
        };
        sendDataToDatabase(formData)
        setShowAddNewModal(false)
    }
    return (
        <div style={{"backgroundColor": "#F4F5F7"}}>
            <NavigationBar></NavigationBar>
            <div style={{padding: 50, "backgroundColor": "e0dcef"}}>
                <Grid container justifyContent={"flex-end"} paddingBottom={5}>
                    <Button variant={"contained"} color={"success"} startIcon={<AddIcon/>}
                            onClick={() => setShowAddNewModal(true)}>Add a new Expense</Button>
                </Grid>
                <Grid container paddingBottom={5}>
                    <ExpenseForm isOpen={showAddNewModal} closeModal={() => setShowAddNewModal(false)} handleSubmit={handleSubmit}></ExpenseForm>
                </Grid>
                <Grid conainer paddingBottom={5}>
                    <SearchComponent handleSearch={handleSearch}></SearchComponent>
                </Grid>
                <ResultsTable data={data}></ResultsTable>
            </div>
        </div>


    )
}