import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { blue, pink } from "@material-ui/core/colors";

const contact = () => {
    
    return (
        <Paper style={{marginTop: '30px', padding: '10px'}} elevation={2}>
            <Typography align="center" variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="h5">You can find us at</Typography>
            <div style={{marginLeft: '20px'}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <CallIcon />
                    <Typography
                        variant="subtitle1"
                    >
                        (+880) 1769696471
                    </Typography>
            </div> 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <MailIcon />
                    <Typography
                        variant="subtitle1"
                    >
                        chomkedin@gmail.com
                    </Typography>
            </div> 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <HomeIcon />
                    <Typography
                        variant="subtitle1"
                    >
                        Chasara, Narayanganj, Bangladesh 
                    </Typography>
                    </div> 

            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: '5px',
                align: 'center'
            }}>
                    <IconButton onClick={() => window.open('https://facebook.com/')}>
                    <FacebookIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://instagram.com/')}>
                    <InstagramIcon fontSize="large" style={{color: pink[500]}} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://twitter.com/')}>
                    <TwitterIcon  fontSize="large" style={{color: blue[400]}} />
                    </IconButton>           
                    
          </div> 

                    </div>
        </Paper>
    )
}

export default contact
