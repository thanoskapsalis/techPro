import {NavigationBar} from "../components/NavigationBar";
import {useEffect, useState} from "react";
import axios from "axios";
import {PitaComponent} from "../components/PitaComponent";
import {Button, Grid} from "@mui/material";
import {StatsForm} from "../components/StatsForm";
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from "react-router-dom";

export const StatsPage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const datasourceUrl = 'http://localhost:8080/api'

    useEffect(() => {
        getInitialData()
    }, [])

    const getInitialData = () => {
        axios.get(datasourceUrl + "/expenses").then((response) => {
            const results = response.data.map(item => ({...item, category: item.category.toLowerCase()}))
            setData(results);
        })

    }


    return (
        <div style={{"backgroundColor": "#F4F5F7"}}>
            <NavigationBar/>
            <Grid container spacing={2} padding={5} >
                <Grid container xs={12} padding={2} justifyContent={"flex-end"}>
                    <Button variant={"contained"} color={"success"} startIcon={<HomeIcon/>} onClick={() => navigate('/')}>HOME</Button>
                </Grid>
                <Grid item paddingBottom={5} xs={12}>
                    <StatsForm></StatsForm>
                </Grid>
                <Grid item xs={12}>
                    <PitaComponent data={data}></PitaComponent>
                </Grid>
            </Grid>
        </div>
    )
}