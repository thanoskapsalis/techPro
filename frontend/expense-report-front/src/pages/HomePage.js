import {useEffect, useState} from "react";
import axios from "axios";
import {ResultsTable} from "../components/ResultsTable";
import {ExpenseForm} from "../components/ExpenseForm";
import {SearchComponent} from "../components/SearchComponent";
import {Button, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import {NavigationBar} from "../components/NavigationBar";
import {useNavigate, useNavigation} from "react-router-dom";

export const HomePage = () => {

    const [data, setData] = useState([])
    const navigation = useNavigate()
    const datasourceUrl = 'http://localhost:8080/api';
    const [showAddNewModal, setShowAddNewModal] = useState(false)


    const [showEditModal, setShowEditModal] = useState(false)
    const [editElement, setEditElement] = useState({})


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
            const results = response.data.map(item => ({
                ...item,
                category: item.category.toLowerCase(),
                label: item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()
            }))
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
        axios.get(url).then((response) => {
            const results = response.data.map(item => ({
                ...item, category: item.category.toLowerCase(),
                label: item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()
            }))
            setData(results)
        })
    }

    const editAction = (record) => {
        setEditElement(record)
        setShowEditModal(true)
    }

    const deleteAction = (record) => {
        axios.delete(datasourceUrl + "/expenses/" + record.id).then((response) => {
            getInitialData()
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

    const handleUpdate = (event) => {
        event.preventDefault();
        const formData = {
            product: event.target.label.value,
            category: event.target.type.value,
            cost: event.target.price.value,
            id: editElement.id
        };

        axios.put(datasourceUrl +"/expenses/" + editElement.id, formData).then((response) => {
            getInitialData();
            setShowEditModal(false)
        })
    }

    return (
        <div style={{"backgroundColor": "#F4F5F7"}}>
            <NavigationBar></NavigationBar>
            <div style={{padding: 50, "backgroundColor": "e0dcef"}}>
                <Grid container justifyContent={"flex-end"} spacing={2} paddingBottom={5}>
                    <Grid item>
                        <Button variant={"contained"} color={"info"} startIcon={<AnalyticsIcon/>}
                                onClick={() => navigation("/stats")}>Analytics</Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} color={"success"} startIcon={<AddIcon/>}
                                onClick={() => setShowAddNewModal(true)}>Add new Expense</Button>
                    </Grid>
                </Grid>
                <Grid container paddingBottom={5}>
                    <ExpenseForm isOpen={showAddNewModal}
                                 closeModal={() => setShowAddNewModal(false)}
                                 handleSubmit={handleSubmit}
                                 editMode={false}
                    />
                </Grid>
                <Grid conainer paddingBottom={5}>
                    <SearchComponent handleSearch={handleSearch}></SearchComponent>
                </Grid>
                <ResultsTable data={data} editAction={editAction} deleteAction={deleteAction}></ResultsTable>
                <ExpenseForm
                    editMode={true}
                    isOpen={showEditModal}
                    closeModal={() => setShowEditModal(false)}
                    editElement={editElement}
                    handleSubmit={handleUpdate}
                />
            </div>
        </div>


    )
}