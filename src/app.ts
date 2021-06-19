import express,{Application, Router} from 'express';
const app : Application = express();
import cors from 'cors';
const router:Router = require('../src/route/route')
const PORT : number = 3000;
app.use(express.json())
app.use(express.text());
app.use('/ideas/v1',router);
app.use(cors())


app.listen(3000,()=>{
    console.log(`Server started at port ${PORT}`)
})