import {Card, CardHeader, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";


export const StatsForm = (props) => {




    useEffect(() => {


    }, [props]);




    return (
        <Card square={false} paddingBottom={5}>
            <CardHeader
                title={"Expense Analysis"}
                subheader={"See Detailed Information About your expenses"}
                style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
            />
            <Grid container spacing={3} padding={2}>

            </Grid>
        </Card>
    )
}