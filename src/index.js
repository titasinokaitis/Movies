import express from 'express';
import { PORT } from './env.js';

const app = express();
const PORT = 5517

app.get('/', (req, res) => {
    return res.send('HOME PAGE');
});
app.get('/', (req, res) => {
    return res.send('HOME PAGE');
});
app.listen(PORT, () => {

})