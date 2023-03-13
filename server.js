import express from 'express'
import cors from 'cors' //cors policy

const app = express()
const ADRESS = process.env.ADRESS;

const corsOptions ={
    origin:ADRESS,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.get('/', (req, res) => { 
    res.send('hello world');
})


app.use(cors(corsOptions));

app.listen(ADRESS);