import React from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { InputAdornment } from '@mui/material';

const useStyle = makeStyles({
    formStyle: {
        width: "50%",
        margin: "auto",
        padding: 20,
        border: "1px solid black",
        paddingTop: 20,
        boxShadow: "0px 0px 8px rgba(0,0,0,0.5)",
    },
    myBtn: {
        marginTop: 10,
        width: "10%",
    }
});

function Home () {
    const classes = useStyle()
    return(
        <div className="Home">
            <header className="Home-header">
                <h1>Money Transfer</h1>      
            </header>

            <div className="moneyForm">
                <FormGroup className={classes.formStyle}>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="contact">Target User</InputLabel>
                        <Input
                            id="contact"
                            startAdornment={<InputAdornment position="start">-</InputAdornment>}
                        />
                    </FormControl> 
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl> 
                    <Button variant="contained" color='secondary' className={classes.myBtn}>Send</Button> 
                </FormGroup>
                
            </div>
        </div>
        
    )
    
}

export default Home;