const express = require('express');

require('dotenv').config()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/ongRoutes')
app.use('/api', userRouter)

app.get('/', (req, res) => {
    res.send("Hello from Mercado Solidario")
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});