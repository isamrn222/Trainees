if(process.env.NODE_ENV == 'development'){
  require('dotenv').config();
}

//importar modulos necesesarios
const express = require('express');
const morgan= require('morgan');
const cors= require('cors');
const { connectDB } =require('./src/DB/config');
const bodyParser= require('body-parser');
const instituteRouter= require('./src/institutes/instituteRoute');
const responsabilityRouter= require('./src/responsabilitie/responsabilitieRoute');
const responsabilitiestraineeRouter= require('./src/responsabilitiestrainee/responsabilitiestraineeRoute');
const traineeRouter= require('./src/trainee/traineeRoute');

//configuracion de middlewares
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
connectDB();

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Bienvenido a mi microservicio de practicantes');
});


app.use('/institutes',instituteRouter);
app.use('/responsabilities',responsabilityRouter);
app.use('/responsabilitiestrainees',responsabilitiestraineeRouter);
app.use('/trainees',traineeRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento, puerto: ${PORT}`);
});
