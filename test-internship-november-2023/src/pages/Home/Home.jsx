import React, { useState } from 'react';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './home.css'
import axios from 'axios';

export const Home = () => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [day, setDay] = useState('');
    const [responseData, setResponseData] = useState(null);

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=${day}&current=is_day,rain&daily=rain_sum,wind_speed_10m_max`);
           
            if (data) {
                setResponseData(data);
            } else {
                setResponseData(null);
            }
        } catch (error) {
            console.warn(error);
            alert("Error on API call")
        }

        setLatitude('');
        setLongitude('');
        setDay('');
    }

    console.log(responseData)
    return (
        <div>
            <form onSubmit={onSubmit} className="formular">
                <TextField
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    label="Latitude"
                    type='text'
                    fullWidth
                    required
                    inputProps={{
                        pattern: '^\\d*\\.?\\d*$',
                        title: 'Please enter only float numbers'
                    }}
                />
                <TextField
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    label="Longitude"
                    type='text'
                    fullWidth
                    required
                    inputProps={{
                        pattern: '^\\d*\\.?\\d*$',
                        title: 'Please enter only float numbers'
                    }}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={day}
                        label="Forecast Days"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1 day</MenuItem>
                        <MenuItem value={3}>3 day</MenuItem>
                        <MenuItem value={7}>7 day</MenuItem>
                        <MenuItem value={14}>14 day</MenuItem>
                    </Select>
                </FormControl>

                <Button className='button' type="submit" variant="contained" >
                    Search
                </Button>

            </form>
            {responseData === null ? (
                <p>No data found</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Longitude</th>
                            <th>Latitude</th>
                            <th>Timezone</th>
                            <th>Date</th>
                            <th>Rain Sun</th>
                            <th>Wind Speed</th>
                            <th>Day/Night</th>
                        </tr>
                    </thead>
                    <tbody>
                        {responseData.daily.time.map((day, index) => (
                            <tr key={index}>
                                <td>{responseData.longitude}</td>
                                <td>{responseData.latitude}</td>
                                <td>{responseData.timezone}</td>
                                <td>{day}</td>
                                <td>{responseData.daily.rain_sum[index]+"mm"}</td>
                                <td>{responseData.daily.wind_speed_10m_max[index]+'km/h'}</td>
                                <td>{responseData.current.is_day === 1 ? 'Day' : 'Night'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

}
