const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://realtimechat:tahcemitlaer@cluster0-q4xjo.mongodb.net/realtimechat?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })

const routes = require('./routes');

const app = express();



app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);


