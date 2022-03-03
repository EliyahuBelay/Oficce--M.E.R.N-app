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

const workerRouter = require('./Routing/workersRout');
const userRouter = require('./Routing/userRout');


//----------------importing the passport module-----------
const passport = require('passport');
const { path } = require('express/lib/application');
//----------------importing the passport module-----------

//----------importing the function from passport file and invoce the func-------
require('./Config/passport')(passport);
//----------importing the function from passport file and invoce the func-------


const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT);

// app.get('/',(request,response)=>{
//     response.send({serverIsOnLine:true})
// })

app.use(passport.initialize());

app.use('/worker',passport.authenticate('jwt',{session:false}),workerRouter);

app.use('/auth',userRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(request,response)=>{
        response.sendFile(path.join(__dirname,'../client/build','index.html'));
    });
}