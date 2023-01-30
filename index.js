const express = require('express'); 
const app = express();


// Middleware
app.use((req, res, next) => {
  const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
  console.log(mensaje);
  next()
})


app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Este request/response está OK'
   })
})





const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});