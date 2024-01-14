import {NavigationBar} from "../components/NavigationBar";
import {useEffect, useState} from "react";
import axios from "axios";
import {PitaComponent} from "../components/PitaComponent";
import {Grid} from "@mui/material";
import {StatsForm} from "../components/StatsForm";

export const StatsPage = () => {
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
            <Grid container spacing={2} padding={5}>
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