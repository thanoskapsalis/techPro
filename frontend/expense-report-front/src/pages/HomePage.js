import {useEffect, useState} from "react";
import axios from "axios";
import {ResultsTable} from "../components/ResultsTable";
import {ExpenseForm} from "../components/ExpenseForm";
import {NavigationBar} from "../components/NavigationBar";

export const HomePage = () => {

    const [data, setData] = useState([])
    const datasourceUrl = 'http://localhost:8080/api/expenses';

    useEffect(() => {
        updateTable()
    }, []);

    const sendDataToDatabase = (formData) => {
        axios.post(datasourceUrl, formData).then((response) => {
            console.log(response)
            updateTable()
        })
    }

    const updateTable = () => {
        axios.get(datasourceUrl).then((response) => {
            console.log(response.data)
            setData(response.data)
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
    }
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <ExpenseForm handleSubmit={handleSubmit}></ExpenseForm>
            <ResultsTable data={data}></ResultsTable>
        </div>

    )
}