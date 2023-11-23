import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {ExpenseForm} from "./components/ExpenseForm";
import {ResultsTable} from "./components/ResultsTable";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <ExpenseForm></ExpenseForm>
            <ResultsTable></ResultsTable>
        </div>
    );
}

export default App;
