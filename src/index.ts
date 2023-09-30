import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';


const app = express();
// credentials: true allow send infor like cookies,authentication
// cors: configuration middleware
app.use(cors({
    credentials: true,
}))
// compress data before sending it to browser
app.use(compression());
// read and write data to cookie
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(8080,()=>{
    console.log('runnnnnnnn');
    
})