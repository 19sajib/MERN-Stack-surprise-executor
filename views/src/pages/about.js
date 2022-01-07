import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const about = () => {
    return (
        <Paper style={{marginTop: '30px', padding: '10px'}} elevation={2}>
            <Typography align="center" variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="h6">We are here to make your occassions colorful for your close ones, even if you are not present.</Typography>
            <Typography variant="h6">We belive in Your Plan and Our Execution.</Typography>
        </Paper>
        )
}

export default about
