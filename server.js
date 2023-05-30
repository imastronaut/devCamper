const express = require('express');
const dotenv = require('dotenv');

//Route Files
const bootcamps = require('./routes/bootcamps');
//Load env vars
dotenv.config({path : './config/config.env'})

//Import middleware logger function
const logger = require('./middleware/logger')

const morgan = require('morgan')



const app = express();




// app.use(logger);

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


//Mount routers
app.use('/api/v1/bootcamps',bootcamps)

//Get the port on which the application server should run on
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))