//----------------------------
const dotenv = require('dotenv');
dotenv.config();
//----------------------------


//----------------------------
const express = require('express');
//----------------------------


//---------connecting the database-------------------
require('./DB/index')
//----------------connecting the database------------

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT);

app.use(express.json());
app.use(cors());


const workerRouter = require('./Routing/workersRout');

app.use('/worker',workerRouter);

app.get('/',(request,response)=>{
    response.send({serverIsOnLine:true})
})