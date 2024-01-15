import {Card, CardHeader, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";


export const StatsForm = (props) => {
    const [mostUsedCategory, setMostUsedCategory] = useState([]);
    const [leastUsedCategory, setLeastUsedCategory] = useState([]);
    const [totalAmountSpent, setTotalAmountSpent] = useState(0)

    useEffect(() => {
        findMaxCategory().then((results) => {
            const maxItem = results.reduce((max, item) => (item.value > max.value ? item : max), results[0]);
            const minItem = results.reduce((min, item) => (item.value < min.value ? item : min), results[0]);
            axios.get("http://localhost:8080/api/statistics").then((response) => {
                setTotalAmountSpent(response.data.sum)
            })
            setMostUsedCategory(maxItem)
            setLeastUsedCategory(minItem)
        })
    }, [props]);

    const findMaxCategory = async () => {
        const categories = ["TRANSPORT", "HYGIENE", "OTHER", "ENTERTAINMENT", "FOOD"];

        const results = await Promise.all(
            categories.map(async (item) => ({
                category: item,
                value: await getSumOfEachCategory(item),
            }))
        );
        return results

    }


    const getSumOfEachCategory = async (category) => {
        const response = await axios.get("http://localhost:8080/api/statistics?category=" + category)
        return response.data.sum
    }


    return (
        <Card square={false} paddingBottom={5}>
            <CardHeader
                title={"Expense Analysis"}
                subheader={"See Detailed Information About your expenses"}
                style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
            />
            <Grid container spacing={3} padding={2}>
                <Grid item xs={4}>
                    <Typography variant={"h5"}>Category with biggest total</Typography>
                    <Typography variant={"subtitle"}>{mostUsedCategory.category}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant={"h5"}>Category with smallest total</Typography>
                    <Typography variant={"subtitle"}>{leastUsedCategory.category}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant={"h5"}>Total Amount spent</Typography>
                    <Typography variant={"subtitle"}>{totalAmountSpent} €</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}