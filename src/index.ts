import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import route from './route';

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
const MONGO_URL = 'mongodb+srv://hodinhtuankiet:hodinhtuankiet@cluster0.komeixn.mongodb.net/?retryWrites=true&w=majority';
mongoose.Promise = Promise;

mongoose.connection.on('error', (error: Error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('open', () => {
  console.log('MongoDB connected successfully!');
  // Bất kỳ mã xử lý nào bạn muốn thực hiện sau khi kết nối thành công cũng có thể được đặt ở đây.
});

mongoose.connect(MONGO_URL)

app.use('/',route());