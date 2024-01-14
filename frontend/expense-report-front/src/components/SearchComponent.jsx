import {
    Button,
    Card,
    CardHeader,
    Divider,
    FormControl,
    Grid,
    MenuItem,
    Paper,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import {DateRangePicker} from "@mui/x-date-pickers-pro";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React, {useState} from "react";

export const SearchComponent = (props) => {

    const [sliderValue, setSliderValue] = useState([0, 1000000]);
    const [product, setProduct] = useState("")
    const [category, setCategory] = useState("all")
    const [dates, setDates] = useState()

    const options = [
        {
            value: 'FOOD',
            label: 'Food',
        },
        {
            value: 'TRANSPORT',
            label: 'Transport',
        },
        {
            value: 'ENTERTAINMENT',
            label: 'Entertainment',
        },
        {
            value: 'HYGIENE',
            label: 'Hygiene',
        },
        {
            value: 'OTHER',
            label: 'Other',
        },
        {
            value: "all",
            label: "All"
        }
    ];

    const handleSearch = () => {
        props.handleSearch({
            "product": product,
            "costFrom": sliderValue[0],
            "costTo": sliderValue[1],
            "category": category,
            "timestampFrom": (typeof dates != 'undefined') > 0 ? new Date(dates[0]).toISOString() : "",
            "timestampTo": (typeof dates != 'undefined') > 0 ? new Date(dates[1]).toISOString() : ""
        })
    }

    const handleMuiSelectOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log("handleMuiSelectOnChange", event.type);
        setCategory(event.target.value);
    };


    return (
        <Card square={false} paddingBottom={5}>
            <CardHeader
                title={"Search Results"}
                subheader={"Search with one ore more filters"}
                style={{"backgroundColor": "#3c8dbc", "color": "#ffff"}}
            />
            <Grid container spacing={3} padding={2}>

                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateRangePicker
                            onChange={(newValue) => setDates(newValue)}
                            localeText={{start: 'Date From', end: 'Date To'}}
                            value={dates}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={1}>
                    <TextField name={"product"} value={product} onChange={(event) => setProduct(event.target.value)}
                               placeholder={"Product"}></TextField>
                </Grid>
                <Grid item xs={1}>
                    <FormControl fullWidth>
                        <TextField name={"type"} id="outlined-select-currency" select label="Category"
                                   defaultValue={category} onChange={handleMuiSelectOnChange}>
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>

                </Grid>
                <Grid item xs={1}>
                    <Typography variant={"p"} component={"p"}>
                        Cost Range
                    </Typography>
                    <Slider
                        min={0}
                        max={3000}
                        onChange={(event, newValue) => setSliderValue(newValue)}
                        valueLabelDisplay={"auto"}
                        value={sliderValue}
                    />
                </Grid>
                <Grid item xs={12} spacing={2} container justifyContent={"flex-end"}>
                    <Button>Reset Filters</Button>
                    <Button onClick={handleSearch} variant={"contained"}>Search</Button>
                </Grid>
                <Divider orientation="vertical" flexItem/>
            </Grid>
        </Card>

    )
}