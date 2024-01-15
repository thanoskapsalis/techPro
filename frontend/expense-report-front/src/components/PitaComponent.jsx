import React, {useEffect, useState} from "react";
import {PieChart} from '@mui/x-charts/PieChart';

import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Label} from "recharts";
import {Box, Card, CardHeader, Grid, Typography} from "@mui/material";

export const PitaComponent = (props) => {

    const [backEndData, setBackEndData] = useState([
        {

            name: "transport",
            Category: 0
        },
        {

            name: "food",
            Category: 0
        },
        {

            name: "entertainment",
            Category: 0
        },
        {

            name: "hygiene",
            Category: 0
        },
        {
            name: "other",
            Category: 0
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
                    newData[index] = {...newData[index], Category: newData[index].Category + item.cost};
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
            <Grid container spacing={2} padding={5}>
                <Grid item xs={6}>
                    <div style={{width: "600px", height: "500px"}}>
                        <ResponsiveContainer width="100%" height="86%" key={`lc__${backEndData.length}`}>
                            <BarChart
                                width={730}
                                height={250}
                                data={backEndData.map((item) => ({
                                    ...item,
                                    name: item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()
                                }))}
                                key={`lc_${backEndData.length}`}
                                legendType={"none"}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name" />
                                <YAxis>
                                    <Label
                                        dx={-20}
                                        style={{
                                            textAnchor: "middle",
                                            fontSize: "100%",
                                        }}
                                        angle={270}
                                        value={"Cost (€)"}/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="Category" fill="#8884d8"/>
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Box flexGrow={1}>
                        <PieChart

                            series={[
                                {
                                    data: backEndData.map(item => {
                                        const {name, ...rest} = item;
                                        return {
                                            ...rest,
                                            value: item.Category,
                                            label: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
                                        };
                                    }),
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Card>


    )
}