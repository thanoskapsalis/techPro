import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {ExpenseForm} from "./components/ExpenseForm";
import {ResultsTable} from "./components/ResultsTable";
import {useState} from "react";

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            label: "Test",
            type: 'drugs',
            price: 33
        },
    ])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            label: event.target.label.value,
            type: event.target.type.value,
            price: event.target.price.value,
        };
        setData([...data, { id: 2222, label: formData.label, type: formData.type, price: formData.price }]);
    }
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <ExpenseForm handleSubmit={handleSubmit}></ExpenseForm>
            <ResultsTable data={data}></ResultsTable>
        </div>
    );
}

export default App;
