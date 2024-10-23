const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const transactionRoutes = require('./routes/transactions');


const app = express();


app.use(bodyParser.json());


app.use('/api', transactionRoutes);


sequelize.sync().then(() => {
    console.log('Database connected');
}).catch(err => {
    console.error('Error connecting to the database', err);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
