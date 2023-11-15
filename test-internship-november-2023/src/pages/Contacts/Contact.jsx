import React, { useState } from 'react';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import './contact.css'


export const Contact = () => {
const [name, setName] = useState('');
const [surname, setSurnameame] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [formData, setFormData] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
       
        const formDataJson = {
            name,
            surname,
            phone,
            email,
        };

        setFormData(formDataJson);

        setName('');
        setSurnameame('');
        setPhone('');
        setEmail('');
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    type='text'
                    fullWidth
                    required
                    inputProps={{
                        pattern: '^[A-Za-z]+$',
                        title: 'Please enter only letters'
                    }}
                />
                <TextField
                value={surname}
                onChange={(e) => setSurnameame(e.target.value)}
                    label="Surname"
                    type='text'
                    fullWidth
                    required
                    inputProps={{
                        pattern: '^[A-Za-z]+$',
                        title: 'Please enter only letters'
                    }}
                />
                <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                    label="Phone"
                    type='number'
                    fullWidth
                    required
                    inputProps={{
                        pattern: '[0-9]+',
                        title: 'Please enter only numbers'
                    }}
                />
                <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    label="E-mail"
                    type='email'
                    required
                    fullWidth
                />
                <Button className='button' type="submit" variant="contained" >
                    Submit
                </Button>

            </form>
            {formData && (
                <>
                    <h2>Data (JSON):</h2>
                    <p>{JSON.stringify(formData, null, 2)}</p>
                </>
            )}
        </div>
    );

};



