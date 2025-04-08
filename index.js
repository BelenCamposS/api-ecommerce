const express = require('express');
const app = express();
const authRoutes = require('./route/authRoutes');

app.use(express.json());
app.use('/api', authRoutes);

const port = 3000;
app.listen(port, () => {
 console.log(`Servidor escuchando en el puerto ${port}`);
});