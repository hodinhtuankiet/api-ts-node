import express from 'express';
import authentication from './authentication';

const router = express.Router();

export default (): express.Router => {
    // Sử dụng route từ tệp authentication
    authentication(router);

    return router;
}
