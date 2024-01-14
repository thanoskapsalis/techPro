import React, {useEffect, useState} from "react";
import {PieChart} from '@mui/x-charts/PieChart';

import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Box, Card, CardHeader, Grid, Typography} from "@mui/material";
import {StatsForm} from "./StatsForm";

export const PitaComponent = (props) => {

    const [backEndData, setBackEndData] = useState([
        {

            name: "transport",
            value: 0
        },
        {

            name: "food",
            value: 0
        },
        {

            name: "entertainment",
            value: 0
        },
        {

            name: "hygiene",
            value: 0
        },
        {
            name: "other",
            value: 0
        }
    ]);

    useEffect(() => {
        countTimesAppeared(props.data)
    }, [props.data]);

    const countTimesAppeared = (array) => {
        array.forEach(item => {
            // Find the index of the item in the data array by its name
            const index = backEndData.findIndex(d => d.name === item.category);
            // If the item is found, update its value by incrementing by one
            if (index !== -1) {
                setBackEndData(prevData => {
                    const newData = [...prevData];
                    newData[index] = {...newData[index], value: newData[index].value + item.cost};
                    return newData;
                });
            }
        });
    }


    return (
        <Card square={false} paddingBottom={5}>
            <CardHeader
                title={"Graphs"}
                subheader={"See Detailed Information About your expenses"}
                style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div style={{width: "500px", height: "500px"}}>
                        <ResponsiveContainer width="100%" height="86%" key={`lc__${backEndData.length}`}>
                            <BarChart width={730} height={250} data={backEndData} key={`lc_${backEndData.length}`}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="value" fill="#8884d8"/>
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Box flexGrow={1}>
                        <Typography>PieChart</Typography>
                        <PieChart
                            series={[
                                {
                                    data: backEndData.map(item => {
                                        const {name, ...rest} = item;
                                        return {...rest, label: name};
                                    }),
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Card>


    )
}